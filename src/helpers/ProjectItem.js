const ProjectItem = ({name, image, description, projectLocation, skills}) => {
  return (
    <div className={"flex rounded-lg w-[1000px] h-[500px] m-[40px] focus:shadow-outline shadow-lg"}>
        {/* LEFT SIDE OF PROJECT ITEM */}
        <div className="flex">
            <img src={image} className={"w-auto h-[250px]"} alt="projectImage"></img>
        </div>
        {/* RIGHT SIDE OF PROJECT ITEM */}
        <div className="flex flex-col items-center ml-[4rem] mx-[3rem] w-1/2">
            <h1 className={"font-bold text-gray text-lg mt-2 max-lg:justify-center max-lg:text-center max-lg:mx-auto uppercase"}>{name}</h1>
            <p className={"font-semibold text-center text-font-semibold text-lg text-lightgray my-5 max-md:text-center"}>{description}</p>
            <button onClick={() => window.open(`${projectLocation}`)}>Code</button>
        </div>
    </div>
  )
}
export default ProjectItem