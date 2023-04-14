import WavingEmoji from "../assets/images/WavingEmoji.png";
import ProfilePicture from "../assets/images/Johnny_Dong.png"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ReactIcon from "../assets/images/React_Icon.png"
import JavaScriptIcon from "../assets/images/JavaScript_Icon.png"
import HTMLIcon from "../assets/images/html_icon.png"
import CSSIcon from "../assets/images/css_icon.png"
import TailWindCSSIcon from "../assets/images/tailwind_css_icon.png"
import BootStrapIcon from "../assets/images/bootstrap-icon.png"
import ExpressJSIcon from "../assets/images/expressjs_icon.png"
import NodeJSIcon from "../assets/images/nodejs_icon.png"
import MongoDBIcon from "../assets/images/mongodb_icon.png"
import MySQLIcon from "../assets/images/mysql_icon.png"
import PHPIcon from "../assets/images/php_icon.png"
import FirebaseIcon from "../assets/images/firebase_icon.png"


const Home = () => {

  return (
    <div className={"bg-lightergray w-auto flex"}> 
      <div className={`mx-auto w-3/6 items-center justify-center mt-[110px] mb-[110px] max-md:w-[85%]`}>
        <div className={"w-3/5 flex item-start mt-40 font-bold text-gray max-md:w-[85%]"}>
          <h1 className={"text-6xl text-left max-md:text-center max-md:justify-center]"}>Aspiring Software Engineer<img className={" ml-[270px] mt-[-50px] h-[60px] w-[60px]"} src={WavingEmoji} alt="Waving"></img></h1>
        </div>
        <div className={"flex items-end mt-[-150px] max-md:items-center max-md:justify-center max-md:mt-[-300px]"}>
          <img className={"ml-[66%] w-[300px] h-[300px] max-md:ml-0 max-md:w-[250px] max-md:h-[250px]"} src={ProfilePicture} alt="johnny_dong"></img>
        </div>
          <p className={"flex item-start text-lightgray w-2/4 ml-50 mr-20 mb-20 mt-[-120px] text-left text-lg font-semibold"}>
          Hi, I'm Johnny Dong. I'm an aspiring Software Engineer based in Auckland,
          New Zealand.  </p>
          <div className={"w-1/6 ml-[205px] mt-[-110px]"}>
            <LocationOnIcon style={ {color: '#ef4444'}} />
          </div>
        <div className={"flex item-start w-1/5"}>
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

        <ul className="flex items-center justify-center mt-[10px]">
          <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white ">
            <img className={"w-[42px] h-[38px] ml-[11px] mt-[13px] bg-white -bottom-10 "} src={ReactIcon} alt="react_icon"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white"} src={JavaScriptIcon} alt="javascript_icon"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
            <img className={"w-[40px] h-[40px] ml-[12px] mt-[13px] bg-white"} src={HTMLIcon} alt="html_icon"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
            <img className={"w-[36px] h-[40px] ml-[14px] mt-[13px] bg-white"} src={CSSIcon} alt="css_icon"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
            <img className={"w-[46px] h-[40px] ml-[8px] mt-[10px] bg-white"} src={TailWindCSSIcon} alt="tailwind_css_icon"></img>
          </li>
          <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
            <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white"} src={BootStrapIcon} alt="bootstrap_icon"></img>
          </li>
          </ul>
       

        {/* Back-End skills*/}
        <h3 className={"text-xl font-semibold text-gray mt-5"}>Back-End</h3>
        <hr className={"my-6 mt-[5px] h-0.5 divide-x-4 border-t-0 bg-lightgray opacity-90 dark:opacity-50 mx-[10rem]"}></hr>

          <ul className="flex items-center justify-center mt-[10px]">
            <li className="border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white ">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white -bottom-10 "} src={PHPIcon} alt="php_icon"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
              <img className={"w-[40px] h-[40px] ml-[12px] mt-[12px] bg-white"} src={NodeJSIcon} alt="nodejs_icon"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white"} src={ExpressJSIcon} alt="expressjs_icon"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
              <img className={"w-[48px] h-[40px] ml-[8px] mt-[12px] bg-white"} src={MongoDBIcon} alt="mongodb_icon"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
              <img className={"w-[46px] h-[40px] ml-[8px] mt-[10px] bg-white"} src={MySQLIcon} alt="mysql_icon"></img>
            </li>
            <li className="ml-5 border-2 border-indigo-500 rounded-full w-[68px] h-[68px] bg-white">
              <img className={"w-[46px] h-[40px] ml-[10px] mt-[10px] bg-white"} src={FirebaseIcon} alt="firebase_icon"></img>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Home;
