import { Link } from "react-router-dom";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900";

  return (
    <nav>
      {/* Outer-most Div */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <h3 className={"font-lora"} >Johnny.dev</h3>
        {/* Inner div that takes a size of 5/6 of outer div */}
        <div className={`${flexBetween} mx-auto w-5/6`}> 

          {/* Inner div that takes 5/6 of outer div */}
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE OF NAVBAR */}

            <div></div>

            {/* RIGHT SIDE OF NAVBAR */}
            <div className={`${flexBetween} w-full `}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
