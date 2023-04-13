import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md";

  return (
    <nav className={`${navbarBackground} fixed top-0 left-0 w-full`}>
      {/* Outer-most Div */}
      <div className={`${flexBetween} m-auto`}>
        <h1 className={"ml-8 font-roboto font-bold text-xl cursor-pointer text-gray"} >Johnny.dev</h1>

            {/* RIGHT SIDE OF NAVBAR */}
            <div className={"hidden md:flex items-center justify-between font-roboto font-medium text-lg text-gray pr-10"}>
              <Link className={"hover:text-sky-600 py-4 px-4"}to="/">Home</Link>
              <Link className={"hover:text-sky-600 py-4 px-4"} to="/about">About</Link>
              <Link className={"hover:text-sky-600 py-4 px-4"} to="/projects">Projects</Link>
              <Link className={"hover:text-sky-600 py-4 px-4"} to="/contact">Contact</Link>
            </div>

            {/* Hamburger Icon */}
            <button className="md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
               <MenuIcon style={{fontSize: 35}}/>
            </button>

        </div>
    </nav>
  );
};

export default Navbar;