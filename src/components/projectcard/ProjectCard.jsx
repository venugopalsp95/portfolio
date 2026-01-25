import "./projectcard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <img src={project.image} alt={project.title} />

      <ul className="features">
        {project.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <div className="buttons">
        <button>
          <a href={project.liveLink} target="_blank">
            View Live
          </a>
        </button>
        <button>
          <a href={project.githubLink} target="_blank">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
