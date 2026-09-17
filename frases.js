// Useful sentences for CVOPT Anglès Oral
//
// ESTE ES EL UNICO ARCHIVO QUE SE EDITA. Una frase por linea en SENTENCES:
//    en:     la frase (obligatorio)
//    lesson: la leccion. Usa la constante de LESSON TITLES (obligatorio)
//    fn:     funcion comunicativa en gerundio. Debe estar en FUNCTIONS (obligatorio)
//    topics: temas de ESA frase. [] = frase transversal: solo sale en All y por funcion
//    block:  desplegable de Notion donde aparece (opcional).
//            La pantalla de ese desplegable es  .../useful-sentences/?block=stars-2
//    mp3:    normalmente NO hace falta. La app busca sola audio/<frase-en-minusculas-con-guiones>.mp3
//            ("That's so you!" -> audio/thats-so-you.mp3). Usa mp3: solo si el archivo se llama de otra forma.
//            Si no hay mp3, lee la voz inglesa del dispositivo; si el dispositivo no tiene voz inglesa, no suena.
//
// Un tema nuevo o una funcion nueva aparecen solos en los filtros al usarlos aqui.

// LESSON TITLES
const STARS = "Written in the Stars: Your Professional Year";

// Orden de los temas en el filtro de arriba
const TOPICS = ["Horoscopes", "Personality traits", "Social media", "Stereotypes", "Teamwork", "Job interviews"];

// Orden de las funciones en el filtro "Useful for..."
const FUNCTIONS = [
  "Talking about your feed",
  "Talking about signs and people",
  "Talking about fake news",
  "Guessing signs",
  "Reacting to a guess",
  "Comparing predictions",
  "Reacting to a prediction",
  "Generalising",
  "Predicting",
  "Selling your team",
  "Talking about being judged",
  "Talking about jokes and stereotypes",
  "Talking about labels",
  "Betting on a sign",
  "Justifying a bet",
  "Talking about the elements",
  "Talking about money and ambition",
  "Asking indirect questions",
  "Selling your skills",
  "Justifying a guess",
  "Giving a hiring decision",
  "Playing the astrologer",
  "Giving advice",
  "Assigning tasks",
  "Negotiating",
  "Giving your opinion",
];

