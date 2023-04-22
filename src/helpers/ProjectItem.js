import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectItem = ({name, image, description, projectLocation, skills}) => {

  return (
    <div className={"flex rounded-lg w-[1000px] h-[500px] m-[40px] focus:shadow-outline shadow-lg"}>
        {/* LEFT SIDE OF PROJECT ITEM */}
        <div className="flex">
            <img src={image} className={"w-auto h-[250px]"} alt="projectImage"></img>
        </div>
        {/* RIGHT SIDE OF PROJECT ITEM */}
        <div className="flex flex-col items-center ml-[4rem] mx-[3rem] my-[2rem] w-1/2">
            <h1 className={"font-bold text-gray text-lg mt-2 max-lg:justify-center max-lg:text-center max-lg:mx-auto uppercase"}>{name}</h1>
            <p className={"font-semibold text-center text-font-semibold text-lg text-lightgray my-5 max-md:text-center"}>{description}</p>
            <p className={"font-bold text-gray"}>{skills}</p>
            <button onClick={() => window.open(`${projectLocation}`)} className={"flex items-center mt-5 font-bold text-white text-lg border-[1px] rounded-md bg-gray py-2 px-2 hover:fill-sky-600"}>Code <GitHubIcon className={"ml-1"}/></button>
        </div>
    </div>
  )
}
export default ProjectItem