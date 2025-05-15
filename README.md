# YouTube Transcript

![MIT License](https://img.shields.io/badge/license-MIT-green)

Aplicación web desarrollada con React que permite extraer la transcripción de un video de YouTube y generar un resumen automático usando inteligencia artificial.

---

## ✨ Características principales

- ✅ **Transcripción automática** de videos de YouTube usando `youtube-transcript`.
- 🔗 **Consulta optimizada** a una base de datos en Supabase a través de **Supadata.js**, evitando transcripciones repetidas.
- 🧠 **Resumen generado con IA** usando un modelo Gemini (vía función `getGeminiAnswer`).
- 📷 Vista previa en miniatura del video (thumbnail).
- ✅ Validación automática del enlace de YouTube.
- 🧪 Interfaz React con estilo moderno (`SCSS`) y compatibilidad Markdown (`react-markdown`).

---

## ⚙️ Cómo funciona

1. El usuario ingresa una URL de YouTube.
2. La app valida la URL.
3. Busca si ya existe una transcripción guardada en Supabase usando `getTranscriptionSupa()` (archivo `supadata.js`).
4. Si existe, la utiliza directamente. Si no, la obtiene vía `youtube-transcript`.
5. Envía la transcripción al modelo de Gemini para generar un resumen (`helpers/gemini.js`).
6. Muestra el resumen en pantalla usando `react-markdown`.

---

## 🚀 Scripts disponibles

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Compilar versión producción
npm run build

# Servir la app compilada
npm run serve
