import React, { useState, useMemo, useEffect } from 'react';
import { 
  Award, ArrowLeft, ArrowRight, 
  RotateCcw, Share2, Printer, Volume2, VolumeX, 
  Check, Trophy, GraduationCap, User, ChevronRight, RefreshCw, Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_TESTS } from './constants';
import { Question, Section, UserProgress } from './types';

export default function App() {
  // Profile state
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('roadmap_user_name') || '';
  });
  const [tempName, setTempName] = useState<string>(userName);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(!userName);

  // Sound state
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('roadmap_sound');
    return saved === null ? true : saved === 'true';
  });

  // Selected Unit State
  const [selectedUnit, setSelectedUnit] = useState<string>('1');

  // Test active state
  const [isTestActive, setIsTestActive] = useState<boolean>(false);

  // Active quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string[] }>({});

  // History tracking state
  const [history, setHistory] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('roadmap_progress');
    return saved ? JSON.parse(saved) : {};
  });

  // Test completed report
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [lastScore, setLastScore] = useState<{ score: number; total: number } | null>(null);

  // Sync sounds setting to localstorage
  useEffect(() => {
    localStorage.setItem('roadmap_sound', String(soundEnabled));
  }, [soundEnabled]);

  // Save profile name
  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = tempName.trim();
    if (cleanName) {
      setUserName(cleanName);
      localStorage.setItem('roadmap_user_name', cleanName);
      setIsEditingProfile(false);
    }
  };

  // Get active test sections
  const activeSections = useMemo((): Section[] => {
    return ALL_TESTS['B1']?.[selectedUnit] || [];
  }, [selectedUnit]);

  // Flattened questions list to manage indexes easily
  const flatQuestions = useMemo(() => {
    const list: { question: Question; section: Section; sectionIndex: number; qIndex: number }[] = [];
    activeSections.forEach((section, sIdx) => {
      section.questions.forEach((q, qIdx) => {
        list.push({ question: q, section, sectionIndex: sIdx, qIndex: qIdx });
      });
    });
    return list;
  }, [activeSections]);

  const activeFlatItem = flatQuestions[currentQuestionIndex] || null;

  // Sound Synthesizer via Web Audio API
  const playSound = (type: 'success' | 'failure' | 'click' | 'complete') => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      if (type === 'success') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc1.type = 'sine';
        osc2.type = 'sine';
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.3);
        osc2.stop(ctx.currentTime + 0.3);
      } else if (type === 'failure') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(180, ctx.currentTime); // F3
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === 'complete') {
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
          osc.type = 'sine';
          gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + i * 0.1 + 0.4);
        });
      } else if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(1000, ctx.currentTime);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (e) {
      console.warn("Web Audio Context not allowed/supported:", e);
    }
  };

  // Start Test
  const handleStartTest = () => {
    if (!userName.trim()) {
      setIsEditingProfile(true);
      return;
    }
    playSound('click');
    setIsTestActive(true);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResultScreen(false);
  };

  // Set an answer for standard questions
  const updateAnswer = (questionId: string, values: string[]) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: values
    }));
  };

  // Check current question answer
  const isAnswerCorrect = (q: Question, answers: string[]): boolean => {
    if (!answers) return false;
    
    const normalize = (str: string) => str.trim().toLowerCase()
      .replace(/[’‘`´]/g, "'") // Normalize smart apostrophes
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "") // Strip punctuation
      .replace(/\s+/g, " "); // Normalize spaces

    if (q.type === 'choice' || q.type === 'order') {
      const userAns = normalize(answers[0] || "");
      return q.correctAnswers.some(correct => normalize(correct) === userAns);
    }

    let numBlanks = 0;
    if (q.type === 'fill' || q.type === 'cloze') {
      numBlanks = (q.text?.match(/\[blank\]/g) || []).length;
    }

    if (numBlanks > 1) {
      const userJoined = answers.slice(0, numBlanks).map(a => normalize(a || "")).join(" ");
      
      const matchedJoined = q.correctAnswers.some(correct => {
        const correctCleaned = correct.replace(/,/g, " ");
        return normalize(correctCleaned) === userJoined;
      });

      if (matchedJoined) return true;

      if (q.correctAnswers.length === numBlanks) {
        const allMatch = q.correctAnswers.every((correctPart, idx) => {
          return normalize(correctPart) === normalize(answers[idx] || "");
        });
        if (allMatch) return true;
      }

      return false;
    } else {
      const userAns = normalize(answers[0] || "");
      return q.correctAnswers.some(correct => normalize(correct) === userAns);
    }
  };

  // Navigation functions
  const handleNext = () => {
    playSound('click');
    if (currentQuestionIndex < flatQuestions.length - 1) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
    } else {
      handleSubmitTest();
    }
  };

  const handleBack = () => {
    playSound('click');
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIdx);
    }
  };

  // Grading logic
  const handleSubmitTest = () => {
    let score = 0;
    let totalGraded = 0;

    flatQuestions.forEach(({ question }) => {
      if (question.isExample) return; // Skip examples
      totalGraded++;
      const ans = userAnswers[question.id] || [];
      if (isAnswerCorrect(question, ans)) {
        score++;
      }
    });

    setLastScore({ score, total: totalGraded });
    setIsTestActive(false);
    setShowResultScreen(true);

    // Save progress to localstorage
    const testKey = `B1_${selectedUnit}`;
    const newProgress: UserProgress = {
      ...history,
      [testKey]: {
        completed: true,
        score,
        total: totalGraded,
        answers: userAnswers,
        date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
      }
    };
    setHistory(newProgress);
    localStorage.setItem('roadmap_progress', JSON.stringify(newProgress));

    // Sound and celebration
    const percent = Math.round((score / totalGraded) * 100);
    if (percent >= 50) {
      playSound('complete');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      playSound('failure');
    }
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm("Haqiqatan ham barcha o'tish tarixingizni va natijalarni o'chirib tashlamoqchimisiz?")) {
      playSound('click');
      setHistory({});
      localStorage.removeItem('roadmap_progress');
    }
  };

  // Share to telegram
  const handleShareResult = (unit: string, score: number, total: number) => {
    playSound('click');
    const pct = Math.round((score / total) * 100);
    const starCount = pct === 100 ? "⭐⭐⭐⭐⭐" : pct >= 80 ? "⭐⭐⭐⭐" : pct >= 50 ? "⭐⭐⭐" : "⭐";
    const text = `🎓 Roadmap B1 English Practice\n👤 O'quvchi: ${userName}\n📚 Unit: ${unit}\n🏆 Natija: ${score}/${total} (${pct}%)\n🌟 Baholash: ${starCount}\n🔥 Siz ham o'z bilimingizni sinab ko'ring!`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };



  // Drag-and-drop or clickable words for order questions
  const handleWordClick = (word: string, qId: string) => {
    playSound('click');
    const current = userAnswers[qId] || [];
    const sentence = current[0] || '';
    const currentWords = sentence ? sentence.split(' ') : [];
    
    // Toggle word
    if (currentWords.includes(word)) {
      const index = currentWords.indexOf(word);
      if (index > -1) {
        currentWords.splice(index, 1);
      }
    } else {
      currentWords.push(word);
    }
    
    const newSentence = currentWords.join(' ');
    updateAnswer(qId, [newSentence]);
  };

  // Clean the constructed sentence
  const handleResetSentence = (qId: string) => {
    playSound('click');
    updateAnswer(qId, ['']);
  };

  // Get options/words used in "order" sentence
  const getConstructedWords = (qId: string): string[] => {
    const current = userAnswers[qId] || [];
    const sentence = current[0] || '';
    return sentence ? sentence.split(' ') : [];
  };

  // Unit topics
  const getUnitTopic = (unitNum: string) => {
    switch (unitNum) {
      case '1': return "Grammar, Adjectives & Request";
      case '2': return "Past Habits, Travel & Stories";
      case '3': return "Present Perfect, Work & Suggestion";
      case '4': return "Comparatives, Books & Opinions";
      case '5': return "Modals, Conditionals & Housing";
      case '6': return "Second Conditional, Phrasal & Environment";
      case '7': return "Ability Modals, Milestones & Travel";
      case '8': return "Passive Voice, Geography & Apologising";
      case '9': return "More Passive, Shopping & Strong Adjectives";
      case '10': return "Reported Speech, School & Job Interview";
      default: return "Intermediate Lessons";
    }
  };

  return (
    <div id="app-container" className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Centered Applet Card */}
      <div className="bg-white w-full max-w-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col min-h-[550px] transition-all duration-300">
        
        {/* Applet Header */}
        <div className="bg-slate-50 px-6 py-4.5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">

          <a href="/">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-100">
              R
            </div>
            
          </a>
            <div>
              <h1 className="text-sm font-black text-slate-800 leading-none">Roadmap B1</h1>
              <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">English Practice Suite</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Audio Toggle */}
            <button 
              id="sound-toggle-btn"
              onClick={() => { playSound('click'); setSoundEnabled(!soundEnabled); }}
              className={`p-2 rounded-xl border transition-all ${soundEnabled ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-slate-100 border-slate-200 text-slate-400'} hover:scale-105 cursor-pointer`}
              title={soundEnabled ? "Tovushlarni o'chirish" : "Tovushlarni yoqish"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Applet Workspace */}
        <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between">
          
          {/* PROFILE / ISMNI KIRITISH VIEW */}
          {isEditingProfile ? (
            <div id="profile-container" className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full py-6 space-y-5 animate-fade-in">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Xush kelibsiz!</h3>
                <p className="text-sm text-slate-500">Iltimos, sertifikat va natijalar uchun ismingizni kiriting</p>
              </div>

              <form onSubmit={handleSaveName} className="space-y-4">
                <div>
                  <label htmlFor="student-name-input" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    To'liq ism-sharifingiz (Lotin alifbosida)
                  </label>
                  <input
                    id="student-name-input"
                    type="text"
                    required
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    placeholder="Masalan: Ilyosbek Nuriddinov"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 font-bold placeholder:text-slate-400 transition-all text-sm"
                  />
                </div>

                <div className="flex space-x-3 pt-2">
                  {userName && (
                    <button
                      id="cancel-profile-btn"
                      type="button"
                      onClick={() => { playSound('click'); setIsEditingProfile(false); }}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                    >
                      Bekor qilish
                    </button>
                  )}
                  <button
                    id="submit-profile-btn"
                    type="submit"
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-100 transition-all cursor-pointer"
                  >
                    Davom etish
                  </button>
                </div>
              </form>
            </div>
          ) : isTestActive && activeFlatItem ? (
            
            /* QUIZ / TEST RUNNER VIEW */
            <div id="active-test-container" className="flex-grow flex flex-col justify-between w-full animate-fade-in space-y-6">
              
              {/* Active Quiz Info Header */}
              <div className="flex items-center justify-between">
                <button
                  id="quit-test-btn"
                  onClick={() => {
                    if (confirm("Haqiqatan ham testni yakunlamasdan chiqmoqchimisiz? Natijalar saqlanmaydi.")) {
                      playSound('click');
                      setIsTestActive(false);
                    }
                  }}
                  className="flex items-center space-x-1 text-slate-500 hover:text-rose-600 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Chiqish</span>
                </button>

                <div className="text-right">
                  <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                    Savol: {currentQuestionIndex + 1} / {flatQuestions.length}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div id="test-progress-bar" className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/50">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-300" 
                  style={{ width: `${((currentQuestionIndex + 1) / flatQuestions.length) * 100}%` }}
                />
              </div>

              {/* Quiz Main Card Content */}
              <div className="flex-grow py-2">
                
                {/* Instruction Header */}
                <div className="mb-5 space-y-2">
                  <span className="text-[10px] font-extrabold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {activeFlatItem.section.title} Section
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-snug whitespace-pre-wrap">
                    {activeFlatItem.section.instruction}
                  </h2>
                  
                  {/* Option/Word Box if defined for section (cloze/fill) */}
                  {activeFlatItem.section.options && (
                    <div id="section-words-box" className="p-3 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
                      <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">Mavjud so'zlar:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeFlatItem.section.options.map((opt, i) => {
                          const isUsed = Object.values(userAnswers).some(ans => 
                            ans.some(val => val.toLowerCase().includes(opt.toLowerCase()))
                          );
                          return (
                            <span 
                              key={i} 
                              className={`px-2.5 py-0.5 text-xs font-bold rounded-lg border transition-all ${isUsed ? 'bg-slate-100 border-slate-200 text-slate-300 line-through' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}
                            >
                              {opt}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Example Badge */}
                {activeFlatItem.question.isExample && (
                  <div className="mb-4 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl p-3 flex items-start space-x-2">
                    <Star className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-100" />
                    <div>
                      <span className="font-extrabold text-xs text-amber-900">Namuna (Example Question)</span>
                      <p className="text-[10px] text-amber-700 mt-0.5">Bu savol namunaviy bo'lib, uning javobi to'ldirilgan va umumiy ballga qo'shilmaydi.</p>
                    </div>
                  </div>
                )}

                {/* DYNAMIC QUESTION INTERFACE */}
                <div id="dynamic-question-content" className="py-2">
                  
                  {/* TYPE A: MULTIPLE CHOICE */}
                  {activeFlatItem.question.type === 'choice' && (
                    <div className="space-y-3">
                      {activeFlatItem.question.instruction && (
                        <p className="text-base font-bold text-slate-800 mb-4 whitespace-pre-wrap leading-relaxed">
                          {activeFlatItem.question.instruction.split('[blank]').map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="inline-block px-2.5 py-0.5 mx-1 bg-indigo-50 text-indigo-600 font-extrabold border-b-2 border-indigo-500 rounded">
                                  {userAnswers[activeFlatItem.question.id]?.[0] || '_____'}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      )}

                      <div className="grid grid-cols-1 gap-2.5">
                        {activeFlatItem.question.options?.map((option, idx) => {
                          const isSelected = (userAnswers[activeFlatItem.question.id]?.[0] === option) || 
                                              (activeFlatItem.question.isExample && activeFlatItem.question.correctAnswers[0] === option);
                          const isDisabled = activeFlatItem.question.isExample;

                          return (
                            <button
                              id={`choice-option-${idx}`}
                              key={idx}
                              type="button"
                              disabled={isDisabled}
                              onClick={() => {
                                playSound('click');
                                updateAnswer(activeFlatItem.question.id, [option]);
                              }}
                              className={`p-3.5 text-left rounded-xl border-2 font-bold text-sm transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                              } ${isDisabled ? 'opacity-85' : 'cursor-pointer'}`}
                            >
                              <span className="flex-grow pr-3">{option}</span>
                              <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'}`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TYPE B: FILL IN THE BLANK */}
                  {activeFlatItem.question.type === 'fill' && (
                    <div className="space-y-3">
                      {activeFlatItem.question.text && (
                        <div className="text-base font-bold text-slate-800 leading-relaxed whitespace-pre-wrap">
                          {activeFlatItem.question.text.split('[blank]').map((part, i, arr) => {
                            const inputIndex = i;
                            const isExample = activeFlatItem.question.isExample;
                            return (
                              <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <div className="inline-block align-baseline min-w-[160px] max-w-full mx-1 relative">
                                    <input
                                      id={`fill-blank-input-${inputIndex}`}
                                      type="text"
                                      disabled={isExample}
                                      value={
                                        isExample 
                                          ? (activeFlatItem.question.correctAnswers[inputIndex] || activeFlatItem.question.correctAnswers[0] || '') 
                                          : (userAnswers[activeFlatItem.question.id]?.[inputIndex] || '')
                                      }
                                      onChange={(e) => {
                                        const currentAnswersList = [...(userAnswers[activeFlatItem.question.id] || [])];
                                        currentAnswersList[inputIndex] = e.target.value;
                                        updateAnswer(activeFlatItem.question.id, currentAnswersList);
                                      }}
                                      placeholder="Javobingiz..."
                                      className="w-full px-2.5 py-0.5 bg-indigo-50/50 border-b-2 border-indigo-400 focus:border-indigo-600 focus:bg-white focus:outline-none text-indigo-950 font-black text-center transition-all rounded text-sm"
                                    />
                                  </div>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      )}

                      {/* Display clue if available */}
                      {activeFlatItem.question.clue && (
                        <p className="text-xs text-slate-400 font-bold italic mt-2">
                          Kalit so'z: <span className="font-extrabold text-slate-600 not-italic bg-slate-100 px-2 py-0.5 rounded">{activeFlatItem.question.clue}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* TYPE C: CLOZE */}
                  {activeFlatItem.question.type === 'cloze' && (
                    <div className="space-y-3">
                      {activeFlatItem.question.text && (
                        <div className="text-base font-bold text-slate-800 leading-relaxed whitespace-pre-wrap">
                          {activeFlatItem.question.text.split('[blank]').map((part, i, arr) => {
                            const inputIndex = i;
                            const isExample = activeFlatItem.question.isExample;

                            return (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <div className="inline-block align-baseline min-w-[110px] max-w-[150px] mx-1 relative">
                                      <input
                                        id={`cloze-input-${inputIndex}`}
                                        type="text"
                                        disabled={isExample}
                                        value={
                                          isExample 
                                            ? activeFlatItem.question.correctAnswers[inputIndex] || ''
                                            : (userAnswers[activeFlatItem.question.id]?.[inputIndex] || '')
                                        }
                                        onChange={(e) => {
                                          const currentAnswersList = [...(userAnswers[activeFlatItem.question.id] || [])];
                                          currentAnswersList[inputIndex] = e.target.value;
                                          updateAnswer(activeFlatItem.question.id, currentAnswersList);
                                        }}
                                        placeholder={`(${inputIndex + 1})`}
                                        className="w-full px-2 py-0.5 bg-indigo-50/50 border-b-2 border-indigo-400 focus:border-indigo-600 focus:bg-white focus:outline-none text-indigo-955 font-black text-center transition-all rounded text-sm"
                                      />
                                    </div>
                                  )}
                                </React.Fragment>
                            );
                          })}
                        </div>
                      )}

                      {activeFlatItem.question.clue && (
                        <p className="text-xs text-slate-400 font-bold italic mt-2">
                          Kalit so'z: <span className="font-extrabold text-slate-600 not-italic bg-slate-100 px-2 py-0.5 rounded">{activeFlatItem.question.clue}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* TYPE D: ORDER WORDS */}
                  {activeFlatItem.question.type === 'order' && (
                    <div className="space-y-4">
                      
                      {/* Constructed words */}
                      <div id="order-target-sentence" className="p-4 bg-indigo-50/40 rounded-xl border border-dashed border-indigo-200 min-h-[60px] flex flex-wrap items-center gap-1.5">
                        {getConstructedWords(activeFlatItem.question.id).length > 0 ? (
                          getConstructedWords(activeFlatItem.question.id).map((word, wIdx) => (
                            <button
                              id={`constructed-word-${wIdx}`}
                              key={wIdx}
                              disabled={activeFlatItem.question.isExample}
                              onClick={() => handleWordClick(word, activeFlatItem.question.id)}
                              className="px-2.5 py-1 bg-white border border-indigo-200 text-indigo-950 font-extrabold rounded-lg shadow-sm text-xs hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700 transition-colors cursor-pointer"
                            >
                              {word}
                            </button>
                          ))
                        ) : (
                          <span className="text-slate-400 text-xs font-bold italic">Gap tuzish uchun quyidagi so'zlarni bosing...</span>
                        )}
                      </div>

                      {/* Words pool */}
                      <div id="order-words-pool" className="flex flex-wrap gap-1.5 pt-1">
                        {activeFlatItem.question.words?.map((word, wordIdx) => {
                          const isUsed = getConstructedWords(activeFlatItem.question.id).includes(word);
                          const isDisabled = activeFlatItem.question.isExample || isUsed;

                          return (
                            <button
                              id={`pool-word-${wordIdx}`}
                              key={wordIdx}
                              disabled={isDisabled}
                              onClick={() => handleWordClick(word, activeFlatItem.question.id)}
                              className={`px-3 py-1.5 font-bold text-xs rounded-lg border transition-all ${
                                isUsed
                                  ? 'bg-slate-100 border-slate-200 text-slate-300 scale-95 opacity-50 cursor-not-allowed'
                                  : 'bg-white border-slate-300 text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 active:scale-95 cursor-pointer'
                              }`}
                            >
                              {word}
                            </button>
                          );
                        })}
                      </div>

                      {/* Reset Sentence Button */}
                      {!activeFlatItem.question.isExample && (
                        <button
                          id="reset-order-sentence"
                          type="button"
                          onClick={() => handleResetSentence(activeFlatItem.question.id)}
                          className="flex items-center space-x-1 text-slate-400 hover:text-slate-600 font-extrabold text-[10px] uppercase tracking-wider transition-colors pt-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Tozalash (Reset)</span>
                        </button>
                      )}
                    </div>
                  )}

                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div id="quiz-navigation-bar" className="flex items-center justify-between pt-4 border-t border-slate-150">
                <button
                  id="prev-question-btn"
                  type="button"
                  disabled={currentQuestionIndex === 0}
                  onClick={handleBack}
                  className={`flex items-center space-x-1 px-4 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                    currentQuestionIndex === 0
                      ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Orqaga</span>
                </button>

                <button
                  id="next-question-btn"
                  type="button"
                  onClick={handleNext}
                  className="flex items-center space-x-1 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md shadow-indigo-100 transition-all cursor-pointer"
                >
                  <span>{currentQuestionIndex === flatQuestions.length - 1 ? "Yakunlash" : "Keyingisi"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Micro Jump Dot Nav at Bottom */}
              <div id="micro-progress-container" className="flex flex-wrap justify-center gap-1 py-1">
                {flatQuestions.map((item, idx) => {
                  const isSelected = idx === currentQuestionIndex;
                  const isAnswered = (userAnswers[item.question.id]?.filter(Boolean).length || 0) > 0;
                  
                  return (
                    <button
                      id={`dot-nav-${idx}`}
                      key={idx}
                      onClick={() => { playSound('click'); setCurrentQuestionIndex(idx); }}
                      className={`w-5 h-5 rounded-md transition-all flex items-center justify-center text-[9px] font-black cursor-pointer ${
                        isSelected 
                          ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-200'
                          : isAnswered 
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
                            : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200'
                      }`}
                      title={`Savol ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

            </div>
          ) : showResultScreen && lastScore ? (
            
            /* RESULTS SCREEN VIEW */
            <div id="results-screen-wrapper" className="flex-grow flex flex-col justify-between w-full animate-fade-in space-y-6">
              
              <div className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                  <Trophy className="w-7 h-7 stroke-[2.5]" />
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {Math.round((lastScore.score / lastScore.total) * 100) >= 80 
                    ? "Ajoyib natija! 🎉" 
                    : Math.round((lastScore.score / lastScore.total) * 100) >= 50 
                      ? "Yaxshi ko'rsatkich! 👍" 
                      : "Yana bir bor urinib ko'ring! 📚"}
                </h2>
                
                <p className="text-slate-500 text-xs font-bold max-w-sm mx-auto">
                  Siz B1 darajadagi <strong>Unit {selectedUnit}</strong> imtihonini yakunladingiz. Natijangiz muvaffaqiyatli saqlandi.
                </p>

                {/* Circular Score Ring */}
                <div className="my-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-slate-100 flex flex-col items-center justify-center bg-slate-50 shadow-inner">
                    <span className="text-3xl font-black text-slate-800">{lastScore.score}</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">/ {lastScore.total} ball</span>
                  </div>
                </div>

                {/* Score percentage badge */}
                <div className="inline-flex items-center space-x-1.5 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700">
                  <Award className="w-4 h-4 text-indigo-600" />
                  <span>Ko'rsatkich: {Math.round((lastScore.score / lastScore.total) * 100)}%</span>
                </div>

                {/* Actions Row */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <button
                    id="go-to-dashboard-btn"
                    onClick={() => { playSound('click'); setShowResultScreen(false); }}
                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer"
                  >
                    Bosh sahifa
                  </button>

                  <button
                    id="view-certificate-btn"
                    onClick={() => { playSound('click'); setShowCertificateModal(true); }}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Sertifikat</span>
                  </button>

                  <button
                    id="retry-test-btn"
                    onClick={handleStartTest}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Qayta urinish</span>
                  </button>

                  <button
                    id="share-telegram-btn"
                    onClick={() => handleShareResult(selectedUnit, lastScore.score, lastScore.total)}
                    className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Ulashish</span>
                  </button>
                </div>
              </div>

              {/* DETAILED SAVOL-JAVOB TAHLILI */}
              <div className="border-t border-slate-150 pt-4 space-y-4">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest text-center">Xatolar ustida ishlash (Review)</h3>
                
                <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                  {flatQuestions.map(({ question, section }, index) => {
                    if (question.isExample) return null;
                    
                    const userAns = userAnswers[question.id] || [];
                    const correct = isAnswerCorrect(question, userAns);

                    return (
                      <div id={`review-item-${index}`} key={question.id} className={`p-3.5 rounded-xl border ${correct ? 'bg-emerald-50/40 border-emerald-100' : 'bg-rose-50/40 border-rose-100'}`}>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Savol {index} • {section.title}</span>
                          <span className={`inline-flex items-center space-x-0.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${correct ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {correct ? "To'g'ri" : "Xato"}
                          </span>
                        </div>

                        {/* Text prompt */}
                        {question.type === 'choice' && question.instruction && (
                          <p className="text-xs font-bold text-slate-800">{question.instruction.replace('[blank]', '_______')}</p>
                        )}
                        {question.type === 'fill' && question.text && (
                          <p className="text-xs font-bold text-slate-800">{question.text.replace('[blank]', '_______')}</p>
                        )}
                        {question.type === 'cloze' && question.text && (
                          <p className="text-xs font-bold text-slate-800">{question.text.replace('[blank]', '_______')}</p>
                        )}
                        {question.type === 'order' && question.words && (
                          <p className="text-xs font-bold text-slate-800">Tartiblang: <span className="text-slate-500 italic">[{question.words.join(', ')}]</span></p>
                        )}

                        <div className="mt-2 text-[10px] space-y-1 bg-white/70 p-2.5 rounded-lg border border-slate-200/50">
                          <div>
                            <span className="text-slate-400 font-bold">Kiritilgan javob: </span>
                            <span className={`font-extrabold ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
                              {userAns.filter(Boolean).join(' / ') || "(Bo'sh)"}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-bold">To'g'ri javob: </span>
                            <span className="font-extrabold text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200/30">
                              {question.correctAnswers.join('  [yoki]  ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            
            /* 3. APP HOME / DASHBOARD SCREEN */
            <div id="dashboard-container" className="flex-grow flex flex-col justify-between w-full space-y-6 animate-fade-in">
              
              {/* Active Profile Info Header */}
              <div className="bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="font-bold text-slate-600">O'quvchi: <strong className="text-slate-800">{userName || "Kiritilmagan"}</strong></span>
                </div>
                <button
                  onClick={() => { playSound('click'); setTempName(userName); setIsEditingProfile(true); }}
                  className="text-[10px] font-black text-indigo-600 hover:underline uppercase tracking-wider"
                >
                  Ismni o'zgartirish
                </button>
              </div>

              {/* Interactive Segmented Switcher (Unit Switcher) */}
              <div className="space-y-2.5 text-center">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Unitni tanlang (Unit Switcher)
                </h3>
                
                {/* 10 Switcher Buttons Grid */}
                <div className="grid grid-cols-5 gap-1.5">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((unit) => {
                    const isActive = selectedUnit === unit;
                    const testKey = `B1_${unit}`;
                    const progress = history[testKey];
                    const isCompleted = progress?.completed;

                    return (
                      <button
                        id={`switcher-btn-${unit}`}
                        key={unit}
                        onClick={() => { setSelectedUnit(unit); playSound('click'); }}
                        className={`py-3.5 rounded-xl border font-black text-sm flex flex-col items-center justify-center relative transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
                            : isCompleted
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/70'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span>{unit}</span>
                        {isCompleted && (
                          <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[9px] font-black border border-white shadow-sm">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Unit Details Box */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/60 text-center space-y-4">
                {(() => {
                  const testKey = `B1_${selectedUnit}`;
                  const progress = history[testKey];
                  const testQuestions = ALL_TESTS['B1']?.[selectedUnit] || [];
                  const totalQuestionsCount = testQuestions.reduce((acc, sec) => acc + sec.questions.filter(q => !q.isExample).length, 0);

                  return (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-widest">Selected Quiz</span>
                        <h2 className="text-xl font-extrabold text-slate-800">Unit {selectedUnit} Testi</h2>
                        <p className="text-xs text-slate-500 font-bold leading-relaxed max-w-sm mx-auto">
                          Mavzu: <span className="text-indigo-600">{getUnitTopic(selectedUnit)}</span>
                        </p>
                      </div>

                      {/* Info badge */}
                      <div className="flex justify-center items-center gap-2">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 font-black text-[10px] uppercase tracking-wider rounded-lg border border-indigo-100/30">
                          {totalQuestionsCount} ta savol
                        </span>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 font-black text-[10px] uppercase tracking-wider rounded-lg border border-slate-200/40">
                          Daraja: B1
                        </span>
                      </div>

                      {/* Progress Result of selected unit */}
                      {progress ? (
                        <div className="bg-white border border-emerald-100 rounded-xl p-4 max-w-md mx-auto space-y-3.5 shadow-sm">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-emerald-800 font-extrabold">Oxirgi natijangiz:</span>
                            <span className="font-black text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 shadow-sm">
                              {progress.score} / {progress.total} ball ({Math.round((progress.score / progress.total) * 100)}%)
                            </span>
                          </div>

                          {/* Quick progress bar */}
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/50">
                            <div 
                              className="bg-emerald-500 h-full rounded-full transition-all duration-300" 
                              style={{ width: `${(progress.score / progress.total) * 100}%` }}
                            />
                          </div>

                          {/* Completed Actions */}
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            <button
                              id={`retry-unit-btn-${selectedUnit}`}
                              onClick={handleStartTest}
                              className="py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center shadow-md shadow-indigo-100"
                            >
                              Qayta topshirish
                            </button>
                            <button
                              id={`share-unit-btn-${selectedUnit}`}
                              onClick={() => handleShareResult(selectedUnit, progress.score, progress.total)}
                              className="py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center space-x-1 shadow-md shadow-sky-100"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                              <span>Ulashish</span>
                            </button>
                          </div>

                          {Math.round((progress.score / progress.total) * 100) >= 50 && (
                            <button
                              id={`cert-unit-btn-${selectedUnit}`}
                              onClick={() => { playSound('click'); setLastScore({ score: progress.score, total: progress.total }); setShowCertificateModal(true); }}
                              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-md shadow-amber-100"
                            >
                              <GraduationCap className="w-4.5 h-4.5" />
                              <span>Sertifikatni yuklash</span>
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="max-w-xs mx-auto pt-2">
                          <button
                            id={`start-unit-btn-${selectedUnit}`}
                            onClick={handleStartTest}
                            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 hover:scale-[1.02]"
                          >
                            <span>Testni boshlash</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Stats Footer inside Card */}
              <div className="bg-slate-50/80 rounded-2xl border border-slate-200/50 p-4 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-4 text-slate-500 font-bold">
                  <div>
                    Imtihonlar: <span className="text-slate-800 font-black">{Object.keys(history).filter(key => key.startsWith('B1_')).length} / 10 ta</span>
                  </div>
                  <div>
                    O'rtacha ball: <span className="text-slate-800 font-black">
                      {(() => {
                        const b1Keys = Object.keys(history).filter(key => key.startsWith('B1_'));
                        if (b1Keys.length === 0) return '0%';
                        const totalPct = b1Keys.reduce((acc, key) => {
                          const item = history[key];
                          return acc + (item.score / item.total) * 100;
                        }, 0);
                        return `${Math.round(totalPct / b1Keys.length)}%`;
                      })()}
                    </span>
                  </div>
                </div>

                {Object.keys(history).length > 0 && (
                  <button
                    id="reset-progress-dashboard"
                    onClick={handleResetProgress}
                    className="flex items-center space-x-1 text-slate-400 hover:text-rose-600 font-black text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3 animate-spin-hover" />
                    <span>Tozalash</span>
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* 4. PREMIUM CERTIFICATE MODAL */}
      {showCertificateModal && lastScore && (
        <div id="certificate-modal" className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 flex flex-col justify-start">
            
            {/* Certificate Stage Frame */}
            <div id="certificate-frame" className="border-8 border-double border-slate-800 p-5 text-center bg-amber-50/20 rounded-xl relative overflow-hidden flex flex-col justify-center">
              
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <GraduationCap className="w-64 h-64 text-slate-900" />
              </div>

              {/* Certificate content */}
              <div className="relative z-10 space-y-5">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shadow-lg">
                    <Trophy className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Roadmap English Testing Academy</h2>
                  <h1 className="text-2xl font-black text-slate-800 tracking-tight">Muvaffaqiyat Sertifikati</h1>
                  <p className="text-[8px] uppercase tracking-widest text-indigo-600 font-extrabold">Certificate of Completion</p>
                </div>

                <div className="py-1">
                  <p className="text-[10px] text-slate-400 italic font-bold">Ushbu sertifikat topshiriladi:</p>
                  <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-300 w-2/3 mx-auto pb-1 mt-1 font-serif">
                    {userName || "Noma'lum O'quvchi"}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Roadmap Intermediate darajasidagi <strong>Unit {selectedUnit} (B1)</strong> bo'yicha grammatik, lug'aviy va funksional ingliz tili malaka sinovlaridan muvaffaqiyatli o'tganligi munosabati bilan beriladi.
                </p>

                <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto pt-3 border-t border-slate-200/50">
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase font-black">Natijaviy ball</span>
                    <span className="text-xs font-black text-slate-800">
                      {lastScore.score} / {lastScore.total} ({Math.round((lastScore.score / lastScore.total) * 100)}%)
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase font-black">Sana</span>
                    <span className="text-xs font-black text-slate-800">
                      {new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Director Signatures */}
                <div className="flex justify-around pt-4 text-[9px] text-slate-400 font-bold">
                  <div>
                    <div className="w-16 border-b border-slate-300 mx-auto mb-1 font-mono italic text-slate-600 text-[10px] text-center">Stefan</div>
                    <span>Stefan, Apple Palm Coordinator</span>
                  </div>
                  <div>
                    <div className="w-16 border-b border-slate-300 mx-auto mb-1 font-mono italic text-slate-600 text-[10px] text-center">Roadmap Acad.</div>
                    <span>Bosh Baholovchi</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-2 mt-5 pt-3 border-t border-slate-100">
              <button
                id="close-certificate-btn"
                onClick={() => { playSound('click'); setShowCertificateModal(false); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Yopish
              </button>
              <button
                id="print-certificate-btn"
                onClick={() => { playSound('click'); window.print(); }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1 shadow cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Chop etish</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
