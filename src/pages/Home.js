import WavingEmoji from "../assets/images/WavingEmoji.png";
import ProfilePicture from "../assets/images/Johnny_Dong.png"
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
    <div className={"bg-lightergray w-auto flex"}> 
      <div className={`mx-auto w-3/6 items-center justify-center mt-[110px] mb-[110px] max-md:w-[85%]`}>
        <div className={"w-3/5 flex item-start mt-40 font-bold text-gray max-md:w-[85%]"}>
        <h1 className={"text-6xl text-left max-md:flex max-md:text-center max-md:items-center max-md:text-4xl max-md:mt-[100px] max-md:mb-[-250px] max-md:ml-[60px] max-md:mr-[-60px]"}>Aspiring Software Engineer<img className={" ml-[270px] mt-[-50px] h-[60px] w-[60px] max-md:h-[40px] max-md:w-[40px] max-md:ml-[-55px] max-md:mt-[38px] max-md:mr-[59px]"} src={WavingEmoji} alt="Waving"></img></h1>
        </div>
        <div className={"flex items-end mt-[-150px] max-md:items-center max-md:justify-center max-md:mt-[-300px]"}>
          <img className={"ml-[66%] w-[300px] h-[300px] max-md:ml-0 max-md:w-[250px] max-md:h-[240px] max-md:mt-[150px] max-md:mb-[400px] static"} src={ProfilePicture} alt="johnny_dong"></img>
        </div>
          <p className={"flex item-start text-lightgray w-2/4 ml-50 mr-20 mb-5 mt-[-120px] text-left text-lg font-semibold max-md:text-center max-md:w-[80%] max-md:mx-[2.4rem] max-md:mb-[10px] max-md:mt-[-250px]"}>
          Hi, I'm Johnny Dong. I'm an aspiring Software Engineer based in Auckland,
          New Zealand. 📍 </p>
        <div className={"flex item-start w-1/5 max-md:w-[50%] max-md:justify-center max-md:ml-[105px] max-md:mt-[10px]"}>
          <LinkedInIcon
              onClick={() => window.open('https://nz.linkedin.com/in/johnny-dong-', '_blank')}
              style={{
                fontSize: 40,
                color: "#2d2e32",
                margin: 15,
                marginLeft: -5,
                marginTop: 24,
                cursor: "pointer",
              }}
              className={"hover:fill-sky-600"}
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

        <ul className="flex items-center justify-center mt-[10px] max-md:flex-wrap">
          <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="React and React Native">
            <img className={"w-[42px] h-[38px] ml-[11px] mt-[13px] bg-white -bottom-10 cursor-pointer"} src={ReactIcon} alt="react_icon" title="React and React Native"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="JavaScript">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white cursor-pointer"} src={JavaScriptIcon} alt="javascript_icon" title="JavaScript"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="HTML5">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[13px] bg-white cursor-pointer"} src={HTMLIcon} alt="html_icon" title="HTML5"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="CSS3">
            <img className={"w-[40px] h-[40px] ml-[13px] mt-[13px] bg-white cursor-pointer"} src={CSSIcon} alt="css_icon" title="CSS3"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-sm:mt-5 cursor-pointer" title="Tailwind CSS">
            <img className={"w-[40px] h-[40px] ml-[13px] mt-[12px] bg-white cursor-pointer"} src={TailWindCSSIcon} alt="tailwind_css_icon" title="Tailwind CSS"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-sm:mt-5 max-sm:mr-5 cursor-pointer" title="Bootstrap">
            <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white cursor-pointer"} src={BootStrapIcon} alt="bootstrap_icon" title="Bootstrap"></img>
          </li>
          </ul>
       

        {/* Back-End skills*/}
        <h3 className={"text-xl font-semibold text-gray mt-5"}>Back-End</h3>
        <hr className={"my-6 mt-[5px] h-0.5 divide-x-4 border-t-0 bg-lightgray opacity-90 dark:opacity-50 mx-[10rem]"}></hr>

          <ul className="flex items-center justify-center mt-[10px] max-md:flex-wrap">
            <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="PHP">
              <img className={"w-[48px] h-[42px] ml-[8px] mt-[12px] bg-white -bottom-10 cursor-pointer "} src={PHPIcon} alt="php_icon" title="PHP"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="Node.js">
              <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white cursor-pointer"} src={NodeJSIcon} alt="nodejs_icon" title="Node.js"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="Express.js">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white cursor-pointer"} src={ExpressJSIcon} alt="expressjs_icon" title="Express.js"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white cursor-pointer" title="MongoDB">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white cursor-pointer"} src={MongoDBIcon} alt="mongodb_icon" title="MongoDB"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-sm:mt-5 cursor-pointer" title="MySQL">
              <img className={"w-[46px] h-[40px] ml-[8px] mt-[10px] bg-white cursor-pointer"} src={MySQLIcon} alt="mysql_icon" title="MySQL"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white max-sm:mt-5 max-sm:mr-5 cursor-pointer" title="Firebase">
              <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white cursor-pointer"} src={FirebaseIcon} alt="firebase_icon" title="Firebase"></img>
            </li>
            
          </ul>
      </div>
    </div>
  );
};

export default Home;
