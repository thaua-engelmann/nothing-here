import "./aboutSocial.scss";
import resume from "../../../assets/resume.pdf";

// Tooltip from Tippy.js;
import Tippy from "@tippyjs/react";

// React-icons;
import {
  AiFillLinkedin as Linkedin,
  AiFillGithub as Github,
  AiFillMail as Email,
} from "react-icons/ai";
import { ImProfile as Resume } from "react-icons/im";

const AboutSocial = () => {
  return (
    <ul className="about-social">
      <Tippy content="Linkedin" className="tooltip">
        <li className="about-social-item">
          <a
            className="about-social-item-link"
            href="https://www.linkedin.com/in/thau%C3%A3-engelmann-6aaa04219/"
            target="_blank"
            title="Linkedin Link"
          >
            <Linkedin />
          </a>
        </li>
      </Tippy>
      <Tippy content="Github" className="tooltip">
        <li className="about-social-item">
          <a
            className="about-social-item-link"
            href="https://github.com/thaua-engelmann"
            target="_blank"
            title="Github Link"
          >
            <Github />
          </a>
        </li>
      </Tippy>
      <Tippy content="E-mail" className="tooltip">
        <li className="about-social-item">
          <a
            className="about-social-item-link"
            href="mailto:engelmann.webdev@gmail.com"
            target="_blank"
          >
            <Email />
          </a>
        </li>
      </Tippy>
      <Tippy content="Resume" className="tooltip">
        <li className="about-social-item">
          <a className="about-social-item-link" href={resume} download="thaua-engelmann_resume">
            <Resume />
          </a>
        </li>
      </Tippy>
    </ul>
  );
};

export default AboutSocial;
