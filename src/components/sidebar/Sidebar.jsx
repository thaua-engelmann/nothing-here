import "./sidebar.scss";

// React-icons;
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { BsPatchQuestionFill as AboutIcon } from "react-icons/bs";
import {
  BiCodeCurly as WorkIcon,
  BiMessageAltDots as ContactIcon,
} from "react-icons/bi";

const Sidebar = ({ openMenu, menuHandler }) => {
  return (
    <div className={openMenu ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={menuHandler}>
          <a className="sidebar-list-item-link" href="#home">
            <HomeIcon className="icon" />
            home
          </a>
        </li>
        <li className="sidebar-list-item" onClick={menuHandler}>
          <a className="sidebar-list-item-link" href="#work">
            <WorkIcon className="icon" />
            work
          </a>
        </li>
        <li className="sidebar-list-item" onClick={menuHandler}>
          <a className="sidebar-list-item-link" href="#about">
            <AboutIcon className="icon" />
            about
          </a>
        </li>
        <li className="sidebar-list-item" onClick={menuHandler}>
          <a className="sidebar-list-item-link" href="#contact">
            <ContactIcon className="icon" />
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
