import { Link } from "react-router-dom";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900";

  return (
    <nav>
      {/* Outer-most Div */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-7`}
      >
        <h3 className={"ml-8 font-roboto font-bold text-xl cursor-pointer"} >Johnny.dev</h3>
   
        <div className={`${flexBetween}  font-roboto  w-1/5 text-xl`}> 


            {/* RIGHT SIDE OF NAVBAR */}
            <div className={`${flexBetween} w-full font-roboto font-medium text-lg mr-20 `}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>
        </div>
    </nav>
  );
};

export default Navbar;
