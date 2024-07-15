import React from "react";
import FilterQuestion from "../components/FilterQuestion";
import QuestionPreviewCard from "../components/QuestionPreviewCard";
import Navbar from "../components/Navbar";
export default function FilterQuestionPage() {
	return (
		<div>
			{/* <Navbar /> */}
			<div className="flex justify-center dark:bg-black bg-gray-200 py-10 lg:pr-24 md:pr-20">
				<div className="flex flex-grow flex-col gap-4">
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
					<QuestionPreviewCard
						title={"Hello World in C"}
						difficulty={"easy"}
						maxScore={5}
						successRate={"82.71%"}
						skill={"Basic"}
					/>
				</div>
				<div>
					<FilterQuestion />
				</div>
			</div>
		</div>
	);
}
