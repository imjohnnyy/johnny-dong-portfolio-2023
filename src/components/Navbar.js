import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'


const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md";

  const [isExpandNavbar, setIsExpandNavbar] = useState(false);
  
  const handleNav = () => {
    setIsExpandNavbar(!isExpandNavbar);
  }

  return (
    <nav className={`${navbarBackground} fixed top-0 left-0 w-full`} id={isExpandNavbar ? "open" : "close"}>
      {/* Outer-most Div */}
      <div className={`${flexBetween} m-auto`}>
        <h1 className={"ml-8 font-roboto font-bold text-xl cursor-pointer text-gray"} >Johnny.dev</h1>

            {/* RIGHT SIDE OF NAVBAR */}
            <div className={"hidden md:flex items-center justify-between font-roboto font-medium text-lg text-gray pr-10"}>
              <a href="#home" className={"hover:text-sky-500 py-4 px-4"}>Home</a>
              <a href="#experience" className={"hover:text-sky-500 py-4 px-4"} to="/experience">Experience</a>
              <a href="#about" className={"hover:text-sky-500 py-4 px-4"} to="/about">About</a>
              <a href="#projects" className={"hover:text-sky-500 py-4 px-4"} to="/projects">Projects</a>
              <a href="#contact" className={"hover:text-sky-500 py-4 px-4"} to="/contact">Contact</a>
            </div>

            {/* Hamburger Icon and navigation option for smaller devices */}
            <div className="block px-4 py-3 mx-2 md:hidden hover:bg-gray-200" onClick={handleNav}>
              <MenuIcon style={{fontSize: 35}} />
              <ul className={isExpandNavbar ? 'fixed left-0 top-0 w-[100%] h-full bg-white ease-in-out duration-500 flex flex-col items-center justify-center text-2xl text-gray font-semibold' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className={"flex ml-auto mr-12 mb-20 mt-[-120px]"}><CloseIcon style={{fontSize: 35}} /></div>
                <li className={"py-5"}><a href="home" className={"hover:text-sky-500"}>Home</a></li>
                <li className={"py-5"}><a href="#about" className={"hover:text-sky-500"}>About</a></li>
                <li className={"py-5"}><a href="#experience" className={"hover:text-sky-500"}>Experience</a></li>
                <li className={"py-5"}><a href="#projects" className={"hover:text-sky-500"}>Projects</a></li>
                <li className={"py-5"}><a href="#contact" className={"hover:text-sky-500"}>Contact</a></li>
              </ul>
            </div>


              
        </div>
    </nav>
  );
};

export default Navbar;