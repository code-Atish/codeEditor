import React from "react";
import LogoStrip from "./LogoStrip";

export default function HomeIntro() {
	return (
		<div className="min-h-screen overflow-hidden px-4 relative py-11 flex flex-col items-center justify-center ">
			<h1 className="font-bold text-3xl mb-4 lg:font-black lg:text-6xl text-center max-w-screen-sm mx-auto">
				Skills speak louder than words
			</h1>
			<p className="text-lg text-center max-w-xl mb-8">
				We help companies develop the strongest tech teams around. We help
				candidates sharpen their tech skills and pursue job opportunities.
			</p>
			<div className="flex w-full justify-center gap-4 mb-8 flex-wrap">
				<button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 sm:w-[155px] w-full ">
					Sign up
				</button>
				<button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 sm:w-[155px] w-full ">
					Request demo
				</button>
			</div>
			<p className="text-sm mb-8">
				Over 40% of developers worldwide and 3,000 companies use Upto Skills
			</p>
			<LogoStrip />
			<div className="absolute w-px h-px block shadow-[0_0_1000px_350px_#6E6BFE] z-[-1] translate-x-[-80%] translate-y-[-80%] opacity-20 rounded-[50%] right-0 top-full"></div>
			<div className="absolute w-px h-px block shadow-[0_0_1000px_350px_#1BA94C] z-[-1] translate-x-[80%] translate-y-[-80%] opacity-20 rounded-[50%] left-0 top-full"></div>
		</div>
	);
}
