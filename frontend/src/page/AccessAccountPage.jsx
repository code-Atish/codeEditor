import React from "react";
import AccessNavbar from "../components/AccessAcountNavbar";

const AccessAccountPage = () => {
	return (
		<div className="h-screen m-auto relative" style={{ maxWidth: "95%" }}>
			<div className="absolute w-full">
				<AccessNavbar />
			</div>
			{/* <nav className="p-5 w-full bg-slate-400 absolute">Navbar</nav> */}
			<div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap h-full pt-16">
				<div className="bg-gradient-to-tr from-green-200 via-white to-green-200 px-4 sm:px-10 md:px-20 lg:px-40 h-full flex flex-col items-center justify-center flex-grow box-border">
					<span className="bg-green-700 font-bold px-5 rounded text-white text-sm">
						Business
					</span>
					<h3 className="text-2xl sm:text-3xl md:text-4xl mt-1 text-center">
						For <span className="text-green-500">Companies</span>
					</h3>
					<p className="text-center text-base sm:text-lg text-black mt-5 max-w-md">
						We are the market-leading technical interview platform to identify
						and hire developers with the right skills
					</p>
					<button className="py-2 px-10 bg-green-700 rounded text-white font-bold my-5">
						Login
					</button>
					<p>Don't have an account?</p>
					<span className="text-center">
						<b>Contact sales</b> or <b>Get Free Trial</b>
					</span>
				</div>

				<div className="px-4 sm:px-10 md:px-20 lg:px-40 h-full flex flex-col items-center justify-center flex-grow box-border">
					{/* <span className="bg-green-700 font-bold px-5 rounded text-white text-sm">Business</span> */}
					<h3 className="text-2xl sm:text-3xl md:text-4xl mt-1 text-center">
						For <span className="text-green-500">Developers</span>
					</h3>
					<p className="text-center text-base sm:text-lg text-black mt-5 max-w-md">
						Join over 21 million developers. Practice coding skills, prepare for
						interviews, and get hired.
					</p>
					<button className="py-2 px-10 border border-black rounded text-black font-bold my-5">
						Login
					</button>
					<p className="text-center">Don't have an account?</p>
					<span className="text-center">
						<b>Sign Up</b>
					</span>
				</div>
			</div>
		</div>
	);
};

export default AccessAccountPage;
