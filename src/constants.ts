import { LevelTests } from './types';

export const ALL_TESTS: LevelTests = {
  'B1': {
    '1': [
      {
        id: 'u1-g1',
        title: 'Grammar',
        instruction: '1 Complete the sentences with the present simple or present continuous form of the verbs in brackets.',
        questions: [
          { id: 'u1-g1-1', type: 'fill', text: '1 Right now, I [blank] (study) for my English exam.', correctAnswers: ['am studying', '’m studying', 'm studying'], isExample: true },
          { id: 'u1-g1-2', type: 'fill', text: '2 My brother [blank] (play) video games every single evening.', correctAnswers: ['plays'] },
          { id: 'u1-g1-3', type: 'fill', text: '3 Why [blank] you [blank] (wear) a coat? It is warm outside today.', correctAnswers: ['are, wearing', 'are,wear'] },
          { id: 'u1-g1-4', type: 'fill', text: '4 Honestly, she [blank] (not believe) that you are telling the truth.', correctAnswers: ['does not believe', 'doesn’t believe', 'doesn\'t believe'] },
          { id: 'u1-g1-5', type: 'fill', text: '5 We [blank] (have) lunch together every Saturday afternoon.', correctAnswers: ['have'] },
          { id: 'u1-g1-6', type: 'fill', text: '6 Listen! Someone [blank] (sing) in the shower.', correctAnswers: ['is singing', '’s singing', 's singing'] }
        ]
      },
      {
        id: 'u1-v2',
        title: 'Vocabulary',
        instruction: '2 Choose the correct personality adjective to complete each sentence.',
        questions: [
          { id: 'u1-v2-1', type: 'choice', instruction: '1 Someone who is friendly and enjoys spending time with other people is [blank].', options: ['sociable', 'ambitious', 'patient'], correctAnswers: ['sociable'], isExample: true },
          { id: 'u1-v2-2', type: 'choice', instruction: '2 Jane is extremely [blank]. She is determined to reach the top of her career.', options: ['reliable', 'ambitious', 'easy-going'], correctAnswers: ['ambitious'] },
          { id: 'u1-v2-3', type: 'choice', instruction: '3 You can trust Sam completely. He is always very [blank] and keeps secrets.', options: ['impatient', 'generous', 'reliable'], correctAnswers: ['reliable'] },
          { id: 'u1-v2-4', type: 'choice', instruction: '4 Our teacher never gets angry or loses his temper. He is incredibly [blank].', options: ['patient', 'selfish', 'creative'], correctAnswers: ['patient'] },
          { id: 'u1-v2-5', type: 'choice', instruction: '5 He hates sharing his toys or sweets with others. He is quite [blank].', options: ['outgoing', 'selfish', 'helpful'], correctAnswers: ['selfish'] }
        ]
      },
      {
        id: 'u1-f3',
        title: 'Function',
        instruction: '3 Put the words in the correct order to ask for information politely.',
        questions: [
          { id: 'u1-f3-1', type: 'order', words: ['help', 'you', 'me', 'could', 'please', '?'], correctAnswers: ['Could you help me please?', 'Could you help me, please?'], isExample: true },
          { id: 'u1-f3-2', type: 'order', words: ['what', 'time', 'starts', 'tell', 'me', 'the', 'film', 'could', 'you', '?'], correctAnswers: ['Could you tell me what time the film starts?'] },
          { id: 'u1-f3-3', type: 'order', words: ['where', 'is', 'the', 'nearest', 'station', 'do', 'you', 'know', '?'], correctAnswers: ['Do you know where the nearest station is?'] },
          { id: 'u1-f3-4', type: 'order', words: ['if', 'mind', 'you', 'ask', 'I', 'a', 'question', 'would', '?'], correctAnswers: ['Would you mind if I ask a question?', 'Would you mind if I asked a question?'] }
        ]
      }
    ],
    '2': [
      {
        id: 'u2-g1',
        title: 'Grammar',
        instruction: '1 Complete the sentences with the past simple or past continuous form of the verbs in brackets.',
        questions: [
          { id: 'u2-g1-1', type: 'fill', text: '1 While I [blank] (walk) home, it started to rain heavily.', correctAnswers: ['was walking', '’was walking'], isExample: true },
          { id: 'u2-g1-2', type: 'fill', text: '2 They [blank] (watch) TV when suddenly they heard a loud noise downstairs.', correctAnswers: ['were watching'] },
          { id: 'u2-g1-3', type: 'fill', text: '3 Last summer, we [blank] (travel) to Italy for our holiday.', correctAnswers: ['travelled', 'traveled'] },
          { id: 'u2-g1-4', type: 'fill', text: '4 I [blank] (not see) you at the party. What time did you leave?', correctAnswers: ['didn\'t see', 'didn’t see', 'did not see'] },
          { id: 'u2-g1-5', type: 'fill', text: '5 What [blank] you [blank] (do) at 8 o’clock last night?', correctAnswers: ['were, doing', 'were,doing'] }
        ]
      },
      {
        id: 'u2-g2',
        title: 'Grammar',
        instruction: '2 Choose the correct form to express past habits (used to or past simple).',
        questions: [
          { id: 'u2-g2-1', type: 'choice', instruction: '1 When I was a small child, I [blank] eat vegetables at all.', options: ['didn’t use to', 'used to', 'use to'], correctAnswers: ['didn’t use to'], isExample: true },
          { id: 'u2-g2-2', type: 'choice', instruction: '2 We [blank] live in London, but now we live in Edinburgh.', options: ['used to', 'use to', 'didn’t used to'], correctAnswers: ['used to'] },
          { id: 'u2-g2-3', type: 'choice', instruction: '3 Did you [blank] go camping during the summer holidays?', options: ['use to', 'used to', 'uses to'], correctAnswers: ['use to'] },
          { id: 'u2-g2-4', type: 'choice', instruction: '4 Last week, we [blank] a brand new car.', options: ['bought', 'used to buy', 'use to buy'], correctAnswers: ['bought'] }
        ]
      },
      {
        id: 'u2-v3',
        title: 'Vocabulary',
        instruction: '3 Complete the text with travel-related verbs from the box.',
        options: ['catch', 'miss', 'get on', 'book', 'arrive'],
        questions: [
          { id: 'u2-v3-1', type: 'fill', text: 'I always make sure to [blank] my flights online weeks in advance to get a cheap deal.', correctAnswers: ['book'], isExample: true },
          { id: 'u2-v3-2', type: 'fill', text: 'If you wake up late tomorrow, you will [blank] the train.', correctAnswers: ['miss'] },
          { id: 'u2-v3-3', type: 'fill', text: 'Hurry up! We need to [blank] the bus before it leaves the station.', correctAnswers: ['catch', 'get on'] },
          { id: 'u2-v3-4', type: 'fill', text: 'What time does our flight [blank] at the airport?', correctAnswers: ['arrive'] }
        ]
      }
    ],
    '3': [
      {
        id: 'u3-g1',
        title: 'Grammar',
        instruction: '1 Choose the correct option (Present Perfect or Past Simple).',
        questions: [
          { id: 'u3-g1-1', type: 'choice', instruction: '1 I [blank] to Paris twice, but I’ve never been to Rome.', options: ['have been', 'went', 'was'], correctAnswers: ['have been'], isExample: true },
          { id: 'u3-g1-2', type: 'choice', instruction: '2 Oh no! I [blank] my keys! I cannot open the door.', options: ['have lost', 'lost', 'did lose'], correctAnswers: ['have lost'] },
          { id: 'u3-g1-3', type: 'choice', instruction: '3 Yesterday, we [blank] all day in the museum.', options: ['spent', 'have spent', 'spend'], correctAnswers: ['spent'] },
          { id: 'u3-g1-4', type: 'choice', instruction: '4 How long [blank] you lived in your current house?', options: ['have', 'did', 'do'], correctAnswers: ['have'] },
          { id: 'u3-g1-5', type: 'choice', instruction: '5 He [blank] his homework yet. He is still working on it.', options: ['hasn’t finished', 'didn’t finish', 'doesn’t finish'], correctAnswers: ['hasn’t finished'] }
        ]
      },
      {
        id: 'u3-g2',
        title: 'Grammar',
        instruction: '2 Fill in the blanks with "for" or "since" to complete the sentences.',
        questions: [
          { id: 'u3-g2-1', type: 'fill', text: '1 We have lived here [blank] 2018.', correctAnswers: ['since'], isExample: true },
          { id: 'u3-g2-2', type: 'fill', text: '2 They have been married [blank] ten years.', correctAnswers: ['for'] },
          { id: 'u3-g2-3', type: 'fill', text: '3 I haven’t eaten anything [blank] breakfast this morning.', correctAnswers: ['since'] },
          { id: 'u3-g2-4', type: 'fill', text: '4 She has worked in this company [blank] five months.', correctAnswers: ['for'] }
        ]
      },
      {
        id: 'u3-f3',
        title: 'Function',
        instruction: '3 Put the words in the correct order to make offers or suggestions.',
        questions: [
          { id: 'u3-f3-1', type: 'order', words: ['help', 'you', 'I', 'shall', 'with', 'that', '?'], correctAnswers: ['Shall I help you with that?'], isExample: true },
          { id: 'u3-f3-2', type: 'order', words: ['about', 'going', 'to', 'the', 'cinema', 'how', '?'], correctAnswers: ['How about going to the cinema?'] },
          { id: 'u3-f3-3', type: 'order', words: ['some', 'coffee', 'like', 'would', 'you', '?'], correctAnswers: ['Would you like some coffee?'] },
          { id: 'u3-f3-4', type: 'order', words: ['go', 'we', 'why', 'don’t', 'to', 'the', 'park', '?'], correctAnswers: ['Why don’t we go to the park?', 'Why don\'t we go to the park?'] }
        ]
      }
    ],
    '4': [
      {
        id: 'u4-g1',
        title: 'Grammar',
        instruction: '1 Complete the sentences with the comparative or superlative form of the adjectives in brackets.',
        questions: [
          { id: 'u4-g1-1', type: 'fill', text: '1 This book is [blank] (interesting) than the one I read last week.', correctAnswers: ['more interesting'], isExample: true },
          { id: 'u4-g1-2', type: 'fill', text: '2 London is one of the [blank] (expensive) cities in the world.', correctAnswers: ['most expensive'] },
          { id: 'u4-g1-3', type: 'fill', text: '3 My brother is slightly [blank] (tall) than my father.', correctAnswers: ['taller'] },
          { id: 'u4-g1-4', type: 'fill', text: '4 Today’s weather is much [blank] (good) than yesterday’s.', correctAnswers: ['better'] },
          { id: 'u4-g1-5', type: 'fill', text: '5 This is the [blank] (bad) film I have ever watched!', correctAnswers: ['worst'] }
        ]
      },
      {
        id: 'u4-g2',
        title: 'Grammar',
        instruction: '2 Complete the sentences using "too" or "enough" with the word in brackets.',
        questions: [
          { id: 'u4-g2-1', type: 'fill', text: '1 I cannot drink this coffee. It is [blank] (hot).', correctAnswers: ['too hot'], isExample: true },
          { id: 'u4-g2-2', type: 'fill', text: '2 He isn’t [blank] (old) to watch this horror film.', correctAnswers: ['old enough'] },
          { id: 'u4-g2-3', type: 'fill', text: '3 We didn’t buy the dress because it was [blank] (expensive).', correctAnswers: ['too expensive'] },
          { id: 'u4-g2-4', type: 'fill', text: '4 Have we got [blank] (money) to buy these concert tickets?', correctAnswers: ['enough money'] }
        ]
      },
      {
        id: 'u4-v3',
        title: 'Vocabulary',
        instruction: '3 Choose the correct adjective to describe books or films.',
        questions: [
          { id: 'u4-v3-1', type: 'choice', instruction: '1 A book or film that is full of excitement and surprises is [blank].', options: ['thrilling', 'dull', 'predictable'], correctAnswers: ['thrilling'], isExample: true },
          { id: 'u4-v3-2', type: 'choice', instruction: '2 I almost fell asleep during the movie. It was incredibly [blank].', options: ['entertaining', 'dull', 'gripping'], correctAnswers: ['dull'] },
          { id: 'u4-v3-3', type: 'choice', instruction: '3 The ending was so [blank]. I knew exactly what would happen after ten minutes.', options: ['predictable', 'original', 'hilarious'], correctAnswers: ['predictable'] },
          { id: 'u4-v3-4', type: 'choice', instruction: '4 That comedy show was absolutely [blank]. We couldn’t stop laughing!', options: ['hilarious', 'frightening', 'disappointing'], correctAnswers: ['hilarious'] }
        ]
      }
    ],
    '5': [
      {
        id: 'u5-g1',
        title: 'Grammar',
        instruction: '1 Find and correct the mistakes. Type the corrected sentence. If the sentence is already correct, type "Correct".',
        questions: [
          { id: 'u5-g1-1', type: 'fill', text: '1 My car seem to be broken. Can you help me fix it? [blank]', correctAnswers: ['My car seems to be broken. Can you help me fix it.'], isExample: true },
          { id: 'u5-g1-2', type: 'fill', text: '2 Jeff can be at home because he isn’t answering the phone. [blank]', correctAnswers: ['Jeff can\'t be at home because he isn’t answering the phone.', 'Jeff can’t be at home because he isn’t answering the phone.', 'Jeff cannot be at home because he isn’t answering the phone.', 'Jeff can\'t be at home because he isn\'t answering the phone.', 'Jeff can’t be at home because he isn’t answering the phone'] },
          { id: 'u5-g1-3', type: 'fill', text: '3 Millie isn’t at school today. She might be ill. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u5-g1-4', type: 'fill', text: '4 I have a lot to do at work, so I might not at home after 7 o’clock in the morning. [blank]', correctAnswers: ['I have a lot to do at work, so I might not be at home after 7 o’clock in the morning.', 'I have a lot to do at work, so I might not be at home after 7 o\'clock in the morning.'] },
          { id: 'u5-g1-5', type: 'fill', text: '5 It must be almost 6 a.m. because the sun is already in the sky. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u5-g1-6', type: 'fill', text: '6 They could to be lost. They don’t know the area very well. [blank]', correctAnswers: ['They could be lost. They don’t know the area very well.', 'They could be lost. They don\'t know the area very well.'] }
        ]
      },
      {
        id: 'u5-g2',
        title: 'Grammar',
        instruction: '2 Put the words in the correct order to make conditional sentences.',
        questions: [
          { id: 'u5-g2-1', type: 'order', words: ['stay', 'a', 'hotel', 'will', 'good', 'if', 'you', 'in', 'quality', 'you', 'get', 'service'], correctAnswers: ['If you stay in a quality hotel, you will get good service.'], isExample: true },
          { id: 'u5-g2-2', type: 'order', words: ['sun', 'in', 'will', 'sunscreen', 'you', 'unless', 'use', 'you', 'burn', 'the'], correctAnswers: ['Unless you use sunscreen, you will burn in the sun.', 'You will burn in the sun unless you use sunscreen.'] },
          { id: 'u5-g2-3', type: 'order', words: ['stressed', 'more', 'feel', 'live', 'the', 'in', 'city', 'they', 'if', 'people', 'do', '?'], correctAnswers: ['Do people feel more stressed if they live in the city?', 'If people live in the city, do they feel more stressed?'] },
          { id: 'u5-g2-4', type: 'order', words: ['could', 'you', 'the', 'win', 'if', 'race', 'practise', 'you', 'day', 'every'], correctAnswers: ['If you practise every day, you could win the race.', 'You could win the race if you practise every day.'] },
          { id: 'u5-g2-5', type: 'order', words: ['with', 'Antonio', 'plays', 'Pedro', 'when', 'badly', 'behaves', 'he'], correctAnswers: ['Pedro behaves badly when he plays with Antonio.', 'When he plays with Antonio, Pedro behaves badly.', 'Pedro plays badly with Antonio when he behaves.'] },
          { id: 'u5-g2-6', type: 'order', words: ['she', 'time', 'arrive', 'Simi', 'leaves', 'if', 'on', 'won’t', 'now'], correctAnswers: ['If Simi leaves now, she won’t arrive on time.', 'Simi won’t arrive on time if she leaves now.', 'If Simi leaves now, she won\'t arrive on time.', 'Simi won\'t arrive on time if she leaves now.'] }
        ]
      },
      {
        id: 'u5-g3',
        title: 'Grammar',
        instruction: '3 Choose the correct quantifiers to complete the text.',
        questions: [
          { id: 'u5-g3-1', type: 'choice', instruction: 'Eddie asked his friend Doug to help him with the shopping for his birthday party. Eddie had invited 1 [blank] friends who were vegetarian.', options: ['a lot of', 'much'], correctAnswers: ['a lot of'], isExample: true },
          { id: 'u5-g3-2', type: 'choice', instruction: 'Doug didn’t think there was 2 [blank] food for them, so he went to the supermarket to buy some more.', options: ['a bit of', 'enough'], correctAnswers: ['enough'] },
          { id: 'u5-g3-3', type: 'choice', instruction: 'Two supermarkets didn’t have 3 [blank] vegetarian dishes at all...', options: ['any', 'too much'], correctAnswers: ['any'] },
          { id: 'u5-g3-4', type: 'choice', instruction: '...but the third one had 4 [blank] different kinds.', options: ['many', 'too much'], correctAnswers: ['many'] },
          { id: 'u5-g3-5', type: 'choice', instruction: 'Meanwhile, Eddie discovered that they didn’t have 5 [blank] coffee...', options: ['some', 'much'], correctAnswers: ['much'] },
          { id: 'u5-g3-6', type: 'choice', instruction: '...so he called Doug and asked him to buy 6 [blank] packets.', options: ['too many', 'some'], correctAnswers: ['some'] },
          { id: 'u5-g3-7', type: 'choice', instruction: 'Eddie remembered that his friend, Rebecca, liked 7 [blank] honey in her tea...', options: ['enough', 'a bit of'], correctAnswers: ['a bit of'] },
          { id: 'u5-g3-8', type: 'choice', instruction: '...and that he didn’t have 8 [blank] tea! He called Doug to tell him.', options: ['any', 'too much'], correctAnswers: ['any'] },
          { id: 'u5-g3-9', type: 'choice', instruction: 'Doug found 9 [blank] tea...', options: ['some', 'many'], correctAnswers: ['some'] },
          { id: 'u5-g3-10', type: 'choice', instruction: '...and 10 [blank] different kinds of honey.', options: ['enough', 'many'], correctAnswers: ['many'] },
          { id: 'u5-g3-11', type: 'choice', instruction: 'In fact, there were 11 [blank] kinds of honey and it took Doug a long time to choose one. By the time Doug returned, the party had already started!', options: ['too much', 'too many'], correctAnswers: ['too many'] }
        ]
      },
      {
        id: 'u5-v4',
        title: 'Vocabulary',
        instruction: '4 Choose the correct option to complete the sentences.',
        questions: [
          { id: 'u5-v4-1', type: 'choice', instruction: '1 I need to buy a smart suit because [blank]', options: ['they are cooler in the heat.', 'we’ll have to dress up nicely.', 'I’ve got a job interview next week.', 'tight that he can’t breathe properly.'], correctAnswers: ['I’ve got a job interview next week.'], isExample: true },
          { id: 'u5-v4-2', type: 'choice', instruction: '2 My mum wears old-fashioned clothes so [blank]', options: ['they are cooler in the heat.', 'I’m taking her shopping tomorrow.', 'with a fantastic pair of matching shoes.', 'tight that he can’t breathe properly.'], correctAnswers: ['I’m taking her shopping tomorrow.'] },
          { id: 'u5-v4-3', type: 'choice', instruction: '3 Look at his shirt! It’s so [blank]', options: ['they are cooler in the heat.', 'tight that he can’t breathe properly.', 'with a fantastic pair of matching shoes.', 'we’ll have to dress up nicely.'], correctAnswers: ['tight that he can’t breathe properly.'] },
          { id: 'u5-v4-4', type: 'choice', instruction: '4 Sue has a lovely new dress [blank]', options: ['they are cooler in the heat.', 'tight that he can’t breathe properly.', 'with a fantastic pair of matching shoes.', 'we’ll have to dress up nicely.'], correctAnswers: ['with a fantastic pair of matching shoes.'] },
          { id: 'u5-v4-5', type: 'choice', instruction: '5 In the summer I wear loose clothes because [blank]', options: ['they are cooler in the heat.', 'tight that he can’t breathe properly.', 'with a fantastic pair of matching shoes.', 'we’ll have to dress up nicely.'], correctAnswers: ['they are cooler in the heat.'] },
          { id: 'u5-v4-6', type: 'choice', instruction: '6 If we’re going out for an anniversary meal, [blank]', options: ['they are cooler in the heat.', 'tight that he can’t breathe properly.', 'with a fantastic pair of matching shoes.', 'we’ll have to dress up nicely.'], correctAnswers: ['we’ll have to dress up nicely.'] }
        ]
      },
      {
        id: 'u5-v5',
        title: 'Vocabulary',
        instruction: '5 Match the descriptions with the correct homes or building features.',
        questions: [
          { id: 'u5-v5-1', type: 'choice', instruction: '1 Where you can enter and exit a home. [blank]', options: ['balcony', 'entrance', 'studio', 'patio', 'terraced house'], correctAnswers: ['entrance'], isExample: true },
          { id: 'u5-v5-2', type: 'choice', instruction: '2 A one-room apartment. [blank]', options: ['balcony', 'block of flats', 'studio', 'patio', 'terraced house'], correctAnswers: ['studio'] },
          { id: 'u5-v5-3', type: 'choice', instruction: '3 The outside area of a flat. [blank]', options: ['balcony', 'block of flats', 'studio', 'patio', 'entrance'], correctAnswers: ['balcony'] },
          { id: 'u5-v5-4', type: 'choice', instruction: '4 Many apartments within one building. [blank]', options: ['block of flats', 'studio', 'patio', 'entrance', 'terraced house'], correctAnswers: ['block of flats'] },
          { id: 'u5-v5-5', type: 'choice', instruction: '5 The outside area of a house, like a garden but without grass. [blank]', options: ['block of flats', 'patio', 'entrance', 'terraced house', 'balcony'], correctAnswers: ['patio'] },
          { id: 'u5-v5-6', type: 'choice', instruction: '6 A system for keeping the house cool. [blank]', options: ['air-conditioning', 'central heating', 'patio', 'entrance', 'terraced house'], correctAnswers: ['air-conditioning'] },
          { id: 'u5-v5-7', type: 'choice', instruction: '7 A system for warming the house. [blank]', options: ['air-conditioning', 'central heating', 'patio', 'entrance', 'terraced house'], correctAnswers: ['central heating'] },
          { id: 'u5-v5-8', type: 'choice', instruction: '8 Part of a row of houses joined together. [blank]', options: ['block of flats', 'patio', 'entrance', 'terraced house', 'balcony'], correctAnswers: ['terraced house'] }
        ]
      },
      {
        id: 'u5-v6',
        title: 'Vocabulary',
        instruction: '6 Choose the correct option.',
        questions: [
          { id: 'u5-v6-1', type: 'choice', instruction: '1 There are too many chillies in this dish. It’s much too [blank].', options: ['spicy', 'healthy', 'bitter'], correctAnswers: ['spicy'], isExample: true },
          { id: 'u5-v6-2', type: 'choice', instruction: '2 [blank] food is healthier than dishes made with meat.', options: ['Grilled', 'Sweet', 'Vegetarian'], correctAnswers: ['Vegetarian'] },
          { id: 'u5-v6-3', type: 'choice', instruction: '3 Do you prefer [blank] food like cheese? Or sweet dishes like ice-cream.', options: ['light', 'homemade', 'savoury'], correctAnswers: ['savoury'] },
          { id: 'u5-v6-4', type: 'choice', instruction: '4 The [blank] bread my mother used to bake was so delicious!', options: ['hot', 'homemade', 'vegetarian'], correctAnswers: ['homemade'] },
          { id: 'u5-v6-5', type: 'choice', instruction: '5 If I eat a [blank] breakfast, I’m hungry again by mid-morning.', options: ['fresh', 'healthy', 'light'], correctAnswers: ['light'] },
          { id: 'u5-v6-6', type: 'choice', instruction: '6 Anne, how old is this cream? It doesn’t smell very [blank].', options: ['bitter', 'sweet', 'fresh'], correctAnswers: ['fresh'] },
          { id: 'u5-v6-7', type: 'choice', instruction: '7 My children think [blank] food like fruit and vegetables isn’t as tasty as burgers and pizza.', options: ['healthy', 'savoury', 'sweet'], correctAnswers: ['healthy'] },
          { id: 'u5-v6-8', type: 'choice', instruction: '8 Fish is better for you when it’s [blank].', options: ['spicy', 'grilled', 'fried'], correctAnswers: ['grilled'] },
          { id: 'u5-v6-9', type: 'choice', instruction: '9 I don’t like lemon in my tea because it’s too [blank].', options: ['tasty', 'bitter', 'sweet'], correctAnswers: ['bitter'] }
        ]
      },
      {
        id: 'u5-f7',
        title: 'Function',
        instruction: '7 Complete the conversation with the words in the box.',
        options: ['clear', 'first', 'lastly', 'long', 'next', 'on', 'take', 'tell', 'that', 'that’s', 'while'],
        questions: [
          { id: 'u5-f7-1', type: 'fill', text: 'Sajid: Hi Anjum. Could you [blank] me how to install this app. I’m not very good with technology.', correctAnswers: ['tell'], isExample: true },
          { id: 'u5-f7-2', type: 'cloze', text: 'Sajid: I think so. How [blank] does it [blank]?', correctAnswers: ['long', 'take'] },
          { id: 'u5-f7-3', type: 'cloze', text: 'Anjum: Just a minute or two. [blank] of all, enter your password. Sajid: OK, I’ve got [blank].', correctAnswers: ['First', 'that'] },
          { id: 'u5-f7-4', type: 'cloze', text: 'Anjum: [blank] click on the app that you want. Sajid: Right, that’s [blank].', correctAnswers: ['Next', 'clear'] },
          { id: 'u5-f7-5', type: 'cloze', text: 'Anjum: [blank] it’s downloading, make us both a cup of tea! ... Sajid: OK, go [blank].', correctAnswers: ['While', 'on'] },
          { id: 'u5-f7-6', type: 'cloze', text: 'Anjum: [blank], double-click on the file and tap ‘install’. ... Sajid: Is that all? Anjum: Yes, [blank] it.', correctAnswers: ['Lastly', 'that’s'] }
        ]
      }
    ],
    '6': [
      {
        id: 'u6-g1',
        title: 'Grammar',
        instruction: '1 Choose the correct verb forms to complete the second conditional sentences.',
        questions: [
          { id: 'u6-g1-1', type: 'choice', instruction: '1 If we [blank] bikes more, there would be less pollution.', options: ['used', 'use'], correctAnswers: ['used'], isExample: true },
          { id: 'u6-g1-2', type: 'choice', instruction: '2 What would we [blank] if aliens landed on the Earth?', options: ['do', 'did'], correctAnswers: ['do'] },
          { id: 'u6-g1-3', type: 'choice', instruction: '3 If I had a better internet connection, I could [blank] films on my computer.', options: ['watch', 'watched'], correctAnswers: ['watch'] },
          { id: 'u6-g1-4', type: 'choice', instruction: '4 How would you [blank] if someone stole your car?', options: ['feel', 'felt'], correctAnswers: ['feel'] },
          { id: 'u6-g1-5', type: 'choice', instruction: '5 If he didn’t sleep so much, he might [blank] harder.', options: ['study', 'studied'], correctAnswers: ['study'] },
          { id: 'u6-g1-6', type: 'choice', instruction: '6 Would Sarah like me more if I [blank] her flowers for her birthday?', options: ['sent', 'send'], correctAnswers: ['sent'] },
          { id: 'u6-g1-7', type: 'choice', instruction: '7 If you [blank] more, you’d lose more weight.', options: ['exercised', 'exercise'], correctAnswers: ['exercised'] },
          { id: 'u6-g1-8', type: 'choice', instruction: '8 Sid and Manel would go to the party if they [blank] invited.', options: ['were', 'are'], correctAnswers: ['were'] },
          { id: 'u6-g1-9', type: 'choice', instruction: '9 Where would you [blank] if you had the money?', options: ['go', 'went'], correctAnswers: ['go'] },
          { id: 'u6-g1-10', type: 'choice', instruction: '10 If I [blank] better eyesight, I could read without glasses.', options: ['had', 'have'], correctAnswers: ['had'] }
        ]
      },
      {
        id: 'u6-g2',
        title: 'Grammar',
        instruction: '2 Match the problems to the correct advice.',
        questions: [
          { id: 'u6-g2-1', type: 'choice', instruction: '1 I’ve got nothing to wear for this party! What am I going to do? [blank]', options: ['You could go shopping and buy something new.', 'If I were you, I’d practise every day.', 'You should go to bed and rest.'], correctAnswers: ['You could go shopping and buy something new.'], isExample: true },
          { id: 'u6-g2-2', type: 'choice', instruction: '2 I’ve got a headache and sore throat. [blank]', options: ['You should go to bed and rest.', 'If I were you, I’d send her an email to apologise.', 'I think you ought to take it to the police station.'], correctAnswers: ['You should go to bed and rest.'] },
          { id: 'u6-g2-3', type: 'choice', instruction: '3 I said some terrible things to Anita last night. I feel so bad! [blank]', options: ['If I were you, I’d send her an email to apologise.', 'He ought to be careful or he’ll get into trouble.', 'You could buy a sandwich and eat it at your desk.'], correctAnswers: ['If I were you, I’d send her an email to apologise.'] },
          { id: 'u6-g2-4', type: 'choice', instruction: '4 I’m so hungry but I have to finish this assignment first. [blank]', options: ['You could buy a sandwich and eat it at your desk.', 'You should go to bed and rest.', 'I think you ought to take it to the police station.'], correctAnswers: ['You could buy a sandwich and eat it at your desk.'] },
          { id: 'u6-g2-5', type: 'choice', instruction: '5 I found a brand-new smartphone on the train this morning. [blank]', options: ['I think you ought to take it to the police station.', 'If I were you, I’d practise every day.', 'He ought to be careful or he’ll get into trouble.'], correctAnswers: ['I think you ought to take it to the police station.'] },
          { id: 'u6-g2-6', type: 'choice', instruction: '6 My biggest wish is to be a professional footballer. [blank]', options: ['If I were you, I’d practise every day.', 'You should go to bed and rest.', 'He ought to be careful or he’ll get into trouble.'], correctAnswers: ['If I were you, I’d practise every day.'] },
          { id: 'u6-g2-7', type: 'choice', instruction: '7 I saw my friend cheat in a test yesterday. [blank]', options: ['He ought to be careful or he’ll get into trouble.', 'If I were you, I’d send her an email to apologise.', 'You could go shopping and buy something new.'], correctAnswers: ['He ought to be careful or he’ll get into trouble.'] }
        ]
      },
      {
        id: 'u6-g3',
        title: 'Grammar',
        instruction: '3 Choose the correct question tag.',
        questions: [
          { id: 'u6-g3-1', type: 'choice', instruction: '1 The city is so crowded in the summer, [blank]', options: ['isn’t it?', 'is it?', 'aren’t they?'], correctAnswers: ['isn’t it?'], isExample: true },
          { id: 'u6-g3-2', type: 'choice', instruction: '2 They’ve won a competition to go to Disneyland, [blank]', options: ['have they?', 'haven’t they?', 'hasn’t it?'], correctAnswers: ['haven’t they?'] },
          { id: 'u6-g3-3', type: 'choice', instruction: '3 Carmen doesn’t think the game is finished yet, [blank]', options: ['is she?', 'doesn’t she?', 'does she?'], correctAnswers: ['does she?'] },
          { id: 'u6-g3-4', type: 'choice', instruction: '4 You can put those books on the top shelf, [blank]', options: ['can’t they?', 'can you?', 'can’t you?'], correctAnswers: ['can’t you?'] },
          { id: 'u6-g3-5', type: 'choice', instruction: '5 You aren’t seriously going to eat that, [blank]', options: ['aren’t you?', 'are you?', 'are we?'], correctAnswers: ['are you?'] },
          { id: 'u6-g3-6', type: 'choice', instruction: '6 There are many different kinds of insects in the rainforest, [blank]', options: ['are there?', 'aren’t they?', 'aren’t there?'], correctAnswers: ['aren’t there?'] }
        ]
      },
      {
        id: 'u6-v4',
        title: 'Vocabulary',
        instruction: '4 Complete the sentences with the correct verbs or phrasal verbs.',
        questions: [
          { id: 'u6-v4-1', type: 'fill', text: '1 Phil’s neighbours complained that his music was too loud and asked him to [blank].', correctAnswers: ['turn it down'], isExample: true },
          { id: 'u6-v4-2', type: 'fill', text: '2 My phone is old and the battery isn’t good. I have to [blank] it six times a day.', clue: 'charge', correctAnswers: ['charge'] },
          { id: 'u6-v4-3', type: 'fill', text: '3 Kim, can you [blank] the washing machine for me and hang the clothes out to dry.', clue: 'empty', correctAnswers: ['empty'] },
          { id: 'u6-v4-4', type: 'fill', text: '4 I want to [blank] the washing machine but someone has left their clothes in there.', clue: 'load', correctAnswers: ['load'] },
          { id: 'u6-v4-5', type: 'fill', text: '5 Don’t forget to [blank] the car with petrol. It’s almost empty.', clue: 'fill', correctAnswers: ['fill'] },
          { id: 'u6-v4-6', type: 'cloze', text: '6 How do you [blank] [blank] the computer? I can’t find a button anywhere.', clue: 'switch off', correctAnswers: ['switch', 'off'] },
          { id: 'u6-v4-7', type: 'cloze', text: '7 Can you [blank] [blank] the radio, Sue. I can’t hear it very well.', clue: 'turn up', correctAnswers: ['turn', 'up'] },
          { id: 'u6-v4-8', type: 'cloze', text: '8 I think you can [blank] the lights [blank] now. It’s getting dark.', clue: 'switch ... on', correctAnswers: ['switch', 'on'] }
        ]
      },
      {
        id: 'u6-v5',
        title: 'Vocabulary',
        instruction: '5 Match the descriptions with the correct terms.',
        questions: [
          { id: 'u6-v5-1', type: 'choice', instruction: '1 In the UK, the police will stop you if you drive without a seatbelt. [blank]', options: ['against the law', 'rude', 'polite', 'cheating'], correctAnswers: ['against the law'], isExample: true },
          { id: 'u6-v5-2', type: 'choice', instruction: '2 Lillian said she had no money but I know that she had ten euros in her pocket. [blank]', options: ['against the law', 'dishonest', 'polite', 'cheating'], correctAnswers: ['dishonest'] },
          { id: 'u6-v5-3', type: 'choice', instruction: '3 He won the game by saying he had better cards than he really did. [blank]', options: ['rude', 'polite', 'cheating', 'illegal'], correctAnswers: ['cheating'] },
          { id: 'u6-v5-4', type: 'choice', instruction: '4 Frederick’s son came to the party but didn’t say please or thank you all day. [blank]', options: ['rude', 'polite', 'illegal', 'dishonest'], correctAnswers: ['rude'] },
          { id: 'u6-v5-5', type: 'choice', instruction: '5 She’s in trouble because she isn’t allowed to park there. [blank]', options: ['illegal', 'polite', 'cheating', 'against the law'], correctAnswers: ['illegal'] },
          { id: 'u6-v5-6', type: 'choice', instruction: '6 Did you see the letter from Juan to thank us for the meal that we cooked for him? [blank]', options: ['rude', 'polite', 'dishonest', 'drop litter'], correctAnswers: ['polite'] },
          { id: 'u6-v5-7', type: 'choice', instruction: '7 I think you should be punished for throwing rubbish into the street. [blank]', options: ['drop litter', 'rude', 'illegal', 'against the law'], correctAnswers: ['drop litter'] }
        ]
      },
      {
        id: 'u6-v6',
        title: 'Vocabulary',
        instruction: '6 Complete the text with words from the box.',
        questions: [
          { id: 'u6-v6-1', type: 'fill', text: 'My son, Phillip took a course about [blank] the environment recently. He said it was very interesting but also quite scary.', correctAnswers: ['protecting'], isExample: true },
          { id: 'u6-v6-2', type: 'fill', text: 'According to him, air pollution [blank] our health and kills millions of people and animals each year.', correctAnswers: ['damages'] },
          { id: 'u6-v6-3', type: 'fill', text: 'We’re also [blank] the homes of animals by building on land which should be available for wildlife.', correctAnswers: ['destroying'] },
          { id: 'u6-v6-4', type: 'fill', text: 'On the course, he learned that we all need to [blank] waste by buying products which we can reuse such as glass bottles.', correctAnswers: ['reduce'] },
          { id: 'u6-v6-5', type: 'cloze', text: 'People should also [blank] items they no longer need instead of [blank] them [blank].', correctAnswers: ['recycle', 'throwing', 'away'] },
          { id: 'u6-v6-6', type: 'fill', text: 'We can also all help to [blank] electricity by switching off electrical equipment when it is not in use.', correctAnswers: ['save'] },
          { id: 'u6-v6-7', type: 'fill', text: 'If we don’t [blank] laws that protect the environment, Phillip says it may be too late to save the planet.', correctAnswers: ['support'] }
        ]
      },
      {
        id: 'u6-f7',
        title: 'Function',
        instruction: '7 Put the words in the correct order to make sentences and questions.',
        questions: [
          { id: 'u6-f7-1', type: 'order', words: ['you', 'could', 'sauce', 'the', 'pass', 'please', '?'], correctAnswers: ['Could you pass the sauce, please?', 'Could you pass the sauce please?'], isExample: true },
          { id: 'u6-f7-2', type: 'order', words: ['possible', 'it', 'minute', 'wait', 'you', 'be', 'would', 'a', 'to', 'for', '?'], correctAnswers: ['Would it be possible for you to wait a minute?', 'Would it be possible to wait a minute for you?'] },
          { id: 'u6-f7-3', type: 'order', words: ['what', 'it', 'depends', 'it', 'is'], correctAnswers: ['It depends what it is.'] },
          { id: 'u6-f7-4', type: 'order', words: ['sure', 'problem', 'yes', 'no'], correctAnswers: ['Yes, sure, no problem.', 'Yes, no problem, sure.', 'Sure, yes, no problem.', 'Sure, no problem, yes.'] },
          { id: 'u6-f7-5', type: 'order', words: ['favour', 'big', 'a', 'think', 'you', 'do', 'me', 'do', 'could', 'you', '?'], correctAnswers: ['Do you think you could do me a big favour?'] },
          { id: 'u6-f7-6', type: 'order', words: ['mind', 'me', 'my', 'would', 'you', 'helping', 'with', 'homework', '?'], correctAnswers: ['Would you mind helping me with my homework?'] },
          { id: 'u6-f7-7', type: 'order', words: ['late', 'but', 'sorry', 'I’m', 'really', 'I’m'], correctAnswers: ['I’m really sorry but I’m late.', 'I\'m really sorry but I\'m late.'] },
          { id: 'u6-f7-8', type: 'order', words: ['can’t', 'I', 'afraid', 'I’m', 'do', 'that'], correctAnswers: ['I’m afraid I can’t do that.', 'I\'m afraid I can\'t do that.'] },
          { id: 'u6-f7-9', type: 'order', words: ['just', 'be', 'it', 'one', 'thing', 'trouble', 'much', 'wouldn’t', 'if', 'more', 'too', '?'], correctAnswers: ['Wouldn’t it be too much trouble if it was just one more thing?', 'Wouldn\'t it be too much trouble if it was just one more thing?', 'Wouldn’t it be too much trouble if it’s just one more thing?', 'Wouldn’t it be too much trouble if just one more thing?'] },
          { id: 'u6-f7-10', type: 'order', words: ['course', 'yes', 'of', 'to', 'happy'], correctAnswers: ['Yes, of course, happy to.', 'Of course, yes, happy to.'] },
          { id: 'u6-f7-11', type: 'order', words: ['walk', 'you', 'dog', 'could', 'a', 'the', 'take', 'for', 'please', '?'], correctAnswers: ['Could you take the dog for a walk, please?', 'Could you take the dog for a walk please?'] }
        ]
      }
    ],
    '7': [
      {
        id: 'u7-g1',
        title: 'Grammar',
        instruction: '1 Find and correct two mistakes in each question. Type the corrected sentence.',
        questions: [
          { id: 'u7-g1-1', type: 'fill', text: '1 I can ran run very well but I can’t swim. Joe can swim but he can can’t run fast. [blank]', correctAnswers: ['I can run very well but I can’t swim. Joe can swim but he can’t run fast.', 'I can run very well but I can\'t swim. Joe can swim but he can\'t run fast.'], isExample: true },
          { id: 'u7-g1-2', type: 'fill', text: '2 Elena’s never be able to speak Japanese very well but she can’t read it. [blank]', correctAnswers: ['Elena’s never been able to speak Japanese very well but she can read it.', 'Elena has never been able to speak Japanese very well but she can read it.', 'Elena\'s never been able to speak Japanese very well but she can read it.'] },
          { id: 'u7-g1-3', type: 'fill', text: '3 Were you able find the cake you wanted? I can made one for you if you like. [blank]', correctAnswers: ['Were you able to find the cake you wanted? I can make one for you if you like.'] },
          { id: 'u7-g1-4', type: 'fill', text: '4 She couldn’t seen very well but I wasn’t able to help her find her keys. [blank]', correctAnswers: ['She couldn’t see very well but I was able to help her find her keys.', 'She couldn\'t see very well but I was able to help her find her keys.'] },
          { id: 'u7-g1-5', type: 'fill', text: '5 Can Frank sing when he was younger? He could sing beautifully now. [blank]', correctAnswers: ['Could Frank sing when he was younger? He can sing beautifully now.'] },
          { id: 'u7-g1-6', type: 'fill', text: '6 They be able to relax when they get home. They couldn’t sleeping at all on the plane. [blank]', correctAnswers: ['They’ll be able to relax when they get home. They couldn’t sleep at all on the plane.', 'They will be able to relax when they get home. They couldn’t sleep at all on the plane.', 'They will be able to relax when they get home. They couldn\'t sleep at all on the plane.', 'They\'ll be able to relax when they get home. They couldn\'t sleep at all on the plane.'] }
        ]
      },
      {
        id: 'u7-g2',
        title: 'Grammar',
        instruction: '2 Match the sentence halves.',
        questions: [
          { id: 'u7-g2-1', type: 'choice', instruction: '1 By the time he finished school, [blank]', options: ['George had already decided to become a doctor.', 'Vicky began training to be a nurse.', 'I’d already read everything about California.'], correctAnswers: ['George had already decided to become a doctor.'], isExample: true },
          { id: 'u7-g2-2', type: 'choice', instruction: '2 I’d already finished my coffee [blank]', options: ['when Carolina arrived at the café.', 'Vicky began training to be a nurse.', 'I knew that I wanted to be an actor in Hollywood.'], correctAnswers: ['when Carolina arrived at the café.'] },
          { id: 'u7-g2-3', type: 'choice', instruction: '3 They’d all finished medical school by the time [blank]', options: ['Vicky began training to be a nurse.', 'I’d already read everything about California.', 'they’d already left the restaurant and found somewhere else.'], correctAnswers: ['Vicky began training to be a nurse.'] },
          { id: 'u7-g2-4', type: 'choice', instruction: '4 By the time the waiter arrived at the table, [blank]', options: ['they’d already left the restaurant and found somewhere else.', 'Vicky began training to be a nurse.', 'when Carolina arrived at the café.'], correctAnswers: ['they’d already left the restaurant and found somewhere else.'] },
          { id: 'u7-g2-5', type: 'choice', instruction: '5 After I’d seen the film, [blank]', options: ['I knew that I wanted to be an actor in Hollywood.', 'I’d already read everything about California.', 'when Carolina arrived at the café.'], correctAnswers: ['I knew that I wanted to be an actor in Hollywood.'] },
          { id: 'u7-g2-6', type: 'choice', instruction: '6 Before I got the job in Los Angeles, [blank]', options: ['I’d already read everything about California.', 'I knew that I wanted to be an actor in Hollywood.', 'when Carolina arrived at the café.'], correctAnswers: ['I’d already read everything about California.'] }
        ]
      },
      {
        id: 'u7-g3',
        title: 'Grammar',
        instruction: '3 Put the words in the correct order to make sentences which express purpose.',
        questions: [
          { id: 'u7-g3-1', type: 'order', words: ['see', 'to', 'Prague', 'my', 'friend', 'I’m', 'to', 'going'], correctAnswers: ['I’m going to Prague to see my friend.', 'I\'m going to Prague to see my friend.'], isExample: true },
          { id: 'u7-g3-2', type: 'order', words: ['to', 'visiting', 'is', 'how', 'see', 'our', 'grandmother', 'she', 'we’re'], correctAnswers: ['We’re visiting our grandmother to see how she is.', 'We\'re visiting our grandmother to see how she is.'] },
          { id: 'u7-g3-3', type: 'order', words: ['that', 'so', 'meet', 'can', 'time', 'on', 'hurry', 'we', 'let’s', 'Jorge'], correctAnswers: ['Let’s hurry so that we can meet Jorge on time.', 'Let\'s hurry so that we can meet Jorge on time.'] },
          { id: 'u7-g3-4', type: 'order', words: ['can', 'sell', 'them', 'Wilma', 'buys', 'so', 'she', 'that', 'cheap', 'festivals', 'at', 'raincoats'], correctAnswers: ['Wilma buys cheap raincoats so that she can sell them at festivals.'] },
          { id: 'u7-g3-5', type: 'order', words: ['you’ll', 'need', 'to', 'take', 'your', 'phone', 'in', 'order', 'to', 'call', 'me', 'when', 'you', 'arrive'], correctAnswers: ['You’ll need to take your phone in order to call me when you arrive.', 'You\'ll need to take your phone in order to call me when you arrive.'] },
          { id: 'u7-g3-6', type: 'order', words: ['empty', 'soda', 'bottles', 'are', 'good', 'for', 'putting', 'candles', 'in'], correctAnswers: ['Empty soda bottles are good for putting candles in.'] }
        ]
      },
      {
        id: 'u7-v4',
        title: 'Vocabulary',
        instruction: '4 Complete the sentences with the correct form of the verbs in the box.',
        options: ['design', 'develop', 'edit', 'gain', 'prepare', 'take'],
        questions: [
          { id: 'u7-v4-1', type: 'fill', text: '1 Oh no! My interview is tomorrow and I haven’t [blank] for it at all!', correctAnswers: ['prepared'], isExample: true },
          { id: 'u7-v4-2', type: 'fill', text: '2 Eric’s chemistry coursework is good but he needs to [blank] his practical skills in the subject.', correctAnswers: ['develop'] },
          { id: 'u7-v4-3', type: 'fill', text: '3 I’m [blank] my photos before I put them online.', correctAnswers: ['editing'] },
          { id: 'u7-v4-4', type: 'fill', text: '4 Muneer [blank] his degree at Harvard and is now looking for work in Silicon Valley.', correctAnswers: ['gained'] },
          { id: 'u7-v4-5', type: 'fill', text: '5 We’re going to [blank] our own house after we’re married. It’ll be fantastic!', correctAnswers: ['design'] },
          { id: 'u7-v4-6', type: 'fill', text: '6 You need to [blank] a course in computer skills before you can apply for the job.', correctAnswers: ['take'] }
        ]
      },
      {
        id: 'u7-v5',
        title: 'Vocabulary',
        instruction: '5 Complete the text with the correct form of the verbs related to milestones.',
        questions: [
          { id: 'u7-v5-1', type: 'fill', text: 'When I was younger, I didn’t want to [blank] or have children...', correctAnswers: ['get married'], isExample: true },
          { id: 'u7-v5-2', type: 'fill', text: '...or [blank] children but I changed my mind after I fell in love with Sari.', correctAnswers: ['have'] },
          { id: 'u7-v5-3', type: 'fill', text: '...after I [blank] in love with Sari.', correctAnswers: ['fell'] },
          { id: 'u7-v5-4', type: 'fill', text: 'I had just [blank] from university when I met her in a café.', correctAnswers: ['graduated'] },
          { id: 'u7-v5-5', type: 'cloze', text: 'Six months later we [blank] engaged and [blank] travelling around the Middle East together.', correctAnswers: ['got', 'went'] },
          { id: 'u7-v5-6', type: 'fill', text: 'It was a fantastic experience and when we returned, we got married immediately. We were both very interested in the environment and so we [blank] a business which helps people...', correctAnswers: ['started', 'set up'] },
          { id: 'u7-v5-7', type: 'fill', text: 'We [blank] an award for protecting the environment in our first year.', correctAnswers: ['won'] },
          { id: 'u7-v5-8', type: 'fill', text: 'That same year, Adinda was born, and then two years later, her brother Calvin. We [blank] house soon after because my father changed his job.', correctAnswers: ['moved'] },
          { id: 'u7-v5-9', type: 'fill', text: 'Now, Adinda is old enough to [blank] home. I can’t believe how quickly time flies!', correctAnswers: ['leave'] }
        ]
      },
      {
        id: 'u7-v6',
        title: 'Vocabulary',
        instruction: '6 Choose the correct option.',
        questions: [
          { id: 'u7-v6-1', type: 'choice', instruction: '1 My [blank] is already full and very heavy! I don’t think I can carry anything else.', options: ['torch', 'tent', 'backpack'], correctAnswers: ['backpack'], isExample: true },
          { id: 'u7-v6-2', type: 'choice', instruction: '2 We won’t be near any electricity so make sure you bring a [blank] for your phones.', options: ['waterproof jacket', 'camping stove', 'portable charger'], correctAnswers: ['portable charger'] },
          { id: 'u7-v6-3', type: 'choice', instruction: '3 Can you see that bird up there? Here, use my [blank] and have a closer look.', options: ['walking boots', 'binoculars', 'sunglasses'], correctAnswers: ['binoculars'] },
          { id: 'u7-v6-4', type: 'choice', instruction: '4 Do you have any [blank]? I don’t want to be attacked by anything in the night.', options: ['insect repellent', 'sleeping bags', 'sunscreen'], correctAnswers: ['insect repellent'] },
          { id: 'u7-v6-5', type: 'choice', instruction: '5 My [blank] is lovely and warm. I’m going to sleep well tonight.', options: ['camping stove', 'sleeping bag', 'portable charger'], correctAnswers: ['sleeping bag'] },
          { id: 'u7-v6-6', type: 'choice', instruction: '6 Jackie didn’t put on any [blank] and got terribly burned in the sun.', options: ['sunscreen', 'insect repellent', 'binoculars'], correctAnswers: ['sunscreen'] },
          { id: 'u7-v6-7', type: 'choice', instruction: '7 Can you help me put my [blank] up before it starts raining?', options: ['backpack', 'torch', 'tent'], correctAnswers: ['tent'] }
        ]
      },
      {
        id: 'u7-f7',
        title: 'Function',
        instruction: '7 Put the conversation in the correct order. Select the correct speaker turn letter (a-l) for each number.\n\na Can I help you with anything else?\nb Let me check ... From six years of age, sir.\nc So, applepalm.com. No need to send me a link, thanks.\nd Yes, we do. We can look after children aged between three and ten, from 7 p.m. until 11. Is there anything else I can do for you?\ne Good morning, this is the Apple Palm Hotel. Stefan speaking. How can I help you?\nf Perfect. She’s seven. And do you offer babysitting services?\ng Hello, I’m calling to find out about your facilities for children.\nh Yes, can you give me some information about activities for adults?\ni Oh good. My daughter loves horse-riding. Could you tell me how old children need to be to take part in that?\nj Actually, we have a lot of activities for adults and you can find it all on our website: applepalm.com. I wonder if you could give me your email address, sir, and I could send you a link.\nk Certainly sir. Now, let me see. We have a play pool, horse-riding, crazy golf and a petting zoo.\nl No, that’s it. Thanks very much for your help.',
        questions: [
          { id: 'u7-f7-1', type: 'choice', instruction: 'Turn 1 (e)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['e'], isExample: true },
          { id: 'u7-f7-2', type: 'choice', instruction: 'Turn 2', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['g'] },
          { id: 'u7-f7-3', type: 'choice', instruction: 'Turn 3', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['k'] },
          { id: 'u7-f7-4', type: 'choice', instruction: 'Turn 4', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['i'] },
          { id: 'u7-f7-5', type: 'choice', instruction: 'Turn 5', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['b'] },
          { id: 'u7-f7-6', type: 'choice', instruction: 'Turn 6', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['f'] },
          { id: 'u7-f7-7', type: 'choice', instruction: 'Turn 7', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['d'] },
          { id: 'u7-f7-8', type: 'choice', instruction: 'Turn 8', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['h'] },
          { id: 'u7-f7-9', type: 'choice', instruction: 'Turn 9', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['j'] },
          { id: 'u7-f7-10', type: 'choice', instruction: 'Turn 10', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['c'] },
          { id: 'u7-f7-11', type: 'choice', instruction: 'Turn 11', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['a'] },
          { id: 'u7-f7-12', type: 'choice', instruction: 'Turn 12 (l)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], correctAnswers: ['l'], isExample: true }
        ]
      }
    ],
    '8': [
      {
        id: 'u8-g1',
        title: 'Grammar',
        instruction: '1 Complete the sentences with the correct form of the verbs in brackets.',
        questions: [
          { id: 'u8-g1-1', type: 'fill', text: '1 I love Fridays because we don’t have to wear formal clothes. We can dress casually. [blank] (have)', correctAnswers: ['don’t have to', 'dont have to', 'don\'t have to'], isExample: true },
          { id: 'u8-g1-2', type: 'fill', text: '2 Stuart [blank] finish his dinner before he can have any dessert. (need)', correctAnswers: ['needs to', 'needs'] },
          { id: 'u8-g1-3', type: 'fill', text: '3 Thanks for babysitting. Remember, Katherine [blank] go to bed after 10 p.m. It’s much too late. (must)', correctAnswers: ['must not', 'mustn’t', 'mustn\'t'] },
          { id: 'u8-g1-4', type: 'fill', text: '4 We [blank] drive cars without wearing seatbelts many years ago. (allow)', correctAnswers: ['were allowed to', 'were allowed'] },
          { id: 'u8-g1-5', type: 'fill', text: '5 You [blank] remember to close all the apps before you switch the computer off. (must)', correctAnswers: ['must'] },
          { id: 'u8-g1-6', type: 'fill', text: '6 Susie [blank] call her mother but she forgot. Now she’s in a lot of trouble. (have)', correctAnswers: ['had to'] }
        ]
      },
      {
        id: 'u8-g2',
        title: 'Grammar',
        instruction: '2 Choose the correct option, a, b or c.',
        questions: [
          { id: 'u8-g2-1', type: 'choice', instruction: '1 Mobile phones [blank] very much in the 1990s.', options: ['weren’t being bought', 'are bought', 'aren’t being bought'], correctAnswers: ['weren’t being bought'], isExample: true },
          { id: 'u8-g2-2', type: 'choice', instruction: '2 Indonesia [blank] by Europeans in the fifteenth century.', options: ['discovered', 'was discovered', 'were discovered'], correctAnswers: ['was discovered'] },
          { id: 'u8-g2-3', type: 'choice', instruction: '3 Video technology [blank] in many sports these days.', options: ['is being use', 'is being used', 'are being used'], correctAnswers: ['is being used'] },
          { id: 'u8-g2-4', type: 'choice', instruction: '4 They [blank] by rescuers. A dog found them buried in the snow.', options: ['weren’t saved', 'weren’t being saved', 'saved'], correctAnswers: ['weren’t saved'] },
          { id: 'u8-g2-5', type: 'choice', instruction: '5 He [blank] as an expert by people in the industry. They all ask him for advice.', options: ['isn’t seen', 'was seen', 'is seen'], correctAnswers: ['is seen'] },
          { id: 'u8-g2-6', type: 'choice', instruction: '6 John Lennon [blank] in New York City on 8th December 1980.', options: ['was killing', 'killed', 'was killed'], correctAnswers: ['was killed'] }
        ]
      },
      {
        id: 'u8-g3',
        title: 'Grammar',
        instruction: '3 Choose the correct non-defining relative clause and match it to each sentence (a-f).\n\na , which were the largest I’ve ever seen,\nb , who has just finished her exams,\nc , where I was born,\nd , which had the most delicious food I’ve tasted,\ne , which is very heavy in Sri Lanka,\nf , when I was only 17,',
        questions: [
          { id: 'u8-g3-1', type: 'choice', instruction: '1 In Vienna *, there is an extremely large and beautiful palace.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['c'], isExample: true },
          { id: 'u8-g3-2', type: 'choice', instruction: '2 The rain * stopped us from going out.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['e'] },
          { id: 'u8-g3-3', type: 'choice', instruction: '3 Pete’s dogs * were friendly and well-behaved.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['a'] },
          { id: 'u8-g3-4', type: 'choice', instruction: '4 My daughter * is looking for a part-time job.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['b'] },
          { id: 'u8-g3-5', type: 'choice', instruction: '5 In 2006 *, I sailed around the world.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['f'] },
          { id: 'u8-g3-6', type: 'choice', instruction: '6 The Moorcrofts’ party * went on far too late.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['d'] }
        ]
      },
      {
        id: 'u8-v4',
        title: 'Vocabulary',
        instruction: '4 Match the sentence halves to make correct phrases (a-k).\n\na in a game after you’ve finished this one?\nb out earphones on the plane if you want to watch a film.\nc down the computer properly and we lost all of the data.\nd back at around six o’ clock?\ne back where you found them? I can’t find them anywhere.\nf in my assignment today but I haven’t finished it.\ng up any mess in the kitchen and wash up the dishes?\nh with customers all day.\ni away in the cupboard.\nj away glass bottles. Recycle them.\nk out the rubbish. He’s so lazy.',
        questions: [
          { id: 'u8-v4-1', type: 'choice', instruction: '1 Leo isn’t here right now. Can you call him [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['d'], isExample: true },
          { id: 'u8-v4-2', type: 'choice', instruction: '2 I’m in trouble! I didn’t shut [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['c'] },
          { id: 'u8-v4-3', type: 'choice', instruction: '3 They don’t like working as a receptionist. It’s difficult dealing [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['h'] },
          { id: 'u8-v4-4', type: 'choice', instruction: '4 When you’ve finished cooking, can you clear [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['g'] },
          { id: 'u8-v4-5', type: 'choice', instruction: '5 I love playing table tennis. Can I join [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['a'] },
          { id: 'u8-v4-6', type: 'choice', instruction: '6 After you finish your homework, put your books [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['i'] },
          { id: 'u8-v4-7', type: 'choice', instruction: '7 Did you put the keys [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['e'] },
          { id: 'u8-v4-8', type: 'choice', instruction: '8 My son never takes [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['k'] },
          { id: 'u8-v4-9', type: 'choice', instruction: '9 Oh no! I have to hand [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['f'] },
          { id: 'u8-v4-10', type: 'choice', instruction: '10 Don’t worry. They give [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['b'] },
          { id: 'u8-v4-11', type: 'choice', instruction: '11 If you want to protect the environment, don’t throw [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], correctAnswers: ['j'] }
        ]
      },
      {
        id: 'u8-v5',
        title: 'Vocabulary',
        instruction: '5 Complete the sentences with the missing adverbs.',
        questions: [
          { id: 'u8-v5-1', type: 'fill', text: '1 Fortunately, Linda found her wedding ring before her husband noticed it was missing.', correctAnswers: ['Fortunately', 'fortunately'], isExample: true },
          { id: 'u8-v5-2', type: 'fill', text: '2 Kate is an excellent athlete. S[blank] , she had an accident last week and won’t be able to compete in the race.', correctAnswers: ['Sadly', 'sadly'] },
          { id: 'u8-v5-3', type: 'fill', text: '3 T[blank] , my friend arrived with the tickets just before the game started.', correctAnswers: ['Thankfully', 'thankfully'] },
          { id: 'u8-v5-4', type: 'fill', text: '4 O[blank] , I want to win. But reaching the final is a fantastic achievement for me.', correctAnswers: ['Obviously', 'obviously'] },
          { id: 'u8-v5-5', type: 'fill', text: '5 Kramer lost contact with his brother during the war 20 years ago. A[blank] , they met while shopping at the supermarket.', correctAnswers: ['Amazingly', 'amazingly'] },
          { id: 'u8-v5-6', type: 'fill', text: '6 T[blank] , my mother died before I became famous. This book is for her.', correctAnswers: ['Tragically', 'tragically'] }
        ]
      },
      {
        id: 'u8-v6',
        title: 'Vocabulary',
        instruction: '6 Underline the correct geographical features to complete the sentences.',
        questions: [
          { id: 'u8-v6-1', type: 'choice', instruction: '1 Seeing the snow-covered [blank] of the Pyrenees from a helicopter is something I’ll never forget.', options: ['peaks', 'caves'], correctAnswers: ['peaks'], isExample: true },
          { id: 'u8-v6-2', type: 'choice', instruction: '2 Sumatra’s thick [blank] is in danger of disappearing because the trees are being cut down illegally.', options: ['island', 'rainforest'], correctAnswers: ['rainforest'] },
          { id: 'u8-v6-3', type: 'choice', instruction: '3 I love sitting on a sandy [blank] watching the sun set over the sea.', options: ['shore', 'forests'], correctAnswers: ['shore'] },
          { id: 'u8-v6-4', type: 'choice', instruction: '4 Eric loves living at the top of a steep [blank] but I find it very tiring to walk home.', options: ['hill', 'waterfall'], correctAnswers: ['hill'] },
          { id: 'u8-v6-5', type: 'choice', instruction: '5 Wow, the water in the [blank] is so clear today! You can see fish swimming along the sea bed.', options: ['shore', 'bay'], correctAnswers: ['bay'] },
          { id: 'u8-v6-6', type: 'choice', instruction: '6 You must be careful when walking along the [blank] by the coast. It’s very dangerous when it rains as you can slip on the rocks.', options: ['cliffs', 'forests'], correctAnswers: ['cliffs'] }
        ]
      },
      {
        id: 'u8-f7',
        title: 'Function',
        instruction: '7 Put the words in the correct order to make sentences. Use punctuation where necessary.',
        questions: [
          { id: 'u8-f7-1', type: 'order', words: ['excuse', 'that', 'is', 'no', 'Karen', '!'], correctAnswers: ['That is no excuse, Karen!', 'That is no excuse Karen!'], isExample: true },
          { id: 'u8-f7-2', type: 'order', words: ['very', 'me', 'stupid', 'it', 'was', 'of', '.'], correctAnswers: ['It was very stupid of me.'] },
          { id: 'u8-f7-3', type: 'order', words: ['too', 'meant', 'I', 'was', 'but', 'to', 'I', 'busy', 'come', '.'], correctAnswers: ['I meant to come but I was too busy.', 'I meant to come, but I was too busy.'] },
          { id: 'u8-f7-4', type: 'order', words: ['I', 'I', 'won’t', 'promise', 'forget', 'do', 'it', 'again', 'to', '.'], correctAnswers: ['I promise I won’t forget to do it again.', 'I promise I won\'t forget to do it again.'] },
          { id: 'u8-f7-5', type: 'order', words: ['I', 'still', 'in', 'you', 'bed', 'see', 'was', 'well', '.'], correctAnswers: ['Well, I see you were still in bed.', 'Well, I see you was still in bed.', 'I see you were still in bed, well.', 'I see you was still in bed, well.'] },
          { id: 'u8-f7-6', type: 'order', words: ['never', 'I', 'mind', 'understand', '.'], correctAnswers: ['Never mind, I understand.'] }
        ]
      }
    ],
    '9': [
      {
        id: 'u9-g1',
        title: 'Grammar',
        instruction: '1 Put the words in the correct order to make passive sentences.',
        questions: [
          { id: 'u9-g1-1', type: 'order', words: ['local', 'vegetables', 'the', 'are', 'by', 'grown', 'farmers', '.'], correctAnswers: ['The vegetables are grown by local farmers.'], isExample: true },
          { id: 'u9-g1-2', type: 'order', words: ['in', 'documentary', 'the', 'black', 'filmed', 'being', 'and', 'white', 'is', '.'], correctAnswers: ['The documentary is being filmed in black and white.'] },
          { id: 'u9-g1-3', type: 'order', words: ['wood', 'to', 'is', 'furniture', 'used', 'recycled', 'make', '.'], correctAnswers: ['Recycled wood is used to make furniture.'] },
          { id: 'u9-g1-4', type: 'order', words: ['times', 'dogs', 'three', 'day', 'must', 'fed', 'be', 'a', '.'], correctAnswers: ['Dogs must be fed three times a day.', 'Dogs must be fed 3 times a day.'] },
          { id: 'u9-g1-5', type: 'order', words: ['done', 'in', 'will', 'by', 'the', 'jobs', 'future', 'all', 'robots', 'be', '.'], correctAnswers: ['All jobs will be done by robots in the future.', 'In the future, all jobs will be done by robots.'] },
          { id: 'u9-g1-6', type: 'order', words: ['there', 'is', 'crime', 'committed', 'work', 'because', 'no', 'is', 'being', '.'], correctAnswers: ['No crime is being committed because there is work.'] },
          { id: 'u9-g1-7', type: 'order', words: ['seen', 'wildlife', 'all', 'visitors', 'could', 'be', 'by', '.'], correctAnswers: ['All wildlife could be seen by visitors.', 'Wildlife could be seen by all visitors.'] },
          { id: 'u9-g1-8', type: 'order', words: ['long', 'in', 'made', 'train', 'journeys', 'were', 'past', 'by', 'the', 'most', '.'], correctAnswers: ['Most long journeys in the past were made by train.', 'In the past, most long journeys were made by train.'] },
          { id: 'u9-g1-9', type: 'order', words: ['lot', 'been', 'a', 'written', 'cookery', 'books', 'about', 'have', 'of', '.'], correctAnswers: ['A lot of books have been written about cookery.', 'A lot of cookery books have been written.'] }
        ]
      },
      {
        id: 'u9-g2',
        title: 'Grammar',
        instruction: '2 Find and correct the mistakes. If the sentence is correct, type "Correct".',
        questions: [
          { id: 'u9-g2-1', type: 'fill', text: '1 If I hadn’t travel to Russia, I would never have met my husband. [blank]', correctAnswers: ['If I hadn’t travelled to Russia, I would never have met my husband.', 'If I hadn\'t travelled to Russia, I would never have met my husband.', 'If I hadn’t traveled to Russia, I would never have met my husband.', 'If I hadn\'t traveled to Russia, I would never have met my husband.'], isExample: true },
          { id: 'u9-g2-2', type: 'fill', text: '2 Simon would have won the lottery if he had remembered buy a ticket. [blank]', correctAnswers: ['Simon would have won the lottery if he had remembered to buy a ticket.'] },
          { id: 'u9-g2-3', type: 'fill', text: '3 If you had moved to Rome instead of Hollywood, would you have became an actor? [blank]', correctAnswers: ['If you had moved to Rome instead of Hollywood, would you have become an actor?'] },
          { id: 'u9-g2-4', type: 'fill', text: '4 There might have been more people at the wedding if we had remembered to send invitations. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u9-g2-5', type: 'fill', text: '5 She would had missed the train if we hadn’t sent the text message to tell her to hurry. [blank]', correctAnswers: ['She would have missed the train if we hadn’t sent the text message to tell her to hurry.', 'She would have missed the train if we hadn\'t sent the text message to tell her to hurry.'] },
          { id: 'u9-g2-6', type: 'fill', text: '6 Where will you have gone if he hadn’t offered you a job? [blank]', correctAnswers: ['Where would you have gone if he hadn’t offered you a job?', 'Where would you have gone if he hadn\'t offered you a job?'] },
          { id: 'u9-g2-7', type: 'fill', text: '7 If Julie had run just a little bit faster, she would have won the race. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u9-g2-8', type: 'fill', text: '8 I might have stayed at home if I had known the band were so awful. [blank]', correctAnswers: ['Correct', 'correct'] }
        ]
      },
      {
        id: 'u9-g3',
        title: 'Grammar',
        instruction: '3 Match sentences 1–6 with responses a–f.\n\na I did too.\nb So does Rick.\nc Nor have I.\nd Mine doesn’t either.\ne Oh, I do.\nf Neither did I.',
        questions: [
          { id: 'u9-g3-1', type: 'choice', instruction: '1 I loved the play.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['a'], isExample: true },
          { id: 'u9-g3-2', type: 'choice', instruction: '2 I didn’t see the elephants.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['f'] },
          { id: 'u9-g3-3', type: 'choice', instruction: '3 Belinda loves television.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['b'] },
          { id: 'u9-g3-4', type: 'choice', instruction: '4 Bill and Todd have never been to Calais.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['c'] },
          { id: 'u9-g3-5', type: 'choice', instruction: '5 I don’t like the desert.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['e'] },
          { id: 'u9-g3-6', type: 'choice', instruction: '6 My son doesn’t like cheese.', options: ['a', 'b', 'c', 'd', 'e', 'f'], correctAnswers: ['d'] }
        ]
      },
      {
        id: 'u9-v4',
        title: 'Vocabulary',
        instruction: '4 Choose the correct alternative.',
        questions: [
          { id: 'u9-v4-1', type: 'choice', instruction: '1 I like to [blank] for things and [blank] in cash if possible.', options: ['save up / exchange', 'save up / pay', 'get a refund / exchange', 'get a refund / pay'], correctAnswers: ['save up / pay'], isExample: true },
          { id: 'u9-v4-2', type: 'choice', instruction: '2 I forgot to [blank] and so I couldn’t [blank] my kettle for something else.', options: ['keep my receipt / exchange', 'keep my receipt / deliver', 'look for bargains / exchange', 'look for bargains / deliver'], correctAnswers: ['keep my receipt / exchange'] },
          { id: 'u9-v4-3', type: 'choice', instruction: '3 The new iPhone [blank] next week but I’m going to wait until I see [blank].', options: ['gets a refund / good deal', 'goes on sale / a good deal', 'goes on sale / goods', 'gets a refund / goods'], correctAnswers: ['goes on sale / a good deal'] },
          { id: 'u9-v4-4', type: 'choice', instruction: '4 Look at this special [blank]: two shirts for the price of one! I love shopping in the [blank].', options: ['refund / exchange', 'refund / sales', 'offer / exchange', 'offer / sales'], correctAnswers: ['offer / sales'] },
          { id: 'u9-v4-5', type: 'choice', instruction: '5 You may only [blank] if the goods aren’t [blank] on time.', options: ['cancel an order / delivered', 'cancel an order / exchanged', 'look for bargains / delivered', 'look for bargains / exchanged'], correctAnswers: ['cancel an order / delivered'] },
          { id: 'u9-v4-6', type: 'choice', instruction: '6 You can [blank] online but usually you must pay [blank].', options: ['save up / good deal', 'save up / by credit card', 'look for bargains / good deal', 'look for bargains / by credit card'], correctAnswers: ['look for bargains / by credit card'] }
        ]
      },
      {
        id: 'u9-v5',
        title: 'Vocabulary',
        instruction: '5 Match the strong adjectives in the box with weak adjectives 1–6.\n\nexhausted  furious  gorgeous  huge  terrified  thrilled',
        questions: [
          { id: 'u9-v5-1', type: 'fill', text: '1 big -> [blank]', correctAnswers: ['huge'], isExample: true },
          { id: 'u9-v5-2', type: 'fill', text: '2 frightened -> [blank]', correctAnswers: ['terrified'] },
          { id: 'u9-v5-3', type: 'fill', text: '3 happy -> [blank]', correctAnswers: ['thrilled'] },
          { id: 'u9-v5-4', type: 'fill', text: '4 angry -> [blank]', correctAnswers: ['furious'] },
          { id: 'u9-v5-5', type: 'fill', text: '5 tired -> [blank]', correctAnswers: ['exhausted'] },
          { id: 'u9-v5-6', type: 'fill', text: '6 beautiful -> [blank]', correctAnswers: ['gorgeous'] }
        ]
      },
      {
        id: 'u9-v6',
        title: 'Vocabulary',
        instruction: '6 Choose the correct option a, b or c.',
        questions: [
          { id: 'u9-v6-1', type: 'choice', instruction: '1 I saw a very [blank] art exhibition yesterday. It was just lots of different office furniture.', options: ['spectacular', 'weird', 'traditional'], correctAnswers: ['weird'], isExample: true },
          { id: 'u9-v6-2', type: 'choice', instruction: '2 This sculpture is very [blank]. I’ve never seen anything like it before.', options: ['old-fashioned', 'ugly', 'original'], correctAnswers: ['original'] },
          { id: 'u9-v6-3', type: 'choice', instruction: '3 Her early work is quite [blank]. The pictures look almost look like photographs.', options: ['realistic', 'cheerful', 'abstract'], correctAnswers: ['realistic'] },
          { id: 'u9-v6-4', type: 'choice', instruction: '4 Black and white paintings are so boring. I prefer something more [blank].', options: ['powerful', 'silly', 'colourful'], correctAnswers: ['colourful'] },
          { id: 'u9-v6-5', type: 'choice', instruction: '5 Don’t you think his work is a bit [blank]? Modern art is much better.', options: ['weird', 'old-fashioned', 'realistic'], correctAnswers: ['old-fashioned'] },
          { id: 'u9-v6-6', type: 'choice', instruction: '6 Jamie used to love art that is [blank] but now he likes art which is a lot more abstract.', options: ['realistic', 'original', 'cheerful'], correctAnswers: ['realistic'] }
        ]
      },
      {
        id: 'u9-f7',
        title: 'Function',
        instruction: '7 Complete the conversation with the words in the box.\n\nafraid  broken  can  exchange  get  like  make  manager  seems  sorry  that',
        options: ['Can', 'manager', 'like', 'make', 'broken', 'sorry', 'that', 'seems', 'get', 'afraid', 'exchange'],
        questions: [
          { id: 'u9-f7-1', type: 'fill', text: 'A: Good afternoon. 1 [blank] I see the 2 [blank], please? I’d 3 [blank] to 4 [blank] a complaint.', correctAnswers: ['Can', 'manager', 'like', 'make'], isExample: true },
          { id: 'u9-f7-2', type: 'cloze', text: 'B: Is there something I can help with?\nA: My new washing machine was delivered yesterday. The problem is it’s 5 [blank].', correctAnswers: ['broken'] },
          { id: 'u9-f7-3', type: 'cloze', text: 'B: I’m very 6 [blank] about 7 [blank]. What is wrong with it?', correctAnswers: ['sorry', 'that'] },
          { id: 'u9-f7-4', type: 'cloze', text: 'A: There 8 [blank] to be a problem with the door. It won’t close properly. I’d like to 9 [blank] a refund.', correctAnswers: ['seems', 'get'] },
          { id: 'u9-f7-5', type: 'cloze', text: 'B: I’m 10 [blank] we can’t give you a refund, sir. But we can 11 [blank] it for a new one.', correctAnswers: ['afraid', 'exchange'] }
        ]
      }
    ],
    '10': [
      {
        id: 'u10-g1',
        title: 'Grammar',
        instruction: '1 Find and correct the mistakes in the reported speech. If the sentence is correct, type "Correct".',
        questions: [
          { id: 'u10-g1-1', type: 'fill', text: '1 ‘My parrot died in the night,’ said Mona. -> Mona says said that her parrot had died in the night. [blank]', correctAnswers: ['Mona said that her parrot had died in the night.', 'Mona said that her parrot died in the night.'], isExample: true },
          { id: 'u10-g1-2', type: 'fill', text: '2 ‘You will fail if you don’t do a lot of research,’ our professor told us. -> Our professor told us we would fail if we didn’t do a lot of research. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u10-g1-3', type: 'fill', text: '3 ‘It’s the only coat that I like,’ he said. -> He said it was the only coat that I like. [blank]', correctAnswers: ['He said it was the only coat that he liked.', 'He said it was the only coat he liked.'] },
          { id: 'u10-g1-4', type: 'fill', text: '4 ‘I’m enjoying the course but it’s challenging,’ I said. -> I said I was enjoying the course but it’s challenging. [blank]', correctAnswers: ['I said I was enjoying the course but it was challenging.', 'I said I was enjoying the course but it’s challenging.'] },
          { id: 'u10-g1-5', type: 'fill', text: '5 ‘We’ll meet at the restaurant,’ Jerry and Rick said. -> Jerry and Rick said they would meet at the restaurant. [blank]', correctAnswers: ['Correct', 'correct'] },
          { id: 'u10-g1-6', type: 'fill', text: '6 ‘We’ll have to start all over again,’ they said. -> They said that they will have to start all over again. [blank]', correctAnswers: ['They said that they would have to start all over again.', 'They said they would have to start all over again.'] },
          { id: 'u10-g1-7', type: 'fill', text: '7 ‘You’ve left your bag in the changing room,’ her friends told her. -> Her friends told her she had left their bag in the changing rooms. [blank]', correctAnswers: ['Her friends told her she had left her bag in the changing room.', 'Her friends told her she had left her bag in the changing rooms.'] },
          { id: 'u10-g1-8', type: 'fill', text: '8 ‘She attended a very expensive university’ Gemma’s grandfather said. -> Gemma’s grandfather said she attended a very expensive university. [blank]', correctAnswers: ['Correct', 'correct', 'Gemma’s grandfather said she had attended a very expensive university.'] }
        ]
      },
      {
        id: 'u10-g2',
        title: 'Grammar',
        instruction: '2 Match the sentence halves (a-i).\n\na to give me a season ticket to see the football next year.\nb me to give up sugar in my tea.\nc not to go near the area.\nd checking online for daily offers.\ne the film before reading the book.\nf to allow us into the club wearing shorts.\ng training for the race or you’ll find it difficult.\nh taking lots of sunscreen with us.\ni take his shoes off before coming in.',
        questions: [
          { id: 'u10-g2-1', type: 'choice', instruction: '1 The company recommends [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['d'], isExample: true },
          { id: 'u10-g2-2', type: 'choice', instruction: '2 Cillian suggested [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['h'] },
          { id: 'u10-g2-3', type: 'choice', instruction: '3 My father promised [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['a'] },
          { id: 'u10-g2-4', type: 'choice', instruction: '4 You should consider [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['g'] },
          { id: 'u10-g2-5', type: 'choice', instruction: '5 The government has warned travellers [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['c'] },
          { id: 'u10-g2-6', type: 'choice', instruction: '6 I recommend seeing [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['e'] },
          { id: 'u10-g2-7', type: 'choice', instruction: '7 My sister is trying to persuade [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['b'] },
          { id: 'u10-g2-8', type: 'choice', instruction: '8 They refused [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['f'] },
          { id: 'u10-g2-9', type: 'choice', instruction: '9 Can you encourage him to [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['i'] }
        ]
      },
      {
        id: 'u10-g3',
        title: 'Grammar',
        instruction: '3 Write the questions as reported speech.',
        questions: [
          { id: 'u10-g3-1', type: 'fill', text: '1 ‘How can you do that?’ she asked Jake. -> She asked Jake [blank]', correctAnswers: ['how he could do that.', 'how he could do that'], isExample: true },
          { id: 'u10-g3-2', type: 'fill', text: '2 ‘How many times a day do you brush your teeth?’ my dentist asked. -> My dentist asked [blank]', correctAnswers: ['how many times a day I brushed my teeth.', 'how many times a day I brush my teeth.'] },
          { id: 'u10-g3-3', type: 'fill', text: '3 ‘Did Sophie leave the dinner party early?’ I asked. -> I asked [blank]', correctAnswers: ['if Sophie had left the dinner party early.', 'whether Sophie had left the dinner party early.', 'if Sophie left the dinner party early.'] },
          { id: 'u10-g3-4', type: 'fill', text: '4 ‘Where has Tina been this week?’ asked Laura. -> Laura asked [blank]', correctAnswers: ['where Tina had been that week.', 'where Tina had been this week.'] },
          { id: 'u10-g3-5', type: 'fill', text: '5 ‘Whose camera is Shaun borrowing?’ Lee asked. -> Lee asked [blank]', correctAnswers: ['whose camera Shaun was borrowing.'] },
          { id: 'u10-g3-6', type: 'fill', text: '6 ‘Could you tell me where the pharmacy is?’ the woman asked. -> The woman asked [blank]', correctAnswers: ['if I could tell her where the pharmacy was.', 'if I could tell her where the pharmacy is.'] }
        ]
      },
      {
        id: 'u10-v4',
        title: 'Vocabulary',
        instruction: '4 Match the sentence halves (a-i).\n\na grades in the school, Delia?\nb revising for tests but always passes them.\nc well at his exams.\nd I was a terrible student.\ne college on a regular basis, you get zero marks on your coursework.\nf subjects you like from an early age.\ng fees at state schools, but you do at private ones.\nh history exam. I have to do it again.\ni test. We have to do it again tomorrow.',
        questions: [
          { id: 'u10-v4-1', type: 'choice', instruction: '1 When I was at secondary school [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['d'], isExample: true },
          { id: 'u10-v4-2', type: 'choice', instruction: '2 Han isn’t good at coursework, but he’s doing [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['c'] },
          { id: 'u10-v4-3', type: 'choice', instruction: '3 You don’t have to pay [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['g'] },
          { id: 'u10-v4-4', type: 'choice', instruction: '4 I think you should be allowed to study whatever [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['f'] },
          { id: 'u10-v4-5', type: 'choice', instruction: '5 Gorka never spends any time [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['b'] },
          { id: 'u10-v4-6', type: 'choice', instruction: '6 If you don’t attend [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['e'] },
          { id: 'u10-v4-7', type: 'choice', instruction: '7 No, I didn’t pass my [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['h'] },
          { id: 'u10-v4-8', type: 'choice', instruction: '8 Is it true you got the highest [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['a'] },
          { id: 'u10-v4-9', type: 'choice', instruction: '9 The teacher said we all failed today’s [blank]', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], correctAnswers: ['i'] }
        ]
      },
      {
        id: 'u10-v5',
        title: 'Vocabulary',
        instruction: '5 Choose the correct option, a, b or c.',
        questions: [
          { id: 'u10-v5-1', type: 'choice', instruction: '1 My father [blank] me to call a mechanic instead of repairing the car myself.', options: ['demanded', 'advised', 'promised'], correctAnswers: ['advised'], isExample: true },
          { id: 'u10-v5-2', type: 'choice', instruction: '2 Helga [blank] to be at the wedding on time but she was late as usual.', options: ['promised', 'refused', 'warned'], correctAnswers: ['promised'] },
          { id: 'u10-v5-3', type: 'choice', instruction: '3 My mother [blank] to give me any money for new clothes.', options: ['warned', 'advised', 'refused'], correctAnswers: ['refused'] },
          { id: 'u10-v5-4', type: 'choice', instruction: '4 I [blank] boiling the egg for 12 minutes, not 10. It’s much better.', options: ['demand', 'suggest', 'refuse'], correctAnswers: ['suggest'] },
          { id: 'u10-v5-5', type: 'choice', instruction: '5 The instructions [blank] using gloves, but I don’t have any.', options: ['promise', 'recommend', 'refuse'], correctAnswers: ['recommend'] },
          { id: 'u10-v5-6', type: 'choice', instruction: '6 We [blank] that the government do something about the poor state of our roads.', options: ['demanded', 'promised', 'warned'], correctAnswers: ['demanded'] }
        ]
      },
      {
        id: 'u10-v6',
        title: 'Vocabulary',
        instruction: '6 Match the verbs to the words to make phrases related to work.\n\nVerbs: arrange/set up, do, employ/interview, give, offer, serve, work, write\nWords: customers, in a team, meetings, people, presentations, reports, research, someone a job',
        questions: [
          { id: 'u10-v6-1', type: 'fill', text: '1 give -> [blank]', correctAnswers: ['presentations'], isExample: true },
          { id: 'u10-v6-2', type: 'fill', text: '2 arrange/set up -> [blank]', correctAnswers: ['meetings'] },
          { id: 'u10-v6-3', type: 'fill', text: '3 do -> [blank]', correctAnswers: ['research'] },
          { id: 'u10-v6-4', type: 'fill', text: '4 employ/interview -> [blank]', correctAnswers: ['people'] },
          { id: 'u10-v6-5', type: 'fill', text: '5 offer -> [blank]', correctAnswers: ['someone a job'] },
          { id: 'u10-v6-6', type: 'fill', text: '6 serve -> [blank]', correctAnswers: ['customers'] },
          { id: 'u10-v6-7', type: 'fill', text: '7 work -> [blank]', correctAnswers: ['in a team'] },
          { id: 'u10-v6-8', type: 'fill', text: '8 write -> [blank]', correctAnswers: ['reports'] }
        ]
      },
      {
        id: 'u10-f7',
        title: 'Function',
        instruction: '7 Complete the job interview with the words in the box.\n\nAs you can see  fine  Hopefully  I’d be  made  say  So  tell  to know  would you say  yourself',
        options: ['As you can see', 'fine', 'Hopefully', 'I’d be', 'made', 'say', 'So', 'tell', 'to know', 'would you say', 'yourself'],
        questions: [
          { id: 'u10-f7-1', type: 'fill', text: 'A: What 1 [blank] you decide to become a chef?', correctAnswers: ['made'], isExample: true },
          { id: 'u10-f7-2', type: 'cloze', text: 'B: 2 [blank] from my CV, I’ve been working in kitchens since I was 13 years old. It’s my life.', correctAnswers: ['As you can see'] },
          { id: 'u10-f7-3', type: 'cloze', text: 'A: I see. 3 [blank], what is it you enjoy about cooking?', correctAnswers: ['So'] },
          { id: 'u10-f7-4', type: 'cloze', text: 'B: I think I’d 4 [blank] the best part is using fresh ingredients to create imaginative dishes.', correctAnswers: ['say'] },
          { id: 'u10-f7-5', type: 'cloze', text: 'A: Could you 5 [blank] me why you decided to apply for a job here?', correctAnswers: ['tell'] },
          { id: 'u10-f7-6', type: 'cloze', text: 'B: Well, everyone wants to work here. I mean, your restaurant has a very good reputation.\nA: Thank you. What 6 [blank] is the biggest attraction of working here?', correctAnswers: ['would you say'] },
          { id: 'u10-f7-7', type: 'cloze', text: 'B: I’m hoping to develop my skills by working with some of the top chefs in the industry.\nA: And where do you see 7 [blank] in five years?', correctAnswers: ['yourself'] },
          { id: 'u10-f7-8', type: 'cloze', text: 'B: 8 [blank], I’ll be the head chef here.', correctAnswers: ['Hopefully'] },
          { id: 'u10-f7-9', type: 'cloze', text: 'A: Oh! Ha ha. Well, I do like someone with ambition. 9 [blank] interested 10 [blank] when you could start if we offered you the job.', correctAnswers: ['I’d be', 'to know'] },
          { id: 'u10-f7-10', type: 'cloze', text: 'B: I have to give one month’s notice.\nA: Right. Well that all sounds 11 [blank]. Now do you have any questions?', correctAnswers: ['fine'] }
        ]
      }
    ]
  }
};

export const AVAILABLE_LEVELS = ['B1'];
