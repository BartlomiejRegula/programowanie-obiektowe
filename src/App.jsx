import { useState } from "react";
import ButtonA from "./components/ButtonA.jsx";
import ButtonB from "./components/ButtonB.jsx";
import "./App.css"; // Import stylów

export default function App() {
  const [buttonASize, setButtonASize] = useState(16); // Stan dla rozmiaru przycisku A
  const [showImage, setShowImage] = useState(false); // Stan do kontrolowania widoczności obrazu

  const increaseButtonASize = () => {
    setButtonASize((prevSize) => prevSize +20); // Powiększa rozmiar przycisku A
  };

  const toggleImage = () => {
    setShowImage(true); // Po kliknięciu w ButtonA pokaż obraz
  };

  return (
    <div className="app-container">
      <h1>Czy chcesz być walentynką Bartka?</h1>
      <ButtonA fontSize={buttonASize} onClick={toggleImage} />
      <ButtonB onClick={increaseButtonASize} />

      {/* Jeśli `showImage` jest true, wyświetl obraz */}
      {showImage && (
        <div className="overlay">
          <img src="/primosz.png" alt="Obraz" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}
