import FilterQuestion from "./components/FilterQuestion";
import CodeEditor from './components/CodeEditor'
import QuestionPreviewCard from "./components/QuestionPreviewCard";
import Form from "./components/Form";
import EditorPage from "./page/EditorPage";
import AccessAccountPage from "./page/AccessAccountPage";
import AccessNavbar from "./components/AccessAcountNavbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <FilterQuestion />   */}
      {/* <CodeEditor/> */}
      {/* <QuestionPreviewCard title={'Playing with Characters'} difficulty={'easy'} skill={'c'} maxScore={5} successRate={8.4}/> */}
      <EditorPage/>
      {/* <AccessAccountPage/> */}
      {/* <AccessNavbar/> */}
      {/* <Form/> */}
    </>
  );
};

export default App;
