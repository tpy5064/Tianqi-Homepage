import "./index.scss";
import Fade from "react-reveal/Fade";
import Resume from "../../assets/docs/ResumeTianqiYang.pdf";
import { Link } from "react-router-dom";
import { useRef } from "react";
import reactIcon from '../../assets/vectors/react-vector.svg'
import JSIcon from '../../assets/vectors/js-vector.svg'
import pythonIcon from '../../assets/vectors/python-vector.svg'
import scssIcon from '../../assets/vectors/scss-vector.svg'
import cIcon from '../../assets/vectors/c-vector.svg'

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
            <div className="skills-carousel">
              <div className="carousel-item">
                <img src={reactIcon} width='250' height='250' alt="React Icon" />
              </div>
              <div className="carousel-item">
                <img src={JSIcon} alt="JavaScript Icon"  />
              </div>
              <div className="carousel-item">
                <img src={pythonIcon} alt="Python Icon" />
              </div>
              <div className="carousel-item">
                <img src={scssIcon} alt="SCSS Icon" />
              </div>
              <div className="carousel-item">
                <img src={cIcon} alt="C Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
