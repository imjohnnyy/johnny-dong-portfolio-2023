const ProjectItem = ({name, image, description, projectLocation, skills}) => {
  return (
    <div className={"rounded-lg w-[850px] h-[400px] m-[40px] focus:shadow-outline shadow-lg"}>
        <img src={image} className={"w-auto h-[250px]"} alt="projectImage"></img>
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={() => window.open(`${projectLocation}`)}>Code</button>

    </div>
  )
}
export default ProjectItem