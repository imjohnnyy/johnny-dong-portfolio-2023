import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectItem = ({name, image, description, projectLocation, skills}) => {

  return (
    <div className={"flex items-center justify-center rounded-lg w-[950px] h-[500px] m-[40px] focus:shadow-outline shadow-lg max-lg:flex-col max-lg:w-auto max-lg:h-[850px]"}>
        {/* LEFT SIDE OF PROJECT ITEM */}
        <div className="flex max-lg:w-auto max-lg:items-center max-lg:justify-center">
            <img src={image} className={"w-[45rem] h-[20rem] ml-5 rounded-2xl shadow-2xl max-lg:ml-0 max-lg:h-[100%] max-lg:w-[92.5%]"} alt="website"></img>
        </div>
        {/* RIGHT SIDE OF PROJECT ITEM */}
        <div className="flex flex-col items-center ml-[4rem] mx-[3rem] my-[2rem] w-1/2 max-lg:w-auto max-lg:mr-[4rem] max-lg:text-center">
            <h1 className={"font-bold text-gray text-lg mt-2 max-lg:justify-center max-lg:text-center max-lg:w-[120%] uppercase"}>{name}</h1>
            <p className={"font-semibold text-center text-font-semibold text-lg text-lightgray my-5 max-lg:text-center max-lg:w-[120%]"}>{description}</p>
            <p className={"font-bold text-gray text-center max-lg:my-2"}>{skills}</p>
            <button
               onClick={() => window.open(`${projectLocation}`)}
               className={"flex items-center mt-5 font-bold text-white text-lg border-[1px] rounded-md bg-gray py-2 px-2 hover:fill-sky-600"}>
               Source Code <GitHubIcon className={"ml-1"}/>
            </button>
        </div>
    </div>
  )
}
export default ProjectItem