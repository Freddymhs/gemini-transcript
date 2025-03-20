import { Youtube } from "lucide-react";
import React from "react";

const CustomHeader = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Youtube className="youtube-icon" />
        <h1>Transcripcion y resumen YT</h1>
      </div>
      <div className="powered-by">Gemini AI</div>
    </header>
  );
};

export { CustomHeader };
