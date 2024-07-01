import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
const App = () => {
  const [objective, setObjective] =
    useState(`Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.
    <br/>
To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.`);
  const [task, setTask] = useState(`Some Task`);
  const [inputFormat, setInputFormat] =
    useState(`<p>Every line of input will contain a String followed by an integer.
        Each String will have a maximum of 10 alphabetic characters, and each integer will be in the inclusive range from 0 to 999.</p>`);
  const [outputFormat, setOutputFormat] = useState(` <p>
        In each line of output there should be two columns:
        <br />
        The first column contains the String and is left justified using exactly 15 characters.
        <br />
        The second column contains the integer, expressed in exactly 3 digits; if the original input has less than three digits, you must pad your output's leading digits with zeroes.
      </p>`);
  const [sampleOutput, setSampleOutput] = useState(
    `================================\n<i>java           100\ncpp            065\npython         050</i>`
  );

  const [sampleInputOutput, setSampleInputOutput] = useState([
    {
      input: "java 100\ncpp 065\npython 050",
      output: "java           100\ncpp            065\npython         050",
    },
  ]);
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-dark-card_shadow_1 transition-all">
      <ThemeToggle />
      {/* <h1 className="text-2xl font-bold mb-4">Java's System.out.printf Function</h1>
      <p className="mb-4">
        Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.
      </p>
      <p className="mb-4">
        To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.
      </p> */}
      <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
        Objective
      </h6>
      <div
        className="mb-4 leading-relaxed text-light-color_text_dark_faded dark:text-dark-color_text_dark_faded "
        dangerouslySetInnerHTML={{ __html: objective }}
      ></div>

      <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
        Task
      </h6>
      <div
        className="mb-4 leading-relaxed text-light-color_text_dark_faded dark:text-dark-color_text_dark_faded"
        dangerouslySetInnerHTML={{ __html: task }}
      ></div>

      <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
        Input Format
      </h6>
      <div
        className="mb-4 leading-relaxed text-light-color_text_dark_faded dark:text-dark-color_text_dark_faded"
        dangerouslySetInnerHTML={{ __html: inputFormat }}
      ></div>
      <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
        Output Format
      </h6>
      <div
        className="mb-4 leading-relaxed text-light-color_text_dark_faded dark:text-dark-color_text_dark_faded"
        dangerouslySetInnerHTML={{ __html: outputFormat }}
      ></div>
      {/* <h6 className="text-xl font-semibold mb-2">Sample Input</h6>
      <pre className="bg-gray-200 p-2 mb-4">
        java 100
        <br />
        cpp 65
        <br />
        python 50
      </pre>
      <h6 className="text-xl font-semibold mb-2">Sample Output</h6>
      <pre className="bg-gray-200 p-2">
        <code dangerouslySetInnerHTML={{ __html: sampleOutput }}>

        </code>
      </pre> */}
      {sampleInputOutput.map((item, index) => (
        <React.Fragment key={index}>
          <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
            Sample Input {sampleInputOutput.length > 1 ? index + 1 : ""}
          </h6>
          <pre className="mb-4 p-5 bg-light-color_shade_light text-light-color_text_medium_dark dark:bg-dark-color_shade_light dark:text-dark-color_text_dark">
            <code dangerouslySetInnerHTML={{ __html: item.input }}></code>
          </pre>
          <h6 className="text-xl font-semibold mb-2 text-black dark:text-dark-color_text_dark">
            Sample Output {sampleInputOutput.length > 1 ? index + 1 : ""}
          </h6>
          <pre className="mb-4 p-5 bg-light-color_shade_light text-light-color_text_medium_dark dark:bg-dark-color_shade_light dark:text-dark-color_text_dark">
            <code dangerouslySetInnerHTML={{ __html: item.output }}></code>
          </pre>
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
