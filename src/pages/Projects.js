import ProjectItem from "../helpers/ProjectItem"
import { ProjectList } from "../components/ProjectsList"

const Projects = () => {
  return (
    <div className={"bg-lightergray w-auto flex flex-col items-center justify-center mx-auto"} id="projects">
      <div className="flex flex-col items-start text-left w-2/8 mx-8 my-[6rem] max-lg:w-[90%]">
        <h1 className={"font-black text-lg text-blue-500 w-1/2 max-lg:text-center max-lg:mx-auto"}>PROJECTS</h1>
        <h3 className="font-bold text-gray text-2xl mt-2 max-lg:justify-center max-lg:text-center max-lg:mx-auto">
              Each project is a unique piece of development 💻
        </h3>
        {ProjectList.map((project) => {
          return (
            <ProjectItem image={project.image} name={project.name} description={project.description} projectLocation={project.projectLocation} skills={project.skills}  />
            );
        })}
      </div>
    </div>
  )
}
export default Projects