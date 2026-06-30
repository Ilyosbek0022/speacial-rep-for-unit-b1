export type QuestionType = 'fill' | 'order' | 'choice' | 'cloze';

export interface Question {
  id: string;
  type: QuestionType;
  text?: string;         // e.g., "1 My car seem to be broken. Can you help me fix it? [blank]"
  instruction?: string;  // e.g., "1 There are too many chillies in this dish. It’s much too [blank]."
  words?: string[];      // For 'order' questions
  options?: string[];    // For 'choice' questions
  clue?: string;         // For vocabulary or grammar hints (e.g., "charge")
  correctAnswers: string[]; // List of acceptable correct answers
  isExample?: boolean;   // If true, shows the answer already completed and is not graded
}

export interface Section {
  id: string;
  title: string;         // e.g., "Grammar", "Vocabulary", "Function"
  instruction: string;   // e.g., "1 Find and correct the mistakes..."
  options?: string[];    // Box of words for 'cloze' or 'fill' sections
  questions: Question[];
}

export interface UnitTest {
  [unitId: string]: Section[];
}

export interface LevelTests {
  [level: string]: UnitTest;
}

export interface UserProgress {
  [testKey: string]: {
    completed: boolean;
    score: number;
    total: number;
    answers: { [questionId: string]: string[] };
    date: string;
  };
}
