import "./home.scss";
import "animate.css";

// Components;
import Music from "../music/Music";
import HomeTitle from "./homeTitle/HomeTitle";
import ScrollDown from "../UI/scrollDown/ScrollDown";
import DancingLines from "react-dancing-lines";
import Squares from "../UI/squares/Squares";

const Home = () => {
  return (
    <section className="home" id="home">
      <Music />
      <ScrollDown cName="right" />
      <ScrollDown cName="left" />
      <Squares />
      <div className="home-text">
        <HomeTitle />
        <p className="my-3">
          Front-End Developer <span>/</span> Sapiranga, Brazil
        </p>
        <div className="button">
          <a href="#contact">Contact me!</a>
        </div>
      </div>
      <DancingLines backgroundColor="#1b1b1b" />
    </section>
  );
};

export default Home;
