// Lessons for the Useful sentences app.
// Cada leccion: actividades (en orden), extras y mazos de tarjetas. El Useful Language NO va aqui:
// cada bloque {type:'useful', blocks:[...]} lo lee de frases.js por su campo block.
// Tipos de bloque: text, note, teacher (solo con ?teacher=1), h, questions, useful, carousel, pick, deal, choose, video, gaps, match, elements, dialogue, flip.

const LESSONS_DATA = [
 {
  "id": "stars",
  "title": "Written in the Stars: Your Professional Year",
  "sub": "Speaking session · 2 hours",
  "activities": [
   {
    "id": "1",
    "title": "Warm-up: Do you speak astrology?",
    "min": 8,
    "blocks": [
     {
      "type": "teacher",
      "md": "**Objetivo:** activar el tema y el vocabulario de redes. **1.** Primera pregunta al aire, 2 min sin corregir; anota chunks mejorables. **2.** Resto en grupos de 3-4; alimenta con las frases. **3.** Memes: que los expliquen en inglés; cierra con el eclipse y la desinformación. _No expliques \"Mercury retrograde\": deja que lo haga un alumno._"
     },
     {
      "type": "questions",
      "items": [
       "Do you know your sign? And your best friend's? Your mother's?",
       "Does your Instagram or TikTok algorithm know you believe in astrology? What does it show you?",
       "Last August, Spain saw a total solar eclipse. Did you notice more astrology content around that date? Why do you think that happened?"
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-1a"
      ]
     },
     {
      "type": "note",
      "md": "Before the eclipse of 12 August, fact-checkers had to debunk viral posts saying **\"Do not go outside during the eclipse\"**. Did you see content like this last summer? Did anyone around you believe it?"
     },
     {
      "type": "useful",
      "blocks": [
       "stars-1b"
      ]
     }
    ]
   },
   {
    "id": "2",
    "title": "Guess My Sign",
    "min": 6,
    "timers": [
     [
      "Mingle",
      4
     ]
    ],
    "blocks": [
     {
      "type": "teacher",
      "md": "**Objetivo:** especular y justificar. **1.** Mingle con alguien cuyo signo no conocen, 4 min cerrados. **2.** Plenario: dos o tres aciertos y fallos, justificados. _Va ANTES de repartir las predicciones; si no, ya saben los signos._"
     },
     {
      "type": "text",
      "md": "Find someone whose sign you do NOT know. Chat for a minute, then take a wild guess at their sign and explain why. You do not need to know anything about astrology: guessing at random is part of the fun. The stereotypes below may help you... or confuse you."
     },
     {
      "type": "carousel",
      "deck": "signs",
      "mode": "trait"
     },
     {
      "type": "useful",
      "blocks": [
       "stars-2"
      ]
     }
    ]
   },
   {
    "id": "3",
    "title": "Your Professional Horoscope 2026-27",
    "min": 12,
    "timers": [
     [
      "Mingle",
      8
     ]
    ],
    "blocks": [
     {
      "type": "teacher",
      "md": "**Objetivo:** comparativos y reacciones; leer en alto. **1.** Un minuto de lectura individual; dos o tres voluntarios leen la suya. **2.** Mingle de 8 min con al menos tres compañeros. **3.** Plenario de 2 min: most optimistic, most realistic, a mano alzada. _Predicciones basadas en horóscopos reales 2026-27: Júpiter en Leo, Saturno y Neptuno en Aries, Urano en Géminis._"
     },
     {
      "type": "text",
      "md": "Choose your sign and read your prediction for this school year, from September to June. Read it carefully. Would anyone like to read theirs aloud?"
     },
     {
      "type": "pick",
      "deck": "signs",
      "label": "Choose your sign"
     },
     {
      "type": "text",
      "md": "Now stand up and compare your card with at least **three** classmates. Whose prediction is the most optimistic? Whose is the most realistic?"
     },
     {
      "type": "useful",
      "blocks": [
       "stars-3"
      ]
     }
    ]
   },
   {
    "id": "4",
    "title": "Element Teams",
    "min": 12,
    "timers": [
     [
      "Prepare",
      5
     ],
     [
      "Team profile",
      1
     ]
    ],
    "blocks": [
     {
      "type": "teacher",
      "md": "**Objetivo:** generalizar; going to y likely to; mini presentación. **1.** Agrupa por elemento por primera vez; un alumno solo se une a otro grupo como consultor externo. **La agrupación se mantiene hasta el final.** **2.** Comparan tarjetas (3 min) y preparan el team profile (2 min). **3.** Presentaciones (4 min) y votación (2 min)."
     },
     {
      "type": "text",
      "md": "Group up by element: fire, earth, air, water. **Stay in these teams for the rest of the session.**"
     },
     {
      "type": "text",
      "md": "Compare your cards: what do your predictions have in common? Promotions, changes, caution, risk? Prepare a 60-second **team profile** to present to the class. Then the class votes: which element will have the best professional year, and which would make the best work team?"
     },
     {
      "type": "note",
      "md": "Start like this: \"As fire signs, this year we're going to..., our biggest risk is..., and the earth signs should hire us because...\""
     },
     {
      "type": "useful",
      "blocks": [
       "stars-4"
      ]
     }
    ]
   },
   {
    "id": "5",
    "title": "Listening: Horoscope Prejudice",
    "min": 15,
    "blocks": [
     {
      "type": "teacher",
      "md": "**1.** Primer visionado sin parar; corrige el gist. **2.** Segundo visionado: contestan de palabra y despliegas. **3.** Matching; haz repetir \"That one stings\" y \"Watch out for this guy\". **4.** Discusión en equipos. **Clave 5.1:** pregunta por Capricorn, Gemini, Aries, Leo y Aquarius; levantan la mano dos Leos, \"known for seeking attention\". _\"Wild in the sack\" solo si preguntan; en GM con menores, salta esa frase o corta en 1:35._"
     },
     {
      "type": "text",
      "md": "You are going to watch a stand-up comedian. He is a Scorpio and he is tired of \"horoscope prejudice\". His revenge: he has written down an evil historical figure for each of the other eleven signs."
     },
     {
      "type": "h",
      "text": "5.1 First viewing"
     },
     {
      "type": "questions",
      "items": [
       "Which signs does he ask about? Capricorn / Gemini / Aries / Leo / Virgo / Aquarius / Pisces",
       "Who puts their hands up when he asks \"Anybody feel like you have a perfect horoscope?\" Why is that funny?",
       "According to the comedian, why do horoscopes feel true?"
      ]
     },
     {
      "type": "video",
      "youtube": "LhvXcjEu8HA"
     },
     {
      "type": "h",
      "text": "5.2 Second viewing: complete the expressions"
     },
     {
      "type": "text",
      "md": "Say your answer out loud, then tap the sentence to check."
     },
     {
      "type": "gaps",
      "items": [
       "They're like, 'You're wild in the [sack].' You're like, 'Am I?' And then you just [grow] into it, you know?",
       "So then when they give me [guff], I can be like, 'Oh, you're a Capricorn? Those are good.'",
       "Gemini. [Right] on. Let me see what we got here.",
       "Ever heard of Jeffrey Dahmer? [Watch] out for this guy.",
       "Kim Jong Un's dad and Logan Paul, ouch. That hurts. That one [stings].",
       "Horoscopes, they're so real, right? There's [something] to it."
      ]
     },
     {
      "type": "h",
      "text": "5.3 Match the expression with its meaning"
     },
     {
      "type": "match",
      "pairs": [
       [
        "to grow into something",
        "Slowly become the thing people say you are."
       ],
       [
        "to give someone guff",
        "Criticise or annoy someone with silly comments."
       ],
       [
        "Right on.",
        "OK, great, go ahead (informal, American)."
       ],
       [
        "Watch out for this guy.",
        "Be careful with this person."
       ],
       [
        "That one stings.",
        "It hurts, but I accept it (said with humour)."
       ],
       [
        "There's something to it.",
        "There is a part of it that is true."
       ]
      ]
     },
     {
      "type": "h",
      "text": "5.4 Discuss"
     },
     {
      "type": "questions",
      "items": [
       "Has anyone ever judged you because of your sign, your age, your town or your studies? How did it feel?"
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-5a"
      ]
     },
     {
      "type": "questions",
      "start": 2,
      "items": [
       "Is horoscope prejudice a joke, or does it work like other stereotypes?"
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-5b"
      ]
     },
     {
      "type": "questions",
      "start": 3,
      "items": [
       "The comedian says horoscopes feel true because people are told what they are from the age of five. Do you agree?"
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-5c"
      ]
     }
    ]
   },
   {
    "id": "6",
    "title": "Stars at Work",
    "min": 18,
    "blocks": [
     {
      "type": "teacher",
      "md": "**1.** Siguen en equipos de elemento. **2.** 6.1: hablan de su familia profesional, leen sus tres signos y deciden qué tareas encajan; puesta en común breve. **3.** 6.2: apuesta Forbes, top 3 y último; revela de abajo arriba. Suelta \"Does this prove anything?\" sin responder: se retoma en el cierre. _Si vas mal de tiempo, sacrifica la 6.2._"
     },
     {
      "type": "h",
      "text": "6.1 Elements at work"
     },
     {
      "type": "text",
      "md": "Stay in your element teams. Tell your group about your professional family or your job: what do you actually do all day? Then read the descriptions of the three signs in your element. Which of your element's qualities match your work? Which tasks or careers would suit your element, according to the stars?"
     },
     {
      "type": "elements",
      "items": [
       {
        "name": "FIRE",
        "signs": "Aries, Leo, Sagittarius",
        "lines": [
         "**Aries:** bold, decisive, allergic to waiting. Starts things.",
         "**Leo:** confident, a natural presenter, motivates the team.",
         "**Sagittarius:** adventurous, brutally honest, hates routine."
        ],
        "stars": "sales, leadership, emergency services, sport, entrepreneurship."
       },
       {
        "name": "EARTH",
        "signs": "Taurus, Virgo, Capricorn",
        "lines": [
         "**Taurus:** reliable, persistent, finishes what they start.",
         "**Virgo:** organised, detail-oriented, spots every mistake.",
         "**Capricorn:** ambitious, disciplined, plays the long game."
        ],
        "stars": "finance, logistics, administration, construction, engineering."
       },
       {
        "name": "AIR",
        "signs": "Gemini, Libra, Aquarius",
        "lines": [
         "**Gemini:** talkative, quick, sees both sides of an argument.",
         "**Libra:** diplomatic, fair, keeps the peace in any team.",
         "**Aquarius:** an original thinker, does things their own way."
        ],
        "stars": "marketing, communication, design, IT, education."
       },
       {
        "name": "WATER",
        "signs": "Cancer, Scorpio, Pisces",
        "lines": [
         "**Cancer:** caring, empathetic, people come first.",
         "**Scorpio:** intense, focused, discreet and loyal.",
         "**Pisces:** creative, intuitive, imagination on tap."
        ],
        "stars": "healthcare, customer care, social work, hospitality, creative arts."
       }
      ]
     },
     {
      "type": "h",
      "text": "6.2 Written in the stars?"
     },
     {
      "type": "text",
      "md": "Time to bet, and there is money involved. A real study analysed the star signs of the **300 richest people** on the Forbes list. Which **three signs** do you think produce the most billionaires? And which sign the fewest?"
     },
     {
      "type": "useful",
      "blocks": [
       "stars-6"
      ]
     },
     {
      "type": "teacher",
      "md": "**The answer:** Forbes 2022 top 300 (Fortune, February 2023). Most billionaires: **Libra** (12%), **Pisces** (11%), **Taurus** (10%). Fewest: **Capricorn**. Does this prove anything?"
     }
    ]
   },
   {
    "id": "7",
    "title": "The Astro-HR Interview",
    "min": 18,
    "timers": [
     [
      "Interview",
      4
     ]
    ],
    "blocks": [
     {
      "type": "teacher",
      "md": "**1.** Explica los roles (2 min): el HR Manager no puede preguntar el signo. **2.** Dos voluntarios leen el diálogo modelo (4 min): what sign was the candidate? How did the manager find out? **3.** Mitad Job Seekers, mitad HR Managers; cruza parejas entre equipos. Entrevistas de 4 min. **4.** Cambio de roles si hay tiempo. **5.** Plenario: qué signo buscaba, si contrata, qué signo cree que es y por qué. **Cierre:** \"If your boss believed in horoscopes, would you tell them your sign?\""
     },
     {
      "type": "text",
      "md": "Half the class are **Job Seekers** and half are **HR Managers**. Two volunteers perform the model interview first. Then everyone works in pairs."
     },
     {
      "type": "text",
      "md": "**Job Seekers:** your card gives you your vocational skills and your star sign. Highlight your real professional skills. Do not say your sign."
     },
     {
      "type": "text",
      "md": "**HR Managers:** your card tells you the job you are hiring for, the sign you secretly want to hire, and why. Company policy forbids you from asking anyone's sign, so ask indirect questions about habits and personality and work it out."
     },
     {
      "type": "text",
      "md": "You have four minutes. At the end, the HR Manager decides whether to hire the candidate, guesses their sign, and explains why."
     },
     {
      "type": "deal",
      "id": "hr",
      "roles": [
       {
        "label": "I'm an HR Manager",
        "deck": "employers",
        "kind": "employer"
       },
       {
        "label": "I'm a Job Seeker",
        "deck": "candidates",
        "kind": "candidate"
       }
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-7"
      ]
     },
     {
      "type": "dialogue",
      "title": "Model interview · Ms Carter (HR) and Carla (candidate)",
      "lines": [
       [
        "MS CARTER",
        "Good morning, Carla. Thanks for coming in. Please, have a seat."
       ],
       [
        "CARLA",
        "Good morning, Ms Carter. Thank you for having me."
       ],
       [
        "MS CARTER",
        "So. You've finished your training in administration and you're looking for your first full-time position. Tell me, how would you describe your approach to deadlines?"
       ],
       [
        "CARLA",
        "I'd say I'm very reliable. If I start something, I finish it. I don't like leaving things half done."
       ],
       [
        "MS CARTER",
        "Interesting. And what do you do when a plan changes at the last minute?"
       ],
       [
        "CARLA",
        "Honestly? I don't love it. I prefer a clear plan. But I adapt, of course. I just need five minutes to reorganise."
       ],
       [
        "MS CARTER",
        "Five minutes. I see. I was wondering if you could tell me about a typical Sunday."
       ],
       [
        "CARLA",
        "A typical Sunday? Well, I get up at the same time, I have the same breakfast I've had for years, and I go for a walk. I like my routine."
       ],
       [
        "MS CARTER",
        "The same breakfast for years. Fascinating. One last question. How do you handle stubborn colleagues?"
       ],
       [
        "CARLA",
        "Stubborn colleagues? I suppose... I understand them. Sometimes people say I'm a bit stubborn myself, but what some people see as stubborn, I view as persistent."
       ],
       [
        "MS CARTER",
        "Persistent. Of course. Carla, I suspect you might be a Taurus."
       ],
       [
        "CARLA",
        "Sorry? I thought company policy said you couldn't ask about star signs."
       ],
       [
        "MS CARTER",
        "I didn't ask. You told me. Reliable, hates last-minute changes, same breakfast for years. Textbook Taurus."
       ],
       [
        "CARLA",
        "And is that... a problem?"
       ],
       [
        "MS CARTER",
        "On the contrary. Earth signs get things done. We'd be happy to offer you the position."
       ],
       [
        "CARLA",
        "That's... thank you! Although I'm not sure that's how hiring is supposed to work."
       ],
       [
        "MS CARTER",
        "It isn't. Don't tell anyone."
       ]
      ],
      "after": "What three clues gave her sign away? Which questions were indirect? Would this be legal in Spain?"
     }
    ]
   }
  ],
  "extras": [
   {
    "id": "hotline",
    "title": "Astro Hotline",
    "min": 10,
    "timers": [
     [
      "One call",
      3
     ]
    ],
    "blocks": [
     {
      "type": "text",
      "md": "It's two in the morning and you are watching **Astro Hotline**. In pairs: A is the consultant, B calls with a work dilemma. Three minutes per call. Then rate the call from 1 (common sense) to 5 (pure magic) and swap roles with a new card."
     },
     {
      "type": "text",
      "md": "Ritual: the caller gives name and sign to start; the consultant ends with \"The stars have spoken\"."
     },
     {
      "type": "deal",
      "id": "hotline",
      "roles": [
       {
        "label": "I'm the consultant",
        "deck": "consultant",
        "kind": "static"
       },
       {
        "label": "I'm the caller",
        "deck": "callers",
        "kind": "simple"
       }
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-hotline"
      ]
     },
     {
      "type": "dialogue",
      "title": "Model call · Madame Stella and Laura",
      "lines": [
       [
        "MADAME STELLA",
        "Welcome to Astro Hotline, caller. Your name and your sign, please."
       ],
       [
        "LAURA",
        "Hi, Madame Stella. It's Laura. I'm a Cancer."
       ],
       [
        "MADAME STELLA",
        "A Cancer. I'm sensing a lot of tension around you, Laura. Tell me."
       ],
       [
        "LAURA",
        "Well, the thing is, I've been working at the same company for two years. I do a lot more than my job description, and I've never had a pay rise. I want to ask for one, but I'm terrified of the conversation."
       ],
       [
        "MADAME STELLA",
        "Of course you are. Cancers hate conflict. Let me consult the chart."
       ],
       [
        "LAURA",
        "OK..."
       ],
       [
        "MADAME STELLA",
        "The stars are very clear, Laura. This month, you must stand your ground. Mercury is not on your side, so do not have this conversation on a Friday afternoon."
       ],
       [
        "LAURA",
        "Not on a Friday. Right. So when?"
       ],
       [
        "MADAME STELLA",
        "Tuesday morning. If I were in your shoes, I'd write down everything you do that is not in your job description. Everything. And I'd take that list into the meeting."
       ],
       [
        "LAURA",
        "A list. That's actually... quite sensible."
       ],
       [
        "MADAME STELLA",
        "The stars are always sensible, Laura. And whatever you do, don't apologise for asking. You'd better ask for a number, not for \"a bit more\"."
       ],
       [
        "LAURA",
        "A number. OK. And what if they say no?"
       ],
       [
        "MADAME STELLA",
        "Then, my dear, get it in writing. Cancers should get everything in writing. Trust me, I've seen this before."
       ],
       [
        "LAURA",
        "Thank you, Madame Stella. I feel a bit better, actually."
       ],
       [
        "MADAME STELLA",
        "The stars have spoken. Next caller!"
       ]
      ],
      "after": "How much of this advice is cosmic and how much is common sense? Rate it 1 to 5."
     }
    ]
   },
   {
    "id": "crisis",
    "title": "Crisis Management Team",
    "min": 10,
    "timers": [
     [
      "Negotiate",
      6
     ],
     [
      "Present",
      1
     ]
    ],
    "blocks": [
     {
      "type": "text",
      "md": "Groups of four, one student per element. Your teacher gives your group a crisis number. Negotiate for six minutes: who does what, and in what order. Each element defends its mindset. Then present your plan in 45 seconds. The class votes for the most realistic plan."
     },
     {
      "type": "choose",
      "label": "My element",
      "deck": "elements"
     },
     {
      "type": "choose",
      "label": "Our crisis",
      "deck": "crisis"
     },
     {
      "type": "note",
      "md": "**Action plan:** three steps. For each step: what we do, who does it (element), why this person. Then: the biggest risk of our plan, and who presents."
     },
     {
      "type": "useful",
      "blocks": [
       "stars-crisis"
      ]
     }
    ]
   },
   {
    "id": "guff",
    "title": "Dealing with Professional Guff",
    "min": 12,
    "blocks": [
     {
      "type": "text",
      "md": "At work, someone will criticise your course, your age or your department. In pairs: A reads the guff card; B reacts calmly and firmly using at least two expressions from the comedian's clip. Thirty seconds, then swap."
     },
     {
      "type": "deal",
      "id": "guff",
      "roles": [
       {
        "label": "Give me some guff",
        "deck": "guff",
        "kind": "simple"
       }
      ]
     },
     {
      "type": "note",
      "md": "**How to react:** \"That one stings, but...\" / \"I've heard that one before.\" / \"Watch out, that's a lazy way of thinking.\" / \"There's something to it, I'll give you that, but...\" / \"Don't give me guff.\" / \"Nobody is born like that, you grow into it.\" / \"Right on, and let me tell you why you're wrong.\" / \"Give me six months and I'll prove you wrong.\""
     }
    ]
   },
   {
    "id": "reframing",
    "title": "Reframing Stereotypes",
    "min": 8,
    "blocks": [
     {
      "type": "text",
      "md": "Every sign has a stereotyped flaw. Before you tap: how would you say it on a CV? Tap a card to see the professional reframe. Then defend your own sign in 30 seconds: \"What some people see as..., I view as..., and this allows me to...\""
     },
     {
      "type": "flip",
      "cards": [
       [
        "Aries",
        "Impatient and bossy. Wants everything done yesterday.",
        "Decisive and proactive. Takes the initiative and gets projects moving fast."
       ],
       [
        "Taurus",
        "Stubborn. Refuses to change their mind.",
        "Persistent and goal-oriented. Never abandons a project halfway through."
       ],
       [
        "Gemini",
        "Talkative and two-faced. Changes opinion depending on who is listening.",
        "An excellent communicator who sees both sides of an argument. A natural networker."
       ],
       [
        "Cancer",
        "Too emotional and moody. Takes everything personally.",
        "Empathetic and people-focused. Excellent at customer care and team morale."
       ],
       [
        "Leo",
        "Attention-seeking. Needs to be the centre of everything.",
        "A confident presenter and natural leader who motivates the team."
       ],
       [
        "Virgo",
        "Fussy and critical. Nothing is ever good enough.",
        "Detail-oriented. Spots the error before the client does. Quality control expert."
       ],
       [
        "Libra",
        "Indecisive. Avoids conflict at all costs.",
        "Diplomatic. Weighs every option and mediates when the team disagrees."
       ],
       [
        "Scorpio",
        "Intense, secretive and vengeful.",
        "Focused, discreet and loyal. Keeps confidential information safe."
       ],
       [
        "Sagittarius",
        "Reckless, tactless and restless. Says whatever comes to mind.",
        "Adventurous and honest. Adapts easily to change, travel and new markets."
       ],
       [
        "Capricorn",
        "Cold workaholic. Only cares about status.",
        "Reliable and disciplined. Delivers on every deadline."
       ],
       [
        "Aquarius",
        "Weird, detached and rebellious. Never follows the rules.",
        "An original thinker. Works independently and brings innovation to the team."
       ],
       [
        "Pisces",
        "Dreamy, unrealistic and disorganised. Lives in another world.",
        "Creative and intuitive. Finds imaginative solutions nobody else sees."
       ]
      ]
     }
    ]
   },
   {
    "id": "debunkers",
    "title": "Eclipse Debunkers",
    "min": 10,
    "blocks": [
     {
      "type": "text",
      "md": "Groups of three. A meeting at a marketing agency: do we launch the product on Tuesday, with Mercury retrograde and an eclipse? You must leave the meeting with a date. Then tell the class: who gave in, and why?"
     },
     {
      "type": "choose",
      "label": "My role",
      "deck": "debunkers"
     }
    ]
   },
   {
    "id": "reading",
    "title": "Reading: Why do we ask the stars?",
    "min": 10,
    "blocks": [
     {
      "type": "text",
      "md": "About **30 per cent** of adults in the United States consult horoscopes, tarot cards or fortune tellers, according to the Pew Research Center. Among women aged 18 to 49, almost **45 per cent** say they believe in astrology. The \"psychic services\" industry made **2.3 billion dollars** in 2024."
     },
     {
      "type": "text",
      "md": "Researchers Chris Scheitle and Katie Corcoran, from West Virginia University, have studied why. Their conclusion: astrology **surges in unsettled times**. When the economy looks uncertain and it is hard to plan long term, people look for **guidance and reassurance** in the stars. But for most users, astrology is not really about predicting the future. It is a tool: part spirituality, part entertainment, and part **language for understanding themselves**."
     },
     {
      "type": "text",
      "md": "_Adapted from The Conversation, \"Astrology's appeal in uncertain times\"._"
     },
     {
      "type": "questions",
      "items": [
       "Why do people consult the stars more when the economy is uncertain?",
       "What are people trying to get: answers, comfort, control?",
       "Do people really believe, or is it a self-soothing mechanism?",
       "Is it harmless fun, or can it become a problem? Would you pay for an astrology app?"
      ]
     },
     {
      "type": "useful",
      "blocks": [
       "stars-reading"
      ]
     }
    ]
   },
   {
    "id": "faces",
    "title": "Famous Faces",
    "min": 10,
    "blocks": [
     {
      "type": "text",
      "md": "Twelve famous professionals, one per sign. In your group, guess the sign and justify it with the stereotypes. Tap the card to check."
     },
     {
      "type": "carousel",
      "deck": "faces",
      "mode": "faces"
     }
    ]
   }
  ],
  "decks": {
   "signs": [
    {
     "g": "♈",
     "n": "Aries",
     "d": "21 March - 19 April",
     "t": "bold",
     "e": "Fire",
     "p": "With Saturn in your sign until 2028, this is the year you build a serious **professional identity**: people stop seeing you as a student and start seeing you as a worker. Short **training courses** in new, non-traditional formats suit you now. Best fields this year: **technology**, media, emergency services. Warning: January to March, projects move slowly. Be patient."
    },
    {
     "g": "♉",
     "n": "Taurus",
     "d": "20 April - 20 May",
     "t": "stubborn",
     "e": "Earth",
     "p": "Projects started between mid-2026 and mid-2027 can become **long-term and profitable**, so build good foundations at your **work placement**. Money may come from an unexpected direction: think **freelance work** or more than one **source of income**. Warning: do not make big money decisions in October, wait until mid-November."
    },
    {
     "g": "♊",
     "n": "Gemini",
     "d": "21 May - 20 June",
     "t": "talkative",
     "e": "Air",
     "p": "Uranus has just entered your sign for seven years: expect a **break from the past** that pushes your life forward. **Certificates and short courses** pay off quickly this year, and many Geminis will start a small **business**. Your best tools: communication and **adaptability**. In June 2027, a chance to study or work **abroad** appears."
    },
    {
     "g": "♋",
     "n": "Cancer",
     "d": "21 June - 22 July",
     "t": "caring",
     "e": "Water",
     "p": "Career winds are shifting: this is a year of **responsibility and recognition**, when bosses and teachers take you seriously. Follow the rules, get organised, and your first **earnings** can grow. One condition: get every **job offer in writing**, and do not promise skills you do not have yet."
    },
    {
     "g": "♌",
     "n": "Leo",
     "d": "23 July - 22 August",
     "t": "confident",
     "e": "Fire",
     "p": "Jupiter enters your sign: your luckiest year in over a decade. Doors open when you **present yourself** in person, so practise your **interview skills**: people are very interested in your voice. Training only works if you take it seriously, no shortcuts. Warning: February and March 2027 feel slow. Your time is coming."
    },
    {
     "g": "♍",
     "n": "Virgo",
     "d": "23 August - 22 September",
     "t": "organised",
     "e": "Earth",
     "p": "A preparation year: the perfect moment for **internships** and quiet **skill-building** behind the scenes. Uranus reaches the top of your chart: a sudden, unconventional **job opening** can appear, and you may discover **talents you never knew you had**. Finish what you start before July 2027: then your expansion year begins."
    },
    {
     "g": "♎",
     "n": "Libra",
     "d": "23 September - 22 October",
     "t": "diplomatic",
     "e": "Air",
     "p": "Your **network** is your engine this year: a **friend** could be the key to reaching your goals. You win recognition for your **ideas, writing and speaking**. Warning: if you feel like changing your **course of study**, think twice: is switching really worth the extra time? Group projects bring the best results."
    },
    {
     "g": "♏",
     "n": "Scorpio",
     "d": "23 October - 21 November",
     "t": "intense",
     "e": "Water",
     "p": "Your **career peak** starts now: people notice you, respect you and value you. A **promotion**, a first contract or a new business is possible. The price: strict daily **routines** and doing every job well, even the small ones. Study everything you can: your mind absorbs like a sponge this term."
    },
    {
     "g": "♐",
     "n": "Sagittarius",
     "d": "22 November - 21 December",
     "t": "adventurous",
     "e": "Fire",
     "p": "The stars point to **qualifications**: higher education, **languages**, travel and new certificates. Teachers and **mentors** approve of you more easily than usual. Use this year to prepare, because your own career peak begins in mid-2027. Warning: a job that falls through in **February** was not the right one anyway."
    },
    {
     "g": "♑",
     "n": "Capricorn",
     "d": "22 December - 19 January",
     "t": "ambitious",
     "e": "Earth",
     "p": "Long-term projects begin: what you start now may still exist in ten years. Your **working hours** may become non-traditional, and a job may be unconventional: look for variety and the chance to **invent**. **Grants or family support** can fund your training. Key skill to polish: how you **communicate your ideas**."
    },
    {
     "g": "♒",
     "n": "Aquarius",
     "d": "20 January - 18 February",
     "t": "original",
     "e": "Air",
     "p": "A year of **alliances**: business partners, **mentors** and advisors appear, and you might even end up **teaching** others. Perfect for developing **skills** that will pay off for years. Put every agreement **in writing**: vagueness gets expensive. The eclipse of 6 February 2027 in your sign opens a new chapter, ready or not."
    },
    {
     "g": "♓",
     "n": "Pisces",
     "d": "19 February - 20 March",
     "t": "dreamy",
     "e": "Water",
     "p": "The clearest message of all twelve: your **natural talents are in high demand**, and if you are **looking for work**, this is an excellent year to find it. Your challenge is money: make a **budget**, watch your spending, and learn to **charge what you are worth** without apologising. Settle on one course of study at last."
    }
   ],
   "employers": [
    {
     "title": "Employer card 1",
     "role": "an emergency maintenance technician",
     "wants": "an Aries",
     "because": "someone bold and decisive who acts fast and does not wait for permission when a machine stops.",
     "qs": [
      "What would you do if a machine stopped and your supervisor was not answering the phone?",
      "How would you describe your approach to waiting for instructions?",
      "Could you give me an example of a time when you had to decide quickly?"
     ],
     "clues": "acts first, hates waiting, likes starting things.",
     "sign": "Aries"
    },
    {
     "title": "Employer card 2",
     "role": "a production line operator for long orders",
     "wants": "a Taurus",
     "because": "someone reliable and persistent who finishes every job they start and is happy with a fixed routine.",
     "qs": [
      "How would you describe your approach to doing the same task all week?",
      "What would you do if a plan changed at the last minute?",
      "Could you give me an example of a job you refused to leave half done?"
     ],
     "clues": "loves routine, dislikes sudden changes, never gives up.",
     "sign": "Taurus"
    },
    {
     "title": "Employer card 3",
     "role": "a technical sales representative",
     "wants": "a Gemini",
     "because": "someone talkative and quick who can see both sides of an argument and talk to any client.",
     "qs": [
      "I was wondering if you could tell me how you start a conversation with a stranger.",
      "What would you do if a client and your manager disagreed?",
      "How would you describe your approach to a very quiet day at work?"
     ],
     "clues": "enjoys talking, changes topic fast, understands both sides.",
     "sign": "Gemini"
    },
    {
     "title": "Employer card 4",
     "role": "an after-sales customer care agent",
     "wants": "a Cancer",
     "because": "someone caring and empathetic who puts people first, even when the customer is angry.",
     "qs": [
      "What would you do if a customer started crying on the phone?",
      "Could you give me an example of a time when you helped a colleague with a problem?",
      "How would you describe your approach to an angry customer?"
     ],
     "clues": "talks about feelings, remembers people, protects the team.",
     "sign": "Cancer"
    },
    {
     "title": "Employer card 5",
     "role": "a shift team leader",
     "wants": "a Leo",
     "because": "someone confident who enjoys speaking in front of a group and knows how to motivate the team.",
     "qs": [
      "I was wondering if you could tell me how you feel about speaking in front of twenty people.",
      "Could you give me an example of a time when you motivated a team?",
      "What would you do if nobody noticed your good work?"
     ],
     "clues": "loves an audience, speaks with confidence, wants to be noticed.",
     "sign": "Leo"
    },
    {
     "title": "Employer card 6",
     "role": "a quality control inspector",
     "wants": "a Virgo",
     "because": "someone organised and detail-oriented who spots every mistake before the product leaves the workshop.",
     "qs": [
      "How would you describe your approach to checking your own work?",
      "What would you do if you found a small mistake that nobody else had noticed?",
      "I was wondering if you could tell me what your desk or toolbox looks like."
     ],
     "clues": "makes lists, notices details, cannot ignore a mistake.",
     "sign": "Virgo"
    },
    {
     "title": "Employer card 7",
     "role": "a purchasing and supplier negotiator",
     "wants": "a Libra",
     "because": "someone diplomatic and fair who keeps the peace when suppliers and managers disagree.",
     "qs": [
      "What would you do if two colleagues were arguing in front of a client?",
      "How would you describe your approach to saying no to a supplier?",
      "Could you give me an example of a time when you found a solution that was fair for everybody?"
     ],
     "clues": "avoids conflict, listens to both sides, looks for balance.",
     "sign": "Libra"
    },
    {
     "title": "Employer card 8",
     "role": "a payroll and confidential data administrator",
     "wants": "a Scorpio",
     "because": "someone focused, discreet and loyal who can keep a secret and never talks about salaries.",
     "qs": [
      "What would you do if a colleague asked you how much the boss earns?",
      "How would you describe your approach to working alone for hours?",
      "Could you give me an example of a time when you kept a secret at work?"
     ],
     "clues": "says little, concentrates deeply, is loyal to the company.",
     "sign": "Scorpio"
    },
    {
     "title": "Employer card 9",
     "role": "a field service technician who visits a different client every day",
     "wants": "a Sagittarius",
     "because": "someone adventurous and honest who hates routine and tells clients the truth about their machines.",
     "qs": [
      "How would you describe your approach to working in a different place every day?",
      "What would you do if a client asked for your honest opinion about an old machine?",
      "I was wondering if you could tell me how you feel about office jobs."
     ],
     "clues": "loves travelling, gets bored quickly, says what they think.",
     "sign": "Sagittarius"
    },
    {
     "title": "Employer card 10",
     "role": "a project planner",
     "wants": "a Capricorn",
     "because": "someone ambitious and disciplined who plays the long game and plans every step of a two-year project.",
     "qs": [
      "I was wondering if you could tell me where you see yourself in five years.",
      "How would you describe your approach to deadlines?",
      "What would you do if a project needed extra hours for six months?"
     ],
     "clues": "has a career plan, works long hours, thinks about the future.",
     "sign": "Capricorn"
    },
    {
     "title": "Employer card 11",
     "role": "a prototype and innovation technician",
     "wants": "an Aquarius",
     "because": "an original thinker who does things their own way and is not afraid of a strange idea.",
     "qs": [
      "Could you give me an example of a time when you solved a problem in an unusual way?",
      "How would you describe your approach to rules that make no sense?",
      "What would you do if everybody in the team agreed and you did not?"
     ],
     "clues": "has unusual ideas, questions the rules, works in their own way.",
     "sign": "Aquarius"
    },
    {
     "title": "Employer card 12",
     "role": "a product and display designer",
     "wants": "a Pisces",
     "because": "someone creative and intuitive with plenty of imagination who can picture the product before it exists.",
     "qs": [
      "I was wondering if you could tell me what you do when you need a new idea.",
      "How would you describe your approach to a blank page?",
      "What would you do if a client could not explain what they wanted?"
     ],
     "clues": "daydreams, trusts intuition, thinks in images.",
     "sign": "Pisces"
    }
   ],
   "candidates": [
    {
     "name": "Marta",
     "training": "Administration (GS)",
     "strengths": "Organised, good with spreadsheets, never misses a deadline",
     "habit": "Corrects other people's spelling mistakes in group chats",
     "sign": "Virgo"
    },
    {
     "name": "Pablo",
     "training": "Sales and Marketing (GS)",
     "strengths": "Confident speaker, good at presentations, motivates others",
     "habit": "Always volunteers to go first",
     "sign": "Leo"
    },
    {
     "name": "Aitana",
     "training": "Nursing assistant (GM)",
     "strengths": "Patient, caring, calm under pressure",
     "habit": "Remembers everybody's birthday",
     "sign": "Cancer"
    },
    {
     "name": "Hugo",
     "training": "Electrical installations (GM)",
     "strengths": "Reliable, precise, finishes every job he starts",
     "habit": "Has eaten the same breakfast for six years",
     "sign": "Taurus"
    },
    {
     "name": "Lucía",
     "training": "IT and web development (GS)",
     "strengths": "Creative, independent, full of new ideas",
     "habit": "Prefers to work alone with headphones on",
     "sign": "Aquarius"
    },
    {
     "name": "Adrián",
     "training": "Hospitality and catering (GM)",
     "strengths": "Fast, energetic, decisive",
     "habit": "Gets bored if nothing happens for five minutes",
     "sign": "Aries"
    },
    {
     "name": "Noa",
     "training": "International trade (GS)",
     "strengths": "Diplomatic, good listener, sees both sides",
     "habit": "Takes twenty minutes to choose a pizza",
     "sign": "Libra"
    },
    {
     "name": "Iker",
     "training": "Mechanics and welding (GM)",
     "strengths": "Focused, discreet, loyal to the team",
     "habit": "Never talks about his private life at work",
     "sign": "Scorpio"
    },
    {
     "name": "Dani",
     "training": "Telecommunications systems (GS)",
     "strengths": "Quick learner, great on the phone, explains technical things in simple words",
     "habit": "Talks to everybody in the lift",
     "sign": "Gemini"
    },
    {
     "name": "Nil",
     "training": "Automotive (GS)",
     "strengths": "Adaptable, honest with clients, loves working on site",
     "habit": "Has never had the same weekend plan twice",
     "sign": "Sagittarius"
    },
    {
     "name": "Irene",
     "training": "Metal construction (GS)",
     "strengths": "Disciplined, plans ahead, takes responsibility",
     "habit": "Keeps a five-year plan on her phone",
     "sign": "Capricorn"
    },
    {
     "name": "Joan",
     "training": "Carpentry and furniture (GM)",
     "strengths": "Creative, intuitive, good eye for design",
     "habit": "Sketches ideas on paper napkins",
     "sign": "Pisces"
    }
   ],
   "callers": [
    {
     "title": "CALLER 1 · The pay rise",
     "sub": "Give your name and your real sign",
     "body": [
      "You have worked at the same company for two years, you do more than your job description and you have never had a pay rise. You want to ask for one but you are terrified of the conversation.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 2 · The offer far away",
     "sub": "Give your name and your real sign",
     "body": [
      "You have been offered a much better job with more money, but it is in another city, 400 km from your family and your partner.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 3 · Going solo",
     "sub": "Give your name and your real sign",
     "body": [
      "You want to leave your stable job and start your own business. Your parents think you are crazy. You have some savings, but not many.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 4 · Unpaid weekends",
     "sub": "Give your name and your real sign",
     "body": [
      "Your boss keeps asking you to work on Saturdays \"as a favour\" and never pays the extra hours. You are afraid that if you say no, they will not renew your contract.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 5 · The credit thief",
     "sub": "Give your name and your real sign",
     "body": [
      "A colleague presented your idea to the manager as if it was theirs, and got the praise. Now they want to \"work together\" on the next project.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 6 · Scared of the promotion",
     "sub": "Give your name and your real sign",
     "body": [
      "They have offered you a promotion to team leader. More money, more responsibility. You are not sure you are ready and you do not want to lose your friends in the team.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 7 · Two job offers",
     "sub": "Give your name and your real sign",
     "body": [
      "You have two job offers: one is boring but secure with a permanent contract, the other is exciting but only a six-month contract. You have to answer by Friday.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    },
    {
     "title": "CALLER 8 · Complete change",
     "sub": "Give your name and your real sign",
     "body": [
      "You have trained for one profession, but you have discovered you hate it. You are thinking of starting again in a completely different sector, at 22.",
      "**How to start:** \"Hi, I'm calling because... The thing is,... Should I go for it?\""
     ]
    }
   ],
   "elements": [
    {
     "title": "FIRE · The bold decision-maker",
     "sub": "",
     "body": [
      "**Signs:** Aries, Leo, Sagittarius",
      "**Your mindset in a crisis:** Acts fast, takes risks, hates waiting. Wants a decision in the first minute.",
      "**Astrology says you are good at:** Sales, leadership, emergency services, sport, entrepreneurship",
      "**Your phrases:**",
      "_\"Let's just do it.\"_",
      "_\"We can't afford to wait.\"_",
      "_\"I'll take responsibility for that.\"_",
      "_\"Stop overthinking, we need action.\"_"
     ]
    },
    {
     "title": "EARTH · The practical planner",
     "sub": "",
     "body": [
      "**Signs:** Taurus, Virgo, Capricorn",
      "**Your mindset in a crisis:** Thinks about budget, time and resources. Checks the details before anyone moves.",
      "**Astrology says you are good at:** Finance, logistics, administration, construction, engineering",
      "**Your phrases:**",
      "_\"Hang on, what does that cost?\"_",
      "_\"Step one has to be...\"_",
      "_\"Who is actually going to do that, and when?\"_",
      "_\"Let's be realistic here.\"_"
     ]
    },
    {
     "title": "AIR · The communicator and negotiator",
     "sub": "",
     "body": [
      "**Signs:** Gemini, Libra, Aquarius",
      "**Your mindset in a crisis:** Talks to the client, the press and the boss. Finds the words and the compromise.",
      "**Astrology says you are good at:** Marketing, communication, design, IT, education",
      "**Your phrases:**",
      "_\"Leave the client to me.\"_",
      "_\"Let's call them before they call us.\"_",
      "_\"How are we going to explain this?\"_",
      "_\"There's a middle ground here.\"_"
     ]
    },
    {
     "title": "WATER · The people person",
     "sub": "",
     "body": [
      "**Signs:** Cancer, Scorpio, Pisces",
      "**Your mindset in a crisis:** Thinks about how customers and staff feel. Protects the team and the reputation.",
      "**Astrology says you are good at:** Healthcare, customer care, social work, hospitality, creative arts",
      "**Your phrases:**",
      "_\"How are the customers going to feel about this?\"_",
      "_\"We need to apologise first.\"_",
      "_\"The team is exhausted, we can't ignore that.\"_",
      "_\"I'll look after the people side.\"_"
     ]
    }
   ],
   "crisis": [
    {
     "title": "CRISIS 1 · Black Friday meltdown",
     "sub": "Sector: Commerce / IT",
     "body": [
      "It is 10 a.m. on Black Friday. Your online shop has just crashed. 3,000 customers have items in their baskets and cannot pay. Social media is already full of angry comments and your biggest sale of the year is disappearing minute by minute.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    },
    {
     "title": "CRISIS 2 · The empty diary",
     "sub": "Sector: Healthcare / Administration",
     "body": [
      "A software update at your health clinic has deleted a whole week of appointments. It is Sunday evening. Tomorrow at 8 a.m., around 40 patients will arrive expecting to be seen, and nobody knows who has an appointment with which doctor.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    },
    {
     "title": "CRISIS 3 · Wedding without a supplier",
     "sub": "Sector: Hospitality / Catering",
     "body": [
      "Your restaurant is catering a wedding for 120 guests tomorrow at 1 p.m. Your main supplier has just phoned: the delivery has been cancelled. No meat, no fish, no fresh vegetables. The couple have paid in full and the family arrives from abroad tonight.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    },
    {
     "title": "CRISIS 4 · Lights out in exam week",
     "sub": "Sector: Electricity / Maintenance",
     "body": [
      "Your company installed the new electrical system in a secondary school. It is January, exam week, and the whole building has lost power, heating and internet. The head teacher is threatening to sue and 600 students are sitting in the cold.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    },
    {
     "title": "CRISIS 5 · The late delivery",
     "sub": "Sector: Manufacturing / Woodwork / Welding",
     "body": [
      "Your workshop promised 200 custom-made pieces (furniture and metal fittings) for a new hotel. The hotel opens in three days. Half of the pieces are not finished and one of your two machines has just broken down.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    },
    {
     "title": "CRISIS 6 · The wrong email",
     "sub": "Sector: Administration / Any office",
     "body": [
      "Somebody in your office has just sent a confidential file with the personal and financial details of 300 clients to the wrong email address. The recipient is a competitor. It was sent 20 minutes ago and the boss does not know yet.",
      "**Your task:** a three-step action plan. Every element gets a job. You have 8 minutes. Then present."
     ]
    }
   ],
   "guff": [
    {
     "title": "GUFF 1",
     "body": [
      "\"Young people today don't want to work.\""
     ]
    },
    {
     "title": "GUFF 2",
     "body": [
      "\"IT people are antisocial and can't talk to clients.\""
     ]
    },
    {
     "title": "GUFF 3",
     "body": [
      "\"Administrative assistants just make coffee and answer the phone.\""
     ]
    },
    {
     "title": "GUFF 4",
     "body": [
      "\"Nurses just follow the doctor's orders.\""
     ]
    },
    {
     "title": "GUFF 5",
     "body": [
      "\"Mechanics always find a \"problem\" you didn't have.\""
     ]
    },
    {
     "title": "GUFF 6",
     "body": [
      "\"Chefs shout all the time and treat people badly.\""
     ]
    },
    {
     "title": "GUFF 7",
     "body": [
      "\"Shop assistants are lazy and only care about their phones.\""
     ]
    },
    {
     "title": "GUFF 8",
     "body": [
      "\"Electricians never come when they say they will.\""
     ]
    }
   ],
   "debunkers": [
    {
     "title": "A · The superstitious colleague",
     "sub": "",
     "body": [
      "You work at a digital marketing agency. The new product launches next Tuesday. You have just found out that Mercury is retrograde that week and there is an eclipse. You genuinely believe it is a terrible idea to launch. Convince the others to delay.",
      "**Your phrases:** \"I'm telling you, every time Mercury is retrograde something breaks.\" / \"Why risk it?\" / \"Just one more week, what's the harm?\""
     ]
    },
    {
     "title": "B · The data-driven manager",
     "sub": "",
     "body": [
      "You have the numbers: Tuesday is the best day to launch, the campaign is ready and the client is waiting. You think astrology is complete rubbish and you are losing patience.",
      "**Your phrases:** \"You can't be serious.\" / \"There's no scientific backing for that.\" / \"We're launching on Tuesday, end of story.\" / \"Show me the data.\""
     ]
    },
    {
     "title": "C · The mediator",
     "sub": "",
     "body": [
      "You want to keep the peace and get a decision everybody can live with. You do not care who is right; you care that the meeting ends with a date.",
      "**Your phrases:** \"Let's look at this logically.\" / \"To keep everyone happy, we could...\" / \"What would make you comfortable with Tuesday?\" / \"Can we find a middle ground?\""
     ]
    }
   ],
   "faces": [
    {
     "title": "Amancio Ortega",
     "sub": "Retail founder (fashion) · Sector: Commerce and business",
     "body": [
      "Started as a shop assistant at 14, delivering shirts by hand.",
      "Opened his first shop in A Coruña in 1975 and built one of the biggest fashion groups in the world.",
      "Almost never gives interviews and hates having his photo taken."
     ],
     "answer": "Aries · born 28 March 1936"
    },
    {
     "title": "Florence Nightingale",
     "sub": "Nurse and healthcare reformer · Sector: Healthcare",
     "body": [
      "Walked the hospital wards at night with a lamp during a war in the 1850s.",
      "Founded the first professional nursing school in London in 1860.",
      "Used charts and statistics to prove that hygiene saves lives."
     ],
     "answer": "Taurus · born 12 May 1820"
    },
    {
     "title": "Jamie Oliver",
     "sub": "Chef and TV presenter · Sector: Hospitality and catering",
     "body": [
      "Became famous with a TV cooking show at 23.",
      "Campaigned for healthier school dinners in the UK.",
      "Is dyslexic and did not read a whole novel until he was 38."
     ],
     "answer": "Gemini · born 27 May 1975"
    },
    {
     "title": "Juan Manuel Fangio",
     "sub": "Mechanic and racing driver · Sector: Automotive and mechanics",
     "body": [
      "Left school young to work in a garage as a mechanic.",
      "Won five Formula One world championships in the 1950s.",
      "Won his last title at 46, an age when most drivers have retired."
     ],
     "answer": "Cancer · born 24 June 1911"
    },
    {
     "title": "Amelia Earhart",
     "sub": "Pilot · Sector: Transport and aviation",
     "body": [
      "Worked as a nurse's aide and a social worker before learning to fly.",
      "First woman to fly solo across the Atlantic, in 1932.",
      "Disappeared over the Pacific in 1937 while trying to fly around the world."
     ],
     "answer": "Leo · born 24 July 1897"
    },
    {
     "title": "Michael Faraday",
     "sub": "Scientist, electricity pioneer · Sector: Electricity and electronics",
     "body": [
      "Son of a blacksmith, left school at 13 to work as a bookbinder's apprentice.",
      "Never went to university.",
      "Discovered the principle behind every electric motor and generator you use today."
     ],
     "answer": "Virgo · born 22 September 1791"
    },
    {
     "title": "Serena Williams",
     "sub": "Professional athlete · Sector: Sport",
     "body": [
      "Won 23 Grand Slam singles titles.",
      "Won a Grand Slam tournament while pregnant.",
      "Now runs an investment fund for start-ups."
     ],
     "answer": "Libra · born 26 September 1981"
    },
    {
     "title": "Christiaan Barnard",
     "sub": "Surgeon · Sector: Healthcare",
     "body": [
      "Performed the world's first human heart transplant, in Cape Town in 1967.",
      "Practised operations on animals for years before the big day.",
      "Had to stop operating because of arthritis in his hands."
     ],
     "answer": "Scorpio · born 8 November 1922"
    },
    {
     "title": "Walt Disney",
     "sub": "Animator and entrepreneur · Sector: Creative industries",
     "body": [
      "His first animation company went bankrupt.",
      "Created a famous mouse in 1928.",
      "Opened a theme park in 1955 that people said would fail."
     ],
     "answer": "Sagittarius · born 5 December 1901"
    },
    {
     "title": "Greta Thunberg",
     "sub": "Climate activist · Sector: Environment and nature",
     "body": [
      "Started a protest alone, outside a parliament, at 15.",
      "Sailed across the Atlantic on a yacht to avoid flying.",
      "Named Person of the Year by a famous magazine at 16."
     ],
     "answer": "Capricorn · born 3 January 2003"
    },
    {
     "title": "Oprah Winfrey",
     "sub": "TV presenter and media owner · Sector: Media and customer-facing roles",
     "body": [
      "Grew up in poverty in the rural United States.",
      "Hosted the same talk show for 25 years.",
      "Became the first Black woman billionaire in 2003."
     ],
     "answer": "Aquarius · born 29 January 1954"
    },
    {
     "title": "Steve Jobs",
     "sub": "Tech founder · Sector: IT and technology",
     "body": [
      "Started his company in his parents' garage at 21.",
      "Was fired from his own company in 1985 and came back in 1997.",
      "Dropped out of university after one semester."
     ],
     "answer": "Pisces · born 24 February 1955"
    }
   ],
   "consultant": {
    "table": [
     [
      "Sign",
      "They are...",
      "This month the stars say..."
     ],
     [
      "Aries",
      "brave but impulsive",
      "Saturn asks you to slow down before you act. Count to ten."
     ],
     [
      "Taurus",
      "loyal but stubborn",
      "Money is on the way, but not if you refuse to change your routine."
     ],
     [
      "Gemini",
      "quick but changeable",
      "Uranus wants a break from the past. A new door opens if you stop talking and choose."
     ],
     [
      "Cancer",
      "caring but hates conflict",
      "This month you must stand your ground. Get everything in writing."
     ],
     [
      "Leo",
      "confident but proud",
      "Jupiter is in your sign: say yes to anything that puts you in front of people."
     ],
     [
      "Virgo",
      "organised but too critical",
      "Finish what you started. A hidden talent appears when you relax."
     ],
     [
      "Libra",
      "diplomatic but indecisive",
      "The stars will not decide for you. Make a list, then choose by Friday."
     ],
     [
      "Scorpio",
      "focused but secretive",
      "Trust one person with your plan. Revenge is not a career strategy."
     ],
     [
      "Sagittarius",
      "adventurous but restless",
      "The far-away option is right for you, but only with a plan B."
     ],
     [
      "Capricorn",
      "ambitious but a workaholic",
      "The promotion is yours if you learn to delegate. Rest is not a weakness."
     ],
     [
      "Aquarius",
      "original but detached",
      "Your idea is good. Now you need to explain it to people who are not you."
     ],
     [
      "Pisces",
      "creative but disorganised",
      "Write things down. Your intuition is right, your calendar is not."
     ]
    ],
    "script": [
     "**Opening:** \"Welcome to Astro Hotline, caller. Your name and your sign, please.\"",
     "**Feeling it:** \"I'm sensing a lot of tension around you.\" / \"The stars are telling me...\" / \"Mercury is not on your side this month.\" / \"Let me consult the chart...\" / \"The energy around your workplace is very...\" / \"Trust me, I've seen this before.\"",
     "**Advice:** \"You'd better...\" / \"If I were in your shoes, I'd...\" / \"It might be worth (doing)...\" / \"Whatever you do, don't...\"",
     "**Closing:** \"The stars have spoken. Next caller!\"",
     "**Props:** scarf or shawl, a \"crystal ball\" (a mug or a glass), a telephone (your hand works)."
    ]
   }
  }
 }
];
