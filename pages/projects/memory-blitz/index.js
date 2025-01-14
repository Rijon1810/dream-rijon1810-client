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
  const [difficulty, setDifficulty] = useState(2);
  const [windowWidth, setWindowWidth] = useState(0);

  const highlightDuration = 1000;
  const userTimeLimit = 3000;

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

  const startGame = () => {
    setMessage("");
    setUserSelection([]);
    setIsUserTurn(false);
    setTimeLeft(userTimeLimit / 1000);

    let initialGrid = generateGrid(gridSize.rows, gridSize.cols);
    let { updatedGrid, highlightedBoxes } = highlightBoxes(
      initialGrid,
      difficulty
    );

    setGrid(updatedGrid);
    setHighlightedBoxes(highlightedBoxes);

    setTimeout(() => {
      setGrid(resetHighlights(updatedGrid));
      setIsUserTurn(true);

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
    }, highlightDuration);
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

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Memory Blitz
      </h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold text-gray-700 mb-2">
            Rows x Cols:
          </label>
          <select
            value={`${gridSize.rows}x${gridSize.cols}`}
            onChange={(e) => {
              const [rows, cols] = e.target.value.split("x").map(Number);
              setGridSize({ rows, cols });
              if (difficulty > rows * cols) {
                setDifficulty(rows * cols);
              }
            }}
            className="w-[200px] border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-gray-500"
          >
            {Array.from({ length: maxColumns }, (_, i) => (
              <option key={i} value={`${i + 1}x${i + 1}`}>
                {i + 1} x {i + 1}
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
            onChange={(e) =>
              setDifficulty(
                Math.min(
                  parseInt(e.target.value) || 2,
                  gridSize.rows * gridSize.cols
                )
              )
            }
            className="w-[200px] border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-gray-500"
          >
            {Array.from({ length: gridSize.rows * gridSize.cols }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={startGame}
        className="bg-orange-500 text-white-300 px-6 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300"
      >
        Start Game
      </button>
      {isUserTurn && (
        <div className="text-lg font-semibold text-green-500 mt-4">
          Time Left: <span className="text-orange-500">{timeLeft}s</span>
        </div>
      )}
      {message && (
        <div
          className={`mt-6 px-8 py-4 rounded-lg shadow-lg text-2xl font-semibold text-center ${
            message === "You Win!"
              ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white animate-pulse"
              : "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white animate-bounce"
          }`}
        >
          {message === "You Win!"
            ? "🎉 Congratulations, You Win! 🎉"
            : "💔 Oh no, You Lose! Try Again! 💔"}
        </div>
      )}
      <div
        className="grid gap-2 mt-6 max-w-xl"
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
              className={`flex justify-center items-center rounded cursor-pointer border ${
                box.isHighlighted
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
    </div>
  );
};

export default MemoryGrid;
