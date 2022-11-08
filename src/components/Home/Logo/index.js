import "./index.scss";
import LogoPNG from "../../../assets/images/YTQChinese.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoPNG} alt="YTQNamePNG" className="solid-logo" />
    </div>
  );
};

export default Logo;
