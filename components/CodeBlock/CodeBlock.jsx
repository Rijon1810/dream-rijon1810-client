import React from "react";

const CodeBlock = ({ children }) => {
  return (
    <pre className="static flex w-full justify-center whitespace-normal rounded-xl border border-gray-300 bg-gray-200 p-4 dark:bg-zinc-800/30 lg:w-auto">
      {children}
    </pre>
  );
};

export default CodeBlock;
