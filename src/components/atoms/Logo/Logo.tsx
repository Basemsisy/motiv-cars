import logo from "src/assets/icons/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo icon" className="logo-icon" />
      <p className="logo-text">Motive.</p>
    </div>
  );
};

export default Logo;
