

import { useEffect } from "react";
import assets from "../assets/assets";


const ThemeToggleBtn = ({theme, setTheme}) => {
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('prefers-color-scheme:dark').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    })

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
    <>
    <button>
        {theme === "dark" ? (
            <img onClick={() => setTheme("light")} src={assets.sun_icon} alt="" className='size-8 p-1.5 border border-gray-500 rounded-full'/>
        ) : (
            <img onClick={() => setTheme("dark")} src={assets.moon_icon} alt="" />
        )}
    </button>
    </>
    );
}

export default ThemeToggleBtn;