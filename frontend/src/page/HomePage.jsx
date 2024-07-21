import React from "react";
import HomeInterview from "../components/HomeInterview";
import HomeIntro from "../components/HomeIntro";
import HomeCommunity from "../components/HomeCommunity";
import HomeScreen from "../components/HomeScreen";
import HomeHiring from "../components/HomeHiring";
import HomeAbout from "../components/HomeAbout";
import HomeLinks from "../components/HomeLinks";

const HomePage = () => {
	return (
		<>
			<HomeIntro />
			<HomeHiring />
			<HomeCommunity />
			<HomeScreen />
			<HomeInterview />
			<HomeAbout />
			<HomeLinks />
		</>
	);
};

export default HomePage;
