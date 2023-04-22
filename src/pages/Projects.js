import ProjectItem from "../helpers/ProjectItem"
import { ProjectList } from "../components/ProjectsList"

const Projects = () => {
  return (
    <div className={"bg-lightergray"}>
      <h1>Projects Showcase</h1>
    {ProjectList.map((project) => {
      return (
        <ProjectItem image={project.image} name={project.name} description={project.description} projectLocation={project.projectLocation} skills={project.skills}  />
        );
    })}
    </div>
  )
}
export default Projects