import { Link, } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
        <div className="flex items-center justify-between">

            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          
        </div>
    </nav>
  )
}

export default Navbar