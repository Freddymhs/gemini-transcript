export const transcriptionPrompt = `
Transcribe este  video .
Incluye:
Texto exacto (con muletillas).
Marcas de tiempo cada 30s (ej: [01:30]).
[Habla 1], [Habla 2] si hay varios participantes.

 `;

export const resumePrompt = `
Analiza cuidadosamente el siguiente contenido y elabora un resumen **estructurado, claro y completo**. Organiza la información en formato de lista con títulos y subtítulos si es necesario. 

🎯 **Objetivo:** Extraer y destacar los aprendizajes clave, conceptos importantes, pasos, definiciones, ejemplos prácticos y buenas prácticas mencionadas en el video.

✅ **Requisitos del resumen:**
- Claridad y concisión, sin omitir lo esencial.
- Usa emojis solo cuando ayuden a la comprensión o memorización del contenido.
- Si hay listas, explicaciones técnicas o metodologías, preséntalas de forma ordenada y comprensible.
- Omite relleno o comentarios irrelevantes del hablante.

📌 Este resumen debe facilitar el estudio y la aplicación práctica de los conocimientos presentados en el video.
`;

export const sampleUrl =
  "https://www.youtube.com/watch?v=mVXrdvXplj0&ab_channel=GoogleCloudTech";

export const localHost8080 = "http://localhost:8080/";
