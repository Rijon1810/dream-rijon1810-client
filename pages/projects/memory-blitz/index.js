import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const MemoryGrid = () => {
  const { width, height } = useWindowSize();
  const [gridSize, setGridSize] = useState({ rows: 4, cols: 4 });
  const [grid, setGrid] = useState([]);
  const [highlightedBoxes, setHighlightedBoxes] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [windowWidth, setWindowWidth] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);


  const userSelectionRef = useRef(userSelection);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const maxColumns = windowWidth < 640 ? 6 : 10;

  useEffect(() => {
    userSelectionRef.current = userSelection;
  }, [userSelection]);

  const generateGrid = (rows, cols) => {
    let newGrid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ id: `${i}-${j}`, isHighlighted: false });
      }
      newGrid.push(row);
    }
    return newGrid;
  };

  useEffect(() => {
    if (message === "You Win!") {
      const audio = new Audio("/sounds/win.mp3");
      audio.play();
    } else if (message === "You Lose!") {
      const audio = new Audio("/sounds/fail.mp3");
      audio.play();
    }
  }, [message]);

  const highlightBoxes = (grid, numBoxes) => {
    let highlighted = [];
    while (highlighted.length < numBoxes) {
      const randomRow = Math.floor(Math.random() * grid.length);
      const randomCol = Math.floor(Math.random() * grid[0].length);
      const boxId = `${randomRow}-${randomCol}`;

      if (!highlighted.includes(boxId)) {
        highlighted.push(boxId);
        grid[randomRow][randomCol].isHighlighted = true;
      }
    }
    return { updatedGrid: grid, highlightedBoxes: highlighted };
  };

  const resetHighlights = (grid) => {
    return grid.map((row) =>
      row.map((box) => {
        box.isHighlighted = false;
        return box;
      })
    );
  };

  const validateSelection = (userSelection, correctBoxes) => {
    return (
      correctBoxes.every((box) => userSelection.includes(box)) &&
      userSelection.length === correctBoxes.length
    );
  };

  const getHighlightDuration = (difficulty, totalBoxes) => {
    let duration;

    // Base highlight duration
    const baseDuration = 1000; // 1 second

    if (difficulty === "easy") {
      duration = baseDuration + 500; // Add buffer for easy
    } else if (difficulty === "medium") {
      duration = baseDuration; // Standard duration for medium
    } else if (difficulty === "hard") {
      duration = baseDuration - 200; // Reduced time for hard
    }

    // Optionally, adjust duration based on the total number of boxes
    if (totalBoxes > 20) {
      duration += 200; // Add extra time for larger grids
    }

    // Ensure the duration is within reasonable limits (min 500ms, max 2000ms)
    if (duration < 500) duration = 500;
    if (duration > 2000) duration = 2000;

    return duration;
  };

  const getNumberOfBoxesToRemember = (totalBoxes, difficulty) => {
    let boxesToRemember;
    if (difficulty === "easy") {
      boxesToRemember = Math.floor(totalBoxes * 0.2); // 20% of the total boxes
    } else if (difficulty === "medium") {
      boxesToRemember = Math.floor(totalBoxes * 0.4); // 40% of the total boxes
    } else if (difficulty === "hard") {
      boxesToRemember = Math.floor(totalBoxes * 0.6); // 60% of the total boxes
    }

    return boxesToRemember;
  };

  const getTimeLimitForChoosingBoxes = (difficulty, boxesToRemember) => {
    let timeLimit;

    // Base time per box in seconds
    const baseTimePerBox = 1;

    if (difficulty === "easy") {
      timeLimit = boxesToRemember * baseTimePerBox + 3; // Add buffer time for easy
    } else if (difficulty === "medium") {
      timeLimit = boxesToRemember * baseTimePerBox; // Standard time for medium
    } else if (difficulty === "hard") {
      timeLimit = boxesToRemember * 0.8; // Reduced time for hard
    }

    // Ensure time is within reasonable limits (min 3 seconds, max 20 seconds)
    if (timeLimit < 3) timeLimit = 3;
    if (timeLimit > 20) timeLimit = 20;

    return timeLimit;
  };

  const startGame = (e) => {
    e.preventDefault();
    setMessage("");
    setUserSelection([]);
    setIsUserTurn(false);
    setIsHighlighting(true);

    const numberOfBoxes = gridSize.rows * gridSize.cols;

    const userHighlightDuration = getHighlightDuration(
      difficulty,
      numberOfBoxes
    );

    const boxesToRemember = getNumberOfBoxesToRemember(
      numberOfBoxes,
      difficulty
    );

    const userTimeLimit = getTimeLimitForChoosingBoxes(
      difficulty,
      boxesToRemember
    );

    setTimeLeft(userTimeLimit);

    let initialGrid = generateGrid(gridSize.rows, gridSize.cols);
    let { updatedGrid, highlightedBoxes } = highlightBoxes(
      initialGrid,
      boxesToRemember
    );

    setGrid(updatedGrid);
    setHighlightedBoxes(highlightedBoxes);

    setTimeout(() => {
      setGrid(resetHighlights(updatedGrid));
      setIsUserTurn(true);
      setIsHighlighting(false);

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            const result = validateSelection(
              userSelectionRef.current,
              highlightedBoxes
            );
            setMessage(result ? "You Win!" : "You Lose!");
            setIsUserTurn(false);
          }
          return prev - 1;
        });
      }, 1000);
    }, userHighlightDuration);
  };

  const handleBoxClick = (id) => {
    if (!isUserTurn) return;

    setUserSelection((prev) => {
      if (prev.includes(id)) {
        return prev.filter((box) => box !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    setGrid(generateGrid(gridSize.rows, gridSize.cols));
  }, [gridSize]);

  const resetGame = () => {
    setGridSize({ rows: 4, cols: 4 });
    setGrid([]);
    setHighlightedBoxes([]);
    setUserSelection([]);
    setIsUserTurn(false);
    setMessage("");
    setTimeLeft(0);
    setDifficulty("easy");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-500 my-6 text-center">
        Memory Blitz
      </h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold text-gray-700 mb-2">
            Rows x Cols:
          </label>
          <select
            value={`${gridSize.rows}x${gridSize.cols}`}
            onChange={(e) => {
              const [rows, cols] = e.target.value.split("x").map(Number);
              setGridSize({ rows, cols });
            }}
            className="w-[200px] border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-gray-500"
          >
            {Array.from({ length: maxColumns - 1 }, (_, i) => (
              <option key={i} value={`${i + 3}x${i + 3}`}>
                {i + 3} x {i + 3}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold text-gray-700 mb-2">
            Set Difficulty:
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-[200px] border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-gray-500"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      {message && (
        <div
          className={`my-6  px-8 pb-4 rounded-lg shadow-lg text-2xl font-semibold text-center ${message === "You Win!"
              ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white animate-pulse"
              : "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white animate-bounce"
            }`}
        >
          {message === "You Win!"
            ? "🎉 Congratulations, You Win! 🎉"
            : "💔 Oh no, You Lose! Try Again! 💔"}
        </div>
      )}
      {isUserTurn && (
        <div className="text-lg font-semibold text-green-500 mb-3">
          Time Left:{" "}
          <span className="text-orange-500">{timeLeft.toFixed(1)}s</span>
        </div>
      )}
      {isHighlighting && (
        <div className="text-md text-center font-bold text-orange-500 mb-3 animate-pulse">
          Highlighting boxes...  <br/> Get ready to memorize!
        </div>
      )}

      <div
        className="grid gap-2 max-w-xl"
        style={{
          gridTemplateRows: `repeat(${gridSize.rows}, minmax(40px, 1fr))`,
          gridTemplateColumns: `repeat(${gridSize.cols}, minmax(40px, 1fr))`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((box, colIndex) => (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.id)}
              className={`flex justify-center items-center rounded cursor-pointer border ${box.isHighlighted
                  ? "bg-orange-500 shadow-orange-md border-gray-100"
                  : userSelection.includes(box.id)
                    ? "bg-green-500 border-gray-100"
                    : "bg-gray-100 border-gray-400"
                } hover:shadow-lg`}
              style={{ maxWidth: 40, maxHeight: 40 }}
            />
          ))
        )}
      </div>
      {message === "You Win!" && (
        <Confetti width={width} height={height} recycle={false} />
      )}
      {!message && !isUserTurn && !isHighlighting && (
        <button
          onClick={(e) => startGame(e)}
          className={`mt-6 bg-green-500 text-white-300 px-6 py-2 rounded shadow-lg transition duration-300`}
        >
          Start Game
        </button>
      )}

      {message && (
        <button
          onClick={resetGame}
          className="mt-6 bg-orange-500 text-white-500 px-6 py-2 rounded shadow-lg transition duration-300"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default MemoryGrid;
