import React from "react";

const FilterQuestion = () => {
	return (
		<div className="pl-5 text-black bg-white dark:bg-black inline-block dark:text-white min-w-96">
			<div className="border-b p-5 pl-0">
				<span className="text-xl text-dark-filterTitle uppercase">Status</span>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="solved"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="solved" className="text-xl">
						Solved
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="unsolved"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="unsolved" className="text-xl">
						Unsolved
					</label>
				</div>
			</div>

			<div className="border-b p-5 pl-0">
				<span className="text-xl text-dark-filterTitle uppercase">Skills</span>
				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="c-basic"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="c-basic" className="text-xl">
						C(Basic)
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="c-intermediate"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="c-intermediate" className="text-xl capitalize">
						C(Intermediate)
					</label>
				</div>
			</div>

			<div className="border-b p-5 pl-0">
				<span className="text-xl text-dark-filterTitle uppercase">
					Difficulty
				</span>
				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="easy"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="easy" className="text-xl">
						Easy
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="medium"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="medium" className="text-xl">
						Medium
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="hard"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="hard" className="text-xl">
						Hard
					</label>
				</div>
			</div>

			<div className="border-b p-5 pl-0">
				<span className="text-xl text-dark-filterTitle uppercase">
					SubDomains
				</span>
				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="intro"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>
					<label htmlFor="intro" className="text-xl">
						Introduction
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="condition-loops"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>{" "}
					<label htmlFor="condition-loops" className="text-xl">
						Conditionals and Loops
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="arr-str"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>
					<label htmlFor="arr-str" className="text-xl">
						Arrays and Stirng
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="funtion"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>
					<label htmlFor="funtion" className="text-xl">
						Function
					</label>
				</div>

				<div className="my-2 flex items-center gap-2">
					<input
						type="checkbox"
						id="struct-enum"
						className="mt-1 form-checkbox bg-gray-900 border-none focus:ring-0"
					/>
					<label htmlFor="struct-enum" className="text-xl">
						Struct and Enum
					</label>
				</div>
			</div>
		</div>
	);
};

export default FilterQuestion;
