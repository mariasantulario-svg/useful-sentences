// Useful sentences for CVOPT Anglès Oral
//
// 1) LESSONS: cada lección con sus temas. Los temas alimentan el filtro de arriba.
//    Cuando una lección nueva trae un tema nuevo, aparece solo.
// 2) SENTENCES: una frase por línea.
//    en:     la frase (obligatorio)
//    lesson: título exacto de la lección, tal como está en LESSONS (obligatorio)
//    fn:     función comunicativa (obligatorio, usa siempre las mismas etiquetas)
//    mp3:    archivo dentro de audio/ (opcional). Sin mp3, la lee la voz del navegador.

const LESSONS = {
  "Written in the Stars: Your Professional Year": ["Horoscopes", "Personality traits"],
};

const FUNCTIONS = [
  "Giving your opinion",
  "Comparing predictions",
  "Guessing signs",
];

const SENTENCES = [
  // Written in the Stars
  { en: "I reckon...", lesson: "Written in the Stars: Your Professional Year", fn: "Giving your opinion" },
  { en: "If you ask me...", lesson: "Written in the Stars: Your Professional Year", fn: "Giving your opinion" },
  { en: "To be fair...", lesson: "Written in the Stars: Your Professional Year", fn: "Giving your opinion" },
  { en: "I'm not so sure, because...", lesson: "Written in the Stars: Your Professional Year", fn: "Giving your opinion" },
  { en: "Yours looks more optimistic than mine because...", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "Mine is spot on about...", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "Mine has nailed it!", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "Mine got it completely wrong.", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "Not a single prediction came true.", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "That sounds just like me.", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "That sounds nothing like me.", lesson: "Written in the Stars: Your Professional Year", fn: "Comparing predictions" },
  { en: "I knew you were a Leo because...", lesson: "Written in the Stars: Your Professional Year", fn: "Guessing signs" },
  { en: "You're such a Taurus!", lesson: "Written in the Stars: Your Professional Year", fn: "Guessing signs" },
  { en: "I'd say you're a water sign, you seem...", lesson: "Written in the Stars: Your Professional Year", fn: "Guessing signs" },
];
