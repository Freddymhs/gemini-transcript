export const transcriptionPrompt = `
Transcribe este  video .
Incluye:

Texto exacto (con muletillas).

Marcas de tiempo cada 30s (ej: [01:30]).

[Habla 1], [Habla 2] si hay varios participantes.

Sonidos relevantes entre corchetes (ej: [aplausos]).
 `;

export const resumePrompt = `
*"Resume el siguiente texto en un formato de lista clara y concisa, destacando los puntos clave más relevantes del contenido. Usa emojis para hacerlo más visual y fácil de leer.
`;

export const sampleUrl =
  "https://www.youtube.com/watch?v=mVXrdvXplj0&ab_channel=GoogleCloudTech";

export const localHost8080 = "http://localhost:8080/";
