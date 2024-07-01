import React from "react";
import Navbar from "../components/Navbar";
import Problem from "../components/Problem";

const EditorPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full md:w-1/2">
          <Problem />
        </div>
        <div className="w-full md:w-1/2">
          {/* code editor  */}
        </div>
      </div>
    </>
  );
};

export default EditorPage;
