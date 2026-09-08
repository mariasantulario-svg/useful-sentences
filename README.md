# Useful sentences - CVOPT Angles Oral

App de una sola pagina para que el alumnado pulse una frase y la oiga antes de decirla.

## Archivos
- index.html: la app. No hace falta tocarlo.
- frases.js: las frases. Es el unico archivo que se edita a lo largo del curso.
- audio/: mp3 opcionales.

## Anadir una frase
Abre frases.js en GitHub (icono del lapiz), anade una linea dentro de SENTENCES y guarda con Commit changes:

{ en: "Could you repeat that, please?", unit: 1, session: 2, fn: "Asking a colleague" },

Si la funcion es nueva, anadela tambien a la lista FUNCTIONS para que salga en el filtro. Si la unidad es nueva, anade su nombre en UNITS.

## Anadir un mp3 a una frase
1. Sube el archivo a la carpeta audio/ (Add file, Upload files).
2. En la linea de la frase anade mp3: "nombre.mp3".

Sin mp3, la frase la lee la voz del navegador (ingles britanico si esta disponible).
