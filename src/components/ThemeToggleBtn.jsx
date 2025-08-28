// Import your assets at the top of the file
// import sun_icon from '../assets/sun_icon.png';
// import moon_icon from '../assets/moon_icon.png';

import assets from "../assets/assets";

// const assets = {
//     sun_icon,
//     moon_icon
// };

const ThemeToggleBtn = ({theme, setTheme}) => {
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