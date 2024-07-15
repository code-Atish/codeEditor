import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../Contexts/ThemeContext";
import ThemeBtn from "../components/ThemeToggle";

const MainLayout = () => {

	const [themeMode, setthemeMode] = useState('light')

	const lightMode=()=>{
		setthemeMode('light');
	}


	const darkMode = () =>{
		setthemeMode('dark')
	}

	useEffect(() => {
		document.querySelector('html').classList.remove('light','dark')
		document.querySelector('html').classList.add(themeMode)
	}, [themeMode])
	
	return (
		<>
		<ThemeProvider value={{themeMode,lightMode,darkMode}}>
			{/* <ThemeBtn/> */}
			<Navbar />
			<Outlet />
			<Footer />
		</ThemeProvider>
		</>
	);
};

export default MainLayout;
