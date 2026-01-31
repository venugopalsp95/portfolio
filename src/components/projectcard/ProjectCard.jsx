import "./projectcard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>

      <ul className="features">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="buttons">
        <a className="button" href={project.liveLink} target="_blank">
          View Live
        </a>
        <a className="button " href={project.githubLink} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
