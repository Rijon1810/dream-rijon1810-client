import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getResult = (squares) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  if (squares.every((square) => square)) {
    return { winner: "Draw", line: [] };
  }
  return null;
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Draw: 0 });

  const result = getResult(squares);

  const handleClick = (index) => {
    if (squares[index] || result) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const nextResult = getResult(nextSquares);
    if (nextResult) {
      setScores((prev) => ({ ...prev, [nextResult.winner]: prev[nextResult.winner] + 1 }));
    }
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const resetAll = () => {
    resetBoard();
    setScores({ X: 0, O: 0, Draw: 0 });
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen overflow-hidden p-4 py-10"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a0b3d 0%, #0a0420 55%, #050212 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#ff2fb833 1px, transparent 1px), linear-gradient(90deg, #ff2fb833 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <h1
        className="relative text-4xl sm:text-5xl font-extrabold tracking-wide mb-2 text-[#f4f0ff]"
        style={{ textShadow: "0 0 8px #b06bff, 0 0 22px #b06bff, 0 0 44px #6c2bd9" }}
      >
        Tic Tac Toe
      </h1>

      <div className="relative flex gap-6 text-sm sm:text-base font-semibold mb-6 text-[#cfc8f5]">
        <span style={{ textShadow: "0 0 8px #3fd4ff" }}>X: {scores.X}</span>
        <span style={{ textShadow: "0 0 8px #b06bff" }}>Draw: {scores.Draw}</span>
        <span style={{ textShadow: "0 0 8px #ff3d71" }}>O: {scores.O}</span>
      </div>

      <div className="relative h-8 mb-4">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.p
              key="result"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xl sm:text-2xl font-bold text-center"
              style={{
                color: result.winner === "X" ? "#3fd4ff" : result.winner === "O" ? "#ff3d71" : "#f4f0ff",
                textShadow:
                  result.winner === "X"
                    ? "0 0 10px #3fd4ff"
                    : result.winner === "O"
                    ? "0 0 10px #ff3d71"
                    : "0 0 10px #b06bff",
              }}
            >
              {result.winner === "Draw" ? "It's a Draw!" : `Player ${result.winner} Wins!`}
            </motion.p>
          ) : (
            <motion.p
              key="turn"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xl sm:text-2xl font-bold text-center"
              style={{
                color: xIsNext ? "#3fd4ff" : "#ff3d71",
                textShadow: xIsNext ? "0 0 10px #3fd4ff" : "0 0 10px #ff3d71",
              }}
            >
              Turn: {xIsNext ? "X" : "O"}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div
        className="relative grid grid-cols-3 grid-rows-3 gap-[3px] p-[3px] rounded-xl"
        style={{
          background: "linear-gradient(135deg, #ff2fb8, #6c2bd9, #3fd4ff)",
          boxShadow: "0 0 25px #6c2bd955, 0 0 60px #ff2fb833",
        }}
      >
        {squares.map((value, index) => {
          const isWinningCell = result?.line.includes(index);
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!value || !!result}
              className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-lg select-none"
              style={{
                background: "#0a0420",
                cursor: value || result ? "default" : "pointer",
                boxShadow: isWinningCell ? "inset 0 0 25px #b06bffaa" : "none",
              }}
            >
              <AnimatePresence>
                {value && (
                  <motion.span
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`text-4xl sm:text-6xl font-black ${isWinningCell ? "animate-pulse" : ""}`}
                    style={{
                      color: value === "X" ? "#3fd4ff" : "#ff3d71",
                      textShadow:
                        value === "X"
                          ? "0 0 10px #3fd4ff, 0 0 24px #3fd4ff"
                          : "0 0 10px #ff3d71, 0 0 24px #ff3d71",
                    }}
                  >
                    {value}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      <div className="relative flex gap-4 mt-8">
        <button
          onClick={resetBoard}
          className="px-6 py-2 rounded-full font-semibold text-[#f4f0ff] border-2 transition-transform hover:scale-105"
          style={{ borderColor: "#b06bff", boxShadow: "0 0 12px #b06bff88" }}
        >
          New Round
        </button>
        <button
          onClick={resetAll}
          className="px-6 py-2 rounded-full font-semibold text-[#f4f0ff] border-2 transition-transform hover:scale-105"
          style={{ borderColor: "#ff3d71", boxShadow: "0 0 12px #ff3d7188" }}
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
