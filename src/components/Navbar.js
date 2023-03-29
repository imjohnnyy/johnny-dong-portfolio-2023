import { Link } from "react-router-dom";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md";

  return (
    <nav>
      {/* Outer-most Div */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-7`}
      >
        <h3 className={"ml-8 font-roboto font-bold text-xl cursor-pointer text-gray"} >Johnny.dev</h3>
   
        <div className={`${flexBetween}  font-roboto  w-1/5 text-xl`}> 


            {/* RIGHT SIDE OF NAVBAR */}
            <div className={`${flexBetween} w-full font-roboto font-medium text-lg mr-20 text-gray `}>
              <Link className={"hover:text-sky-600"}to="/">Home</Link>
              <Link className={"hover:text-sky-600"} to="/about">About</Link>
              <Link className={"hover:text-sky-600"} to="/projects">Projects</Link>
              <Link className={"hover:text-sky-600"} to="/contact">Contact</Link>
            </div>

          </div>
        </div>
    </nav>
  );
};

export default Navbar;
