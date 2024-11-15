import ProfilePicture from "../assets/images/Johnny_Dong.png"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ReactIcon from "../assets/images/react_icon.svg"
import JavaScriptIcon from "../assets/images/javascript_icon.svg"
import HTMLIcon from "../assets/images/html_icon.svg"
import CSSIcon from "../assets/images/css_icon.svg"
import TailWindCSSIcon from "../assets/images/tailwind_css_icon.svg"
import BootStrapIcon from "../assets/images/bootstrap_icon.svg"
import ExpressJSIcon from "../assets/images/expressjs_icon.svg"
import NodeJSIcon from "../assets/images/nodejs_icon.svg"
import MongoDBIcon from "../assets/images/mongodb_icon.svg"
import MySQLIcon from "../assets/images/mysql_icon.svg"
import PHPIcon from "../assets/images/php_icon.svg"
import FirebaseIcon from "../assets/images/firebase_icon.svg"


const Home = () => {

  return (
    <div className={"bg-lightergray w-auto flex"} id="home"> 
      <div className={`mx-auto w-3/6 items-center justify-center mt-[110px] mb-[110px] max-lg:w-[85%]`}>
        <div className={"w-3/5 flex item-start mt-40 font-bold text-gray max-lg:w-full"}>
        <h1 className={"text-6xl text-left max-lg:flex max-lg:text-center max-lg:items-center max-lg:text-4xl max-lg:mt-[100px] max-lg:mb-[-250px] max-lg:mx-auto"}>Software Developer</h1>
        </div>
        <div className={"flex items-end mt-[-150px] max-lg:items-center max-lg:justify-center max-lg:mt-[-300px]"}>
          <img className={"ml-[66%] w-[300px] h-[300px] max-lg:ml-0 max-lg:w-[250px] max-lg:h-[240px] max-lg:mt-[150px] max-lg:mb-[400px] static"} src={ProfilePicture} alt="johnny_dong"></img>
        </div>
          <p className={"text-lightgray w-1/2 mb-5 mt-[-120px] text-left text-lg font-semibold max-lg:flex max-lg:text-center max-lg:mx-auto max-lg:w-2/3 max-lg:mb-[10px] max-lg:mt-[-250px]"}>
          👋 Hi there, I'm Johnny Dong, a software developer based in Auckland, New Zealand. 📍 </p>
        <div className={"flex items-start max-lg:mx-auto max-lg:content-center max-lg:justify-center max-lg:mt-[10px]"}>
          <LinkedInIcon
              onClick={() => window.open('https://nz.linkedin.com/in/johnny-dong-', '_blank')}
              style={{
                fontSize: 40,
                color: "#2d2e32",
                cursor: "pointer",
              }}
              className={"hover:fill-sky-600 m-[15px] ml-[-5px] mt-[24px] max-lg:ml-3"}
            />
          <GitHubIcon
              onClick={() => window.open('https://github.com/imjohnnyy', '_blank')}
              style={{
                fontSize: 36,
                color: "#2d2e32",
                margin: 15,
                marginLeft: -5,
                marginTop: 26,
                cursor: "pointer",
              }}
              className={"hover:fill-sky-600"}
            />
            <EmailIcon
              onClick={() => window.location = 'mailto:imjohnnydong@gmail.com'}
              style={{
                fontSize: 43,
                color: "#2d2e32",
                margin: 15,
                marginLeft: -5,
                marginTop: 23,
                cursor: "pointer",
              }}
              className={"hover:fill-sky-600"}
            />  
        </div>

        {/* Skills section */}
        {/* Front-End skills */}
        <h3 className={"text-xl font-semibold text-gray mt-[80px]"}>Front-End</h3>
        <hr className={"my-6 mt-[5px] h-0.5 divide-x-4 border-t-0 bg-lightgray opacity-90 dark:opacity-50 mx-[10rem]"}></hr>

        <ul className="flex items-center justify-center mt-[10px] max-lg:flex-wrap">
          <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="React and React Native">
            <img className={"w-[42px] h-[38px] ml-[11px] mt-[13px] bg-white -bottom-10 cursor-pointer"} src={ReactIcon} alt="react_icon" title="React and React Native"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="JavaScript">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white cursor-pointer"} src={JavaScriptIcon} alt="javascript_icon" title="JavaScript"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="HTML5">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[13px] bg-white cursor-pointer"} src={HTMLIcon} alt="html_icon" title="HTML5"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="CSS3">
            <img className={"w-[40px] h-[40px] ml-[13px] mt-[13px] bg-white cursor-pointer"} src={CSSIcon} alt="css_icon" title="CSS3"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="Tailwind CSS">
            <img className={"w-[40px] h-[40px] ml-[13px] mt-[12px] bg-white cursor-pointer"} src={TailWindCSSIcon} alt="tailwind_css_icon" title="Tailwind CSS"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 max-sm:mr-5 cursor-pointer" title="Bootstrap">
            <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white cursor-pointer"} src={BootStrapIcon} alt="bootstrap_icon" title="Bootstrap"></img>
          </li>
          </ul>
       

        {/* Back-End skills*/}
        <h3 className={"text-xl font-semibold text-gray mt-5"}>Back-End</h3>
        <hr className={"my-6 mt-[5px] h-0.5 divide-x-4 border-t-0 bg-lightgray opacity-90 dark:opacity-50 mx-[10rem]"}></hr>

          <ul className="flex items-center justify-center mt-[10px] max-lg:flex-wrap">
            <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="PHP">
              <img className={"w-[48px] h-[42px] ml-[8px] mt-[12px] bg-white -bottom-10 cursor-pointer "} src={PHPIcon} alt="php_icon" title="PHP"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="Node.js">
              <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white cursor-pointer"} src={NodeJSIcon} alt="nodejs_icon" title="Node.js"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="Express.js">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white cursor-pointer"} src={ExpressJSIcon} alt="expressjs_icon" title="Express.js"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="MongoDB">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white cursor-pointer"} src={MongoDBIcon} alt="mongodb_icon" title="MongoDB"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 cursor-pointer" title="MySQL">
              <img className={"w-[46px] h-[40px] ml-[8px] mt-[10px] bg-white cursor-pointer"} src={MySQLIcon} alt="mysql_icon" title="MySQL"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-lg:mt-5 max-sm:mr-5 cursor-pointer" title="Firebase">
              <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white cursor-pointer"} src={FirebaseIcon} alt="firebase_icon" title="Firebase"></img>
            </li>
            
          </ul>
      </div>
    </div>
  );
};

export default Home;
