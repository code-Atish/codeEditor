import FilterQuestion from "./components/FilterQuestion";
import CodeEditor from './components/CodeEditor'
import QuestionPreviewCard from "./components/QuestionPreviewCard";
const App = () => {
  return (
    <>
      {/* <FilterQuestion />   */}
      {/* <CodeEditor/> */}
      <QuestionPreviewCard difficulty={'easy'} skill={'c'} maxScore={5} successRate={8.4}/>
    </>
  );
};

export default App;
