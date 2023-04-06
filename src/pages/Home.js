import WavingEmoji from "../assets/images/WavingEmoji.png";
import ProfilePicture from "../assets/images/Johnny_Dong.png"
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Home = () => {

  return (
    <div className={`mx-auto w-3/6 items-center justify-center mt-[280px]`}>
      <div className={"w-3/5 flex item-start mt-40 font-bold text-gray"}>
        <h1 className={"text-6xl text-left"}>Aspiring Software Engineer<img className={" ml-[270px] mt-[-50px] h-[60px] w-[60px]"} src={WavingEmoji} alt="Waving"></img></h1>
     
      </div>
      <div className={"flex items-end mt-[-150px]"}>
        <img className={"ml-[66%] w-[300px] h-[300px]"} src={ProfilePicture} alt="johnny_dong"></img>
      </div>
        <p className={"flex item-start text-lightgray w-2/4 ml-50 mr-20 mb-20 mt-[-120px] text-left text-lg font-semibold"}>
        Hi, I'm Johnny Dong. I'm an aspiring Software Engineer based in Auckland,
        New Zealand.  </p>
        <div className={"w-1/6 ml-[205px] mt-[-110px]"}>
           <LocationOnIcon style={ {color: '#ef4444'}} />
        </div>

    </div>
  );
};

export default Home;
