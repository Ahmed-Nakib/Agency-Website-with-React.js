import React from 'react'
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 backdrop-blur-xl font-medium bg-white dark:bg-gray-900 z-50">
      {/*----------------- Logo ---------------------*/}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-32 sm:w-40"
      />

      { /* -----------------  Menu Items -------------------- */ }
      <ul
        className={`text-gray-700 sm:text-sm flex sm:items-center gap-5 transition-all duration-300 
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
        ${sidebarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden dark:text-white"}`}
      >
        {/* -----------------  Close Icon --------------------- */}
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <li onClick={() => setSidebarOpen(false)}><a className="sm:hover:border-b" href="#about">About</a></li>
        <li onClick={() => setSidebarOpen(false)}><a className="sm:hover:border-b" href="#services">Services</a></li>
        <li onClick={() => setSidebarOpen(false)}><a className="sm:hover:border-b" href="#our-work">Our Work</a></li>
        <li onClick={() => setSidebarOpen(false)}><a className="sm:hover:border-b" href="#contact-us">Contact</a></li>
      </ul>

      {/* -----------------  Right Section --------------------- */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      <div>
        {/* -----------------  Mobile Menu Button --------------------- */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/*  -----------------  Connect Button (Desktop only) --------------------- */}
        <a
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
          href="#contact-us"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
