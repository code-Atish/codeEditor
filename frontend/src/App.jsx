import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./page/NotFoundPage";
import FilterQuestion from "./components/FilterQuestion";
import CodeEditor from "./components/CodeEditor";
import QuestionPreviewCard from "./components/QuestionPreviewCard";
import Form from "./components/Form";
import EditorPage from "./page/EditorPage";
import FilterQuestionPage from "./page/FilterQuestionPage";
import HomePage from "./page/HomePage";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<FilterQuestionPage />} />
				{/* <Route path="/about" element={<AboutPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactPage />} /> */}
				<Route path="/home" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