const SENTENCES = [

  // stars-1a
  { en: "It pops up on my feed all the time.", lesson: STARS, fn: "Talking about your feed", topics: ["Social media"], block: "stars-1a" },
  { en: "My algorithm has got me figured out.", lesson: STARS, fn: "Talking about your feed", topics: ["Social media"], block: "stars-1a" },
  { en: "It's a bit creepy, actually.", lesson: STARS, fn: "Talking about your feed", topics: ["Social media"], block: "stars-1a" },
  { en: "I just scroll past it.", lesson: STARS, fn: "Talking about your feed", topics: ["Social media"], block: "stars-1a" },
  { en: "She's a textbook Virgo.", lesson: STARS, fn: "Talking about signs and people", topics: ["Horoscopes", "Personality traits"], block: "stars-1a" },
  { en: "It's not really my thing.", lesson: STARS, fn: "Talking about signs and people", topics: ["Horoscopes", "Personality traits"], block: "stars-1a" },
  { en: "I take it with a pinch of salt.", lesson: STARS, fn: "Talking about signs and people", topics: ["Horoscopes", "Personality traits"], block: "stars-1a" },
  { en: "We're complete opposites, actually.", lesson: STARS, fn: "Talking about signs and people", topics: ["Horoscopes", "Personality traits"], block: "stars-1a" },

  // stars-1b
  { en: "It spread like wildfire.", lesson: STARS, fn: "Talking about fake news", topics: ["Social media"], block: "stars-1b" },
  { en: "A lot of people fell for it.", lesson: STARS, fn: "Talking about fake news", topics: ["Social media"], block: "stars-1b" },
  { en: "You can't believe everything you read online.", lesson: STARS, fn: "Talking about fake news", topics: ["Social media"], block: "stars-1b" },
  { en: "It was debunked pretty quickly.", lesson: STARS, fn: "Talking about fake news", topics: ["Social media"], block: "stars-1b" },

  // stars-2
  { en: "Let me take a wild guess.", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "I'd say you're a water sign, you seem...", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "You're such a Taurus!", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "I'm just saying one, honestly.", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "I say Leo because it's the only one I know.", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "Total shot in the dark.", lesson: STARS, fn: "Guessing signs", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "That's so you!", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "I'd never have guessed.", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "You don't seem like a typical...", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "Spot on!", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "Not even close.", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },
  { en: "I have no idea how these things work.", lesson: STARS, fn: "Reacting to a guess", topics: ["Horoscopes", "Personality traits"], block: "stars-2" },

  // stars-3
  { en: "Yours looks more optimistic than mine because...", lesson: STARS, fn: "Comparing predictions", topics: ["Horoscopes"], block: "stars-3" },
  { en: "Mine is spot on about...", lesson: STARS, fn: "Comparing predictions", topics: ["Horoscopes"], block: "stars-3" },
  { en: "Mine has nailed it!", lesson: STARS, fn: "Comparing predictions", topics: ["Horoscopes"], block: "stars-3" },
  { en: "Mine got it completely wrong.", lesson: STARS, fn: "Comparing predictions", topics: ["Horoscopes"], block: "stars-3" },
  { en: "Not a single prediction came true.", lesson: STARS, fn: "Comparing predictions", topics: ["Horoscopes"], block: "stars-3" },
  { en: "That sounds just like me.", lesson: STARS, fn: "Reacting to a prediction", topics: ["Horoscopes", "Personality traits"], block: "stars-3" },
  { en: "That sounds nothing like me.", lesson: STARS, fn: "Reacting to a prediction", topics: ["Horoscopes", "Personality traits"], block: "stars-3" },
  { en: "Mine is way too good to be true.", lesson: STARS, fn: "Reacting to a prediction", topics: ["Horoscopes"], block: "stars-3" },
  { en: "Yours is much more down-to-earth.", lesson: STARS, fn: "Reacting to a prediction", topics: ["Horoscopes"], block: "stars-3" },
  { en: "This is pure fantasy, honestly.", lesson: STARS, fn: "Reacting to a prediction", topics: ["Horoscopes"], block: "stars-3" },

  // stars-4
  { en: "All of us are...", lesson: STARS, fn: "Generalising", topics: [], block: "stars-4" },
  { en: "None of us are...", lesson: STARS, fn: "Generalising", topics: [], block: "stars-4" },
  { en: "The main trend in our group is...", lesson: STARS, fn: "Generalising", topics: [], block: "stars-4" },
  { en: "We've noticed that all our cards...", lesson: STARS, fn: "Generalising", topics: [], block: "stars-4" },
  { en: "We're going to...", lesson: STARS, fn: "Predicting", topics: [], block: "stars-4" },
  { en: "We're likely to...", lesson: STARS, fn: "Predicting", topics: [], block: "stars-4" },
  { en: "We'll probably...", lesson: STARS, fn: "Predicting", topics: [], block: "stars-4" },
  { en: "Our biggest risk is...", lesson: STARS, fn: "Predicting", topics: [], block: "stars-4" },
  { en: "We're the safest bet.", lesson: STARS, fn: "Selling your team", topics: ["Teamwork"], block: "stars-4" },
  { en: "We get things done.", lesson: STARS, fn: "Selling your team", topics: ["Teamwork"], block: "stars-4" },
  { en: "We complement each other perfectly.", lesson: STARS, fn: "Selling your team", topics: ["Teamwork"], block: "stars-4" },
  { en: "While the air signs are busy talking, we'll be...", lesson: STARS, fn: "Selling your team", topics: ["Teamwork"], block: "stars-4" },

  // stars-5a
  { en: "They put me in a box.", lesson: STARS, fn: "Talking about being judged", topics: ["Stereotypes"], block: "stars-5a" },
  { en: "It made my blood boil.", lesson: STARS, fn: "Talking about being judged", topics: ["Stereotypes"], block: "stars-5a" },
  { en: "I had to prove them wrong.", lesson: STARS, fn: "Talking about being judged", topics: ["Stereotypes"], block: "stars-5a" },
  { en: "They didn't give me a chance.", lesson: STARS, fn: "Talking about being judged", topics: ["Stereotypes"], block: "stars-5a" },
  { en: "It really gets on my nerves when people assume...", lesson: STARS, fn: "Talking about being judged", topics: ["Stereotypes"], block: "stars-5a" },

  // stars-5b
  { en: "It's funny until it isn't.", lesson: STARS, fn: "Talking about jokes and stereotypes", topics: ["Stereotypes"], block: "stars-5b" },
  { en: "It's a slippery slope.", lesson: STARS, fn: "Talking about jokes and stereotypes", topics: ["Stereotypes"], block: "stars-5b" },
  { en: "It comes from the same place.", lesson: STARS, fn: "Talking about jokes and stereotypes", topics: ["Stereotypes"], block: "stars-5b" },
  { en: "It's a lazy way of thinking.", lesson: STARS, fn: "Talking about jokes and stereotypes", topics: ["Stereotypes"], block: "stars-5b" },
  { en: "You can't compare the two.", lesson: STARS, fn: "Talking about jokes and stereotypes", topics: ["Stereotypes"], block: "stars-5b" },

  // stars-5c
  { en: "You end up acting the part.", lesson: STARS, fn: "Talking about labels", topics: ["Stereotypes"], block: "stars-5c" },
  { en: "We adapt to fit the expectations.", lesson: STARS, fn: "Talking about labels", topics: ["Stereotypes"], block: "stars-5c" },
  { en: "It's hard to break the pattern.", lesson: STARS, fn: "Talking about labels", topics: ["Stereotypes"], block: "stars-5c" },
  { en: "It's a classic case of self-fulfilling prophecy.", lesson: STARS, fn: "Talking about labels", topics: ["Stereotypes"], block: "stars-5c" },

  // stars-6
  { en: "I'd put my money on...", lesson: STARS, fn: "Betting on a sign", topics: ["Horoscopes"], block: "stars-6" },
  { en: "She strikes me as a...", lesson: STARS, fn: "Betting on a sign", topics: ["Horoscopes"], block: "stars-6" },
  { en: "It's a no-brainer: he's a...", lesson: STARS, fn: "Betting on a sign", topics: ["Horoscopes"], block: "stars-6" },
  { en: "I wouldn't be surprised if she was a...", lesson: STARS, fn: "Betting on a sign", topics: ["Horoscopes"], block: "stars-6" },
  { en: "Capricorns are ambitious, so...", lesson: STARS, fn: "Justifying a bet", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "You don't build a fortune like that unless you're...", lesson: STARS, fn: "Justifying a bet", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "Earth signs play the long game, so...", lesson: STARS, fn: "Justifying a bet", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "Fire signs would burn out in an office.", lesson: STARS, fn: "Talking about the elements", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "Earth signs get things done.", lesson: STARS, fn: "Talking about the elements", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "Air signs talk their way into any job.", lesson: STARS, fn: "Talking about the elements", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "Water signs are the ones you call when you're upset.", lesson: STARS, fn: "Talking about the elements", topics: ["Horoscopes", "Personality traits"], block: "stars-6" },
  { en: "They've got the drive.", lesson: STARS, fn: "Talking about money and ambition", topics: ["Personality traits"], block: "stars-6" },
  { en: "They're money-minded.", lesson: STARS, fn: "Talking about money and ambition", topics: ["Personality traits"], block: "stars-6" },
  { en: "They're too busy dreaming.", lesson: STARS, fn: "Talking about money and ambition", topics: ["Personality traits"], block: "stars-6" },
  { en: "They don't care about material wealth.", lesson: STARS, fn: "Talking about money and ambition", topics: ["Personality traits"], block: "stars-6" },

  // stars-7
  { en: "I was wondering if you could tell me...", lesson: STARS, fn: "Asking indirect questions", topics: ["Job interviews"], block: "stars-7" },
  { en: "How would you describe your approach to...?", lesson: STARS, fn: "Asking indirect questions", topics: ["Job interviews"], block: "stars-7" },
  { en: "Could you give me an example of a time when...?", lesson: STARS, fn: "Asking indirect questions", topics: ["Job interviews"], block: "stars-7" },
  { en: "What would you do if...?", lesson: STARS, fn: "Asking indirect questions", topics: ["Job interviews"], block: "stars-7" },
  { en: "I'm reliable under pressure.", lesson: STARS, fn: "Selling your skills", topics: ["Job interviews", "Personality traits"], block: "stars-7" },
  { en: "I'm very detail-oriented.", lesson: STARS, fn: "Selling your skills", topics: ["Job interviews", "Personality traits"], block: "stars-7" },
  { en: "I'd say I'm a team player.", lesson: STARS, fn: "Selling your skills", topics: ["Job interviews", "Personality traits"], block: "stars-7" },
  { en: "I adapt quickly to new systems.", lesson: STARS, fn: "Selling your skills", topics: ["Job interviews", "Personality traits"], block: "stars-7" },
  { en: "I like to finish what I start.", lesson: STARS, fn: "Selling your skills", topics: ["Job interviews", "Personality traits"], block: "stars-7" },
  { en: "I suspect you might be a... because...", lesson: STARS, fn: "Justifying a guess", topics: ["Horoscopes"], block: "stars-7" },
  { en: "The way you talked about... gave it away.", lesson: STARS, fn: "Justifying a guess", topics: ["Horoscopes"], block: "stars-7" },
  { en: "That is a very Virgo answer.", lesson: STARS, fn: "Justifying a guess", topics: ["Horoscopes"], block: "stars-7" },
  { en: "You said you hate routine, so I'd say...", lesson: STARS, fn: "Justifying a guess", topics: ["Horoscopes"], block: "stars-7" },
  { en: "You'd be a great fit for this role.", lesson: STARS, fn: "Giving a hiring decision", topics: ["Job interviews"], block: "stars-7" },
  { en: "We'll be in touch.", lesson: STARS, fn: "Giving a hiring decision", topics: ["Job interviews"], block: "stars-7" },
  { en: "To be honest, I have some reservations.", lesson: STARS, fn: "Giving a hiring decision", topics: ["Job interviews"], block: "stars-7" },
  { en: "What sold me was...", lesson: STARS, fn: "Giving a hiring decision", topics: ["Job interviews"], block: "stars-7" },

  // stars-hotline
  { en: "I'm sensing a lot of tension around you.", lesson: STARS, fn: "Playing the astrologer", topics: ["Horoscopes"], block: "stars-hotline" },
  { en: "The stars are telling me...", lesson: STARS, fn: "Playing the astrologer", topics: ["Horoscopes"], block: "stars-hotline" },
  { en: "Mercury is not on your side this month.", lesson: STARS, fn: "Playing the astrologer", topics: ["Horoscopes"], block: "stars-hotline" },
  { en: "You'd better...", lesson: STARS, fn: "Giving advice", topics: [], block: "stars-hotline" },
  { en: "If I were in your shoes, I'd...", lesson: STARS, fn: "Giving advice", topics: [], block: "stars-hotline" },
  { en: "It might be worth...", lesson: STARS, fn: "Giving advice", topics: [], block: "stars-hotline" },
  { en: "Whatever you do, don't...", lesson: STARS, fn: "Giving advice", topics: [], block: "stars-hotline" },

  // stars-crisis
  { en: "I'm best suited to handle...", lesson: STARS, fn: "Assigning tasks", topics: ["Teamwork"], block: "stars-crisis" },
  { en: "Why don't you take care of...?", lesson: STARS, fn: "Assigning tasks", topics: ["Teamwork"], block: "stars-crisis" },
  { en: "That plays to your strengths.", lesson: STARS, fn: "Assigning tasks", topics: ["Teamwork"], block: "stars-crisis" },
  { en: "If we do that, we might risk...", lesson: STARS, fn: "Negotiating", topics: ["Teamwork"], block: "stars-crisis" },
  { en: "As long as you cover..., I'll...", lesson: STARS, fn: "Negotiating", topics: ["Teamwork"], block: "stars-crisis" },
  { en: "Hang on, what about the customers?", lesson: STARS, fn: "Negotiating", topics: ["Teamwork"], block: "stars-crisis" },

  // stars-reading
  { en: "I reckon...", lesson: STARS, fn: "Giving your opinion", topics: [], block: "stars-reading" },
  { en: "If you ask me...", lesson: STARS, fn: "Giving your opinion", topics: [], block: "stars-reading" },
  { en: "To be fair...", lesson: STARS, fn: "Giving your opinion", topics: [], block: "stars-reading" },
  { en: "I'm not so sure, because...", lesson: STARS, fn: "Giving your opinion", topics: [], block: "stars-reading" },
];
