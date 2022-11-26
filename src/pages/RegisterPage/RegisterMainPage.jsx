import React from "react";
import RegisterLeftSide from "./components/RegisterLeftSide/RegisterLeftSide";
import RegisterRightSide from "./components/RegisterRightSide/RegisterRightSide";
import InstaIcon from "../../assets/images/Instagram.png";
import FacebookIcon from "../../assets/images/Facebook.png";
import LinkdinIcon from "../../assets/images/Linkdin.png";

const RegisterMainPage = () => {
  return (
    <div id="main-Register-page-container">
      <div className="register-left-side">
        <RegisterLeftSide />
      </div>
      <div className="register-right-side">
        <RegisterRightSide />
      </div>
      <footer className="footer-container">
        <ul>
          <li className="image-list-item">
            <a href="https://instagram.com/youthschool__?igshid=YmMyMTA2M2Y=" target="_blank">
              <img src={InstaIcon} alt="instagram image" />
            </a>
          </li>
          <li className="image-list-item">
            <a href="https://www.facebook.com/youthschoolcommunity?mibextid=ZbWKwL" target="_blank">
              <img src={FacebookIcon} alt="facebook image" />
            </a>
          </li>
          <li className="image-list-item">
            <a href="https://www.linkedin.com/company/youthschoolcommunity/" target="_blank">
              <img src={LinkdinIcon} alt="linkedin image" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default RegisterMainPage;
