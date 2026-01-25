import ProjectCard from "../../components/projectcard/ProjectCard";
import projects from "../../data/projects";
import "./projects.css";
const Projects = () => {
  return (
    <div id="project">
      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
