import SkillCard from "../../components/skillcard/SkillCard";
import skills from "../../data/skills";
import "./skills.css";
const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
