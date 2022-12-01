import React from "react";
import logo from "../../../../assets/images/Logo.png";
import InstaIcon from "../../../../assets/images/Instagram.png";
import FacebookIcon from "../../../../assets/images/Facebook.png";
import LinkdinIcon from "../../../../assets/images/Linkdin.png";
const RegisterLeftSide = () => {
  return (
    <div className="Register-Left-Side-container">
      <header className="logo-header">
        <img src={logo} alt="youth school" />
      </header>
      <div className="rigth-side-content-container">
        <p className="launch-text">
          {process.env.REACT_YOUTH_GET_API}
          LAUNCHING SOON <span className="launch-line"></span>
        </p>
        <p className="learning-big-orange-text">
          Learning that gets you hired!
        </p>
        <p className="normal-content-text">
          Looking to build your career while learning, and networking with
          experts?
        </p>
        <p className="normal-content-text">
          Be a part of our upcoming Marketing & Analytics program, making you land into
          that high-valued job.
        </p>
        <p className="bold-content-text">Apply to stay updated! </p>
      </div>
      <footer className="footer-container">
        <ul>
          <li className="image-list-item">
            <a
              href="https://instagram.com/youthschool__?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <img src={InstaIcon} alt="instagram image" />
            </a>
          </li>
          <li className="image-list-item">
            <a
              href="https://www.facebook.com/youthschoolcommunity?mibextid=ZbWKwL"
              target="_blank"
            >
              <img src={FacebookIcon} alt="facebook image" />
            </a>
          </li>
          <li className="image-list-item">
            <a
              href="https://www.linkedin.com/company/youthschoolcommunity/"
              target="_blank"
            >
              <img src={LinkdinIcon} alt="linkedin image" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default RegisterLeftSide;
