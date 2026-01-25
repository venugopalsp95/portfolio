import hero from "./../../assets/hero.png";
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
          <button>
            <a href="#project">View Projects</a>
          </button>
          <button>Download Resume</button>
        </div>
      </div>
      <div className="home-image">
        <img src={hero} />
      </div>
    </div>
  );
};

export default Home;
