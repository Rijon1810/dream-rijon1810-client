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
    console.log(userSelection, correctBoxes);
    return (
      correctBoxes.every((box) => userSelection.includes(box)) &&
      userSelection.length === correctBoxes.length
    );
  };

  const startGame = () => {
    setMessage("");
    setUserSelection([]);
    setIsUserTurn(false);

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

      setTimeout(() => {
        // Use `userSelectionRef.current` to get the latest value
        const result = validateSelection(
          userSelectionRef.current,
          highlightedBoxes
        );
        setMessage(result ? "You Win!" : "You Lose!");
        setIsUserTurn(false);
      }, userTimeLimit);
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
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Blitz</h1>
      <div className="mb-4">
        <label className="mr-2">Rows:</label>
        <input
          type="number"
          value={gridSize.rows}
          onChange={(e) =>
            setGridSize({ ...gridSize, rows: parseInt(e.target.value) || 1 })
          }
          className="border p-1"
          min="1"
        />
        <label className="mx-2">Cols:</label>
        <input
          type="number"
          value={gridSize.cols}
          onChange={(e) =>
            setGridSize({ ...gridSize, cols: parseInt(e.target.value) || 1 })
          }
          className="border p-1"
          min="1"
        />
      </div>
      <button
        onClick={startGame}
        className="flex justify-center items-center bg-orange-500 text-white-300 w-32 h-8 text-center rounded mb-4"
      >
        Start Game
      </button>
      <div
        className="grid gap-2"
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
              className={`w-12 h-12 border ${
                box.isHighlighted
                  ? "border-orange-500"
                  : userSelection.includes(box.id)
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
            />
          ))
        )}
      </div>
      {message && <p className="mt-4 text-xl font-bold">{message}</p>}
      {message === "You Win!" && <Confetti width={width} height={height} recycle={false} />}
    </div>
  );
};

export default MemoryGrid;
