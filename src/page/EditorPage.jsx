import React from "react";
import Navbar from "../components/Navbar";
import Problem from "../components/Problem";
import CodeEditor from "../components/CodeEditor";

const EditorPage = () => {
  return (
    <div className="h-screen bg-bg-dark-card_shadow_2">
      <Navbar />
      <div className="w-full md:flex">
        <div className="w-full md:w-1/2">
          <Problem />
        </div>
        <div className="w-full md:w-1/2 bg-dark-card_shadow_2 overflow-auto md:h-custom-height" style={{direction : 'rtl'}}>
        <CodeEditor/>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
