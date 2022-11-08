import "./index.scss";
import Fade from "react-reveal/Fade";
import Resume from "../../assets/docs/ResumeTianqiYang.pdf";
import { Link } from "react-router-dom";
import { useRef } from "react";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="about-heading">About Me.</h1>
          <Fade className="animation" top cascade>
            <div className="text-box">
              <p>
                Hello. My name is Tianqi Yang. I am currently pursuing a MS in
                Software Development at Boston University. I have industry
                experience working in Web Development, and am excited for my
                future positions in font-end development. I enjoy developing
                functional and aesthetically appealing sites and applications. I
                have several projects available for show that would fully
                demonstrate my abilities.
              </p>
            </div>
          </Fade>
          <div className="link-container">
            <ul className="links">
              <a href="https://github.com/" className="btn">
                GitHub
              </a>
              <a href={Resume} download="Tianqi_Yang_Resume">
                Resume
              </a>
              <Link to="/contact">Contact Me</Link>
            </ul>
          </div>
          <div className="skills-container">
            <div className="cards-container">
              <div className="card">
                <div className="card-header">
                  <h2>React</h2>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2>JavaScript</h2>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2>CSS</h2>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2>Python</h2>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h2>C</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
