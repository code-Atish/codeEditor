import { useState } from "react";
import { executeCode } from "../api/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      alert("An error occurred: " + (error.message || "Unable to run code"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full text-white ">
     <div className="flex items-center">
     <p className="mb-2 text-xl  font-bold mr-4 ">Output:</p>
      <button
        className={`px-4 py-2 mb-4 border rounded bg-green-600 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>
     </div>
      <div
        className={`h-full p-2 ${isError ? 'text-red-400 border-red-500' : 'border-white'} border rounded`}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
