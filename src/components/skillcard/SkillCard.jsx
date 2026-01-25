import "./skillcard.css";
const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.image} alt="noimage" />
      <p>{skill.title}</p>
    </div>
  );
};

export default SkillCard;
