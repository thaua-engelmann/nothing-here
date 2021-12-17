import "./homeTitle.scss";
import "animate.css";

// Components;
import TitleAnimation from "../../UI/titleAnimation/TitleAnimation";

const HomeTitle = () => {
  return (
    <div className="home-title">
      <TitleAnimation>Y</TitleAnimation>
      <TitleAnimation>o</TitleAnimation>
      <TitleAnimation>,</TitleAnimation>
      <br />
      <TitleAnimation>I</TitleAnimation>
      <TitleAnimation>'</TitleAnimation>
      <TitleAnimation>m</TitleAnimation>
      <TitleAnimation cName="custom space">T</TitleAnimation>
      <TitleAnimation>h</TitleAnimation>
      <TitleAnimation>a</TitleAnimation>
      <TitleAnimation>u</TitleAnimation>
      <TitleAnimation>ã</TitleAnimation>
      <TitleAnimation>,</TitleAnimation>
      <br />
      <TitleAnimation>w</TitleAnimation>
      <TitleAnimation>e</TitleAnimation>
      <TitleAnimation>b</TitleAnimation>
      <TitleAnimation cName="space">d</TitleAnimation>
      <TitleAnimation>e</TitleAnimation>
      <TitleAnimation>v</TitleAnimation>
      <TitleAnimation>e</TitleAnimation>
      <TitleAnimation>l</TitleAnimation>
      <TitleAnimation>o</TitleAnimation>
      <TitleAnimation>p</TitleAnimation>
      <TitleAnimation>e</TitleAnimation>
      <TitleAnimation>r</TitleAnimation>
      <TitleAnimation className="custom">,</TitleAnimation>
    </div>
  );
};

export default HomeTitle;
