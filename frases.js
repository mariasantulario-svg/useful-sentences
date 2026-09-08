// Useful sentences for CVOPT Anglès Oral
// Una frase por línea. Campos:
//   en:   la frase en inglés (obligatorio)
//   unit: número de unidad (obligatorio)
//   session: número de sesión dentro de la unidad (obligatorio)
//   fn:   función comunicativa (obligatorio, usa siempre las mismas etiquetas)
//   mp3:  nombre del archivo dentro de la carpeta audio/ (opcional)
//         Si existe, se reproduce el mp3. Si no, la lee la voz del navegador.
//
// Funciones en uso (añade nuevas aquí para que aparezcan en el filtro):
const FUNCTIONS = [
  "Giving your opinion",
  "Comparing predictions",
  "Guessing signs"
];

const UNITS = {
  1: "Written in the Stars: Your Professional Year",
};

const SENTENCES = [
  // Giving your opinion
  { en: "I reckon...", unit: 1, session: 1, fn: "Giving your opinion" },
  { en: "If you ask me...", unit: 1, session: 1, fn: "Giving your opinion" },
  { en: "To be fair...", unit: 1, session: 1, fn: "Giving your opinion" },
  { en: "I'm not so sure, because...", unit: 1, session: 1, fn: "Giving your opinion" },
  // Comparing predictions
  { en: "Yours looks more optimistic than mine because...", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "Mine is spot on about...", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "Mine has nailed it!", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "Mine got it completely wrong.", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "Not a single prediction came true.", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "That sounds just like me.", unit: 1, session: 1, fn: "Comparing predictions" },
  { en: "That sounds nothing like me.", unit: 1, session: 1, fn: "Comparing predictions" },
  // Guessing signs
  { en: "I knew you were a Leo because...", unit: 1, session: 1, fn: "Guessing signs" },
  { en: "You're such a Taurus!", unit: 1, session: 1, fn: "Guessing signs" },
  { en: "I'd say you're a water sign, you seem...", unit: 1, session: 1, fn: "Guessing signs" },
];
