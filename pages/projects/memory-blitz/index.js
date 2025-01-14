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


  const highlightDuration = 1000;
  const userTimeLimit = 3000;
  const numBoxesToHighlight = 1;

  const userSelectionRef = useRef(userSelection);

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
    }
    else if (message === "You Lose!") {
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
      numBoxesToHighlight
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
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Memory Blitz</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div>
          <label className="text-black-600 mr-2">Rows:</label>
          <input
            type="number"
            value={gridSize.rows}
            onChange={(e) =>
              setGridSize({ ...gridSize, rows: parseInt(e.target.value) || 1 })
            }
            className="border p-2 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            min="1"
          />
        </div>
        <div>
          <label className="text-black-600 mr-2">Cols:</label>
          <input
            type="number"
            value={gridSize.cols}
            onChange={(e) =>
              setGridSize({ ...gridSize, cols: parseInt(e.target.value) || 1 })
            }
            className="border p-2 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            min="1"
          />
        </div>
      </div>
      <button
        onClick={startGame}
        className="bg-orange-500 text-white px-6 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300"
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
          className={`mt-6 px-8 py-4 rounded-lg shadow-lg text-2xl font-semibold ${message === "You Win!"
              ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white animate-pulse"
              : "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white animate-bounce"
            }`}
        >
          {message === "You Win!" ? "🎉 Congratulations, You Win! 🎉" : "💔 Oh no, You Lose! Try Again! 💔"}
        </div>
      )}
      <div
        className="grid gap-2 mt-6"
        style={{
          gridTemplateRows: `repeat(${gridSize.rows}, 50px)`,
          gridTemplateColumns: `repeat(${gridSize.cols}, 50px)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((box, colIndex) => (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.id)}
              className={`w-12 h-12 flex justify-center items-center rounded cursor-pointer ${box.isHighlighted
                ? "bg-orange-500 shadow-orange-md"
                : userSelection.includes(box.id)
                  ? "bg-green-500"
                  : "bg-gray-100 border border-gray-400"
                } hover:shadow-lg`}
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
