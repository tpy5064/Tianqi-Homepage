import HomeBgVideo from "../../assets/videos/HomeBgVideo.mp4";
import Logo from "./Logo";
import "./index.scss";
import { text } from "@fortawesome/fontawesome-svg-core";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <video autoPlay loop muted className="home-bg-video">
          <source src={HomeBgVideo} type="video/mp4" />
        </video>
        <div className="text-zone">
          <h1 className="logo-text">
            <Fade bottom cascade>
              TIANQI
              <br />
              YANG
            </Fade>
          </h1>
          <h2>
            <Fade bottom cascade>
              Web Developer with a passion for style.
            </Fade>
          </h2>
          <Link to="/about" className="flat-button">
            Learn More.
          </Link>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
