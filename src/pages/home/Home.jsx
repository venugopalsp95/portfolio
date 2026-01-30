import hero from "./../../assets/hero.png";
import pdf from "../../assets/venugopal.pdf";
import "./home.css";
const Home = () => {
  return (
    <div id="home">
      <div className="home-details">
        <h1>
          Hi, I'm <span>VENUGOPAL S P</span>
        </h1>
        <h2>React Frontend Developer</h2>
        <p>
          I'm a frontend developer focused on building clean, responsive, and
          <span>
            scalable web applications using React and modern JavaScript.
          </span>
        </p>
        <ul>
          <li>HarvardX Certified in Web Development with JavaScript</li>
          <li>Experience building real world projects</li>
          <li>Always learning and evolving</li>
        </ul>
        <div className="buttons">
          <a className="button" href="#project">
            View Projects
          </a>

          <a href={pdf} download="venugopal.pdf" className="button">
            Download Resume
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src={hero} />
      </div>
    </div>
  );
};

export default Home;
