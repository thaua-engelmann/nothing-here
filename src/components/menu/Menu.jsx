import "./menu.scss";

// Hamburger menu;
import { HamburgerThreeDXY } from "react-animated-burgers";

const Menu = ({ isActive, menuHandler }) => {
  const toggleButton = () => {
    menuHandler();
  };

  return (
    <div className="menu">
      <div className="menu-hamburger">
        <HamburgerThreeDXY
          {...{ isActive, toggleButton }}
          barColor="#fff"
          buttonWidth="30"
        />
      </div>
    </div>
  );
};

export default Menu;
