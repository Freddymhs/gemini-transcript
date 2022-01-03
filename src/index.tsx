import { render } from "react-dom";
import React, { useState } from "react";
import "./global.scss";
import getGeminiAnswer from "./helpers/gemini";
import { resumePrompt } from "./helpers/constants";
import Markdown from "react-markdown";
import { BookOpen, Loader2 } from "lucide-react";
import { getVideoId } from "./helpers/validate";
import { CustomHeader } from "./organism/CustomHeader.tsx";
import getTranscriptionSupa from "./helpers/supadata.js";

const App = () => {
  const actualUrl = window.location.href;

  const [res, setRes] = useState(undefined);
  const [step, setStep] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  const getUrl = url || actualUrl;

  const isValidUrl = url.includes("youtube.com/watch?v=");

  const processVideo = async () => {
    if (!isValidUrl) setInvalidUrl(true);
    if (!isValidUrl) return;

    setIsLoading(true);
    setInvalidUrl(false);

    try {
      setStep("transcribing");
      const transcription = await getTranscriptionSupa(getUrl);
      const transcriptionToString = JSON.stringify(transcription);

      setStep("summarizing");
      const resume = await getGeminiAnswer(
        `${resumePrompt}: ${transcriptionToString}`
      );
      setStep("complete");
      setRes(resume);
    } catch (error) {
      setStep("idle");
      console.error("Error al procesar el video:", error);
      setRes(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const Thumbnail = () => {
    const videoId = getVideoId(getUrl);
    const thumbnailUrl =
      videoId && `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return (
      thumbnailUrl && (
        <div className="video-preview">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt="Video thumbnail"
            className="thumbnail"
          />
          <a
            href={actualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video-url"
          >
            <div className="video-overlay">
              <BookOpen className="book-icon"></BookOpen>
            </div>
          </a>
        </div>
      )
    );
  };

  const Content = () => {
    if (invalidUrl)
      return <div>url invalida , debe ser una url de un video de youtube.</div>;
    return (
      <div>
        <button
          onClick={() => {
            processVideo();
          }}
          disabled={isLoading}
        >
          Resumir
        </button>
        <div className="result-container">
          {isLoading && !invalidUrl && (
            <div className="loading-state">
              <Loader2 className="spinner" />
              <p>
                {step === "transcribing"
                  ? "Transcribiendo video..."
                  : "Generando resumen..."}
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: step === "transcribing" ? "50%" : "90%" }}
                ></div>
              </div>
            </div>
          )}

          <Markdown>{res}</Markdown>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <main className="app-content">
        <div>
          Ingrese Enlace a video:
          <input
            type="text"
            value={url}
            placeholder="https://www.youtube.com/watch?v=u7GVmFboMnk&ab_channel=T13"
            onChange={(e) => {
              setInvalidUrl(false);
              setUrl(e.target.value);
            }}
          />
        </div>
        <Thumbnail />
        <Content />
        <CustomHeader />
      </main>
    </div>
  );
};

render(<App />, document.getElementById("root"));
