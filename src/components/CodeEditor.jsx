import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants/constants";
import Output from "./Output";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
    if (editorRef.current) {
      editorRef.current.setValue(CODE_SNIPPETS[selectedLanguage]);
      monaco.editor.setModelLanguage(editorRef.current.getModel(), selectedLanguage);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen p-4 space-y-4">
      <LanguageSelector language={language} onSelect={onSelect} />
      <div className="w-full flex-1">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="50vh"
          theme="vs-dark"
          language={language}
          value={value}
          onMount={onMount}
          onChange={(newValue) => setValue(newValue)}
          className="h-full w-full"
        />
      </div>
      <div className="w-full h-full flex-1">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
