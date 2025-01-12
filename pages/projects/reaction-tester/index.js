import { useState, useEffect } from "react";

export default function ReactionTester() {
  const [lights, setLights] = useState([false, false, false, false]);
  const [activeLight, setActiveLight] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [highScore, setHighScore] = useState(null);
  const [isLightClicked, setIsLightClicked] = useState(true);

  const lightColors = ["bg-[#f97316]", "bg-green-500", "bg-[#4338ca]", "bg-[#be123c]"];


  useEffect(() => {
    const storedHighScore = localStorage.getItem("reaction_high_score");
    if (storedHighScore) setHighScore(Number(storedHighScore));
  }, []);

  const startTest = () => {
    setReactionTime(null);
    setActiveLight(null);
    setLights([false, false, false, false]);
    setIsLightClicked(false);

    const delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
      const randomLight = Math.floor(Math.random() * 4);
      setActiveLight(randomLight);
      setLights((prev) => prev.map((_, idx) => idx === randomLight));
      setStartTime(Date.now());
    }, delay);
  };

  const handleLightClick = (index) => {
    if (index === activeLight) {
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      setReactionTime(timeTaken);
      setIsLightClicked(true);

      if (!highScore || timeTaken < highScore) {
        setHighScore(timeTaken);
        localStorage.setItem("reaction_high_score", timeTaken);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Reaction Tester</h1>
      <div className="flex space-x-4 mb-8">
        {lights.map((isOn, index) => (
          <div
            key={index}
            onClick={() => handleLightClick(index)}
            className={`rounded-full h-20 w-20 cursor-pointer ${isOn ? lightColors[index] : "bg-gray-500"}`}
          ></div>
        ))}
      </div>
      {isLightClicked && (
        <button
          onClick={startTest}
          className="bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center w-[200px] mt-7"
        >
          <div className="text-gray-100 font-psemibold text-lg"> {reactionTime ? "Re-start Test" : "Start Test"}</div>
        </button>
      )}
      {reactionTime && (
        <div className="mt-4 text-lg">
          Your reaction time: <span className="font-bold">{reactionTime}ms</span>
          {reactionTime === highScore && (
            <div className="text-green-500 font-bold">🥇 New High Score!</div>
          )}
        </div>
      )}
    </div>
  );
}
