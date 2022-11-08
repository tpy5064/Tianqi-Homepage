import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import YTQLogo from '../../assets/images/YTQLogo.png'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={YTQLogo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" className="home">
          Home
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <span>About</span>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
