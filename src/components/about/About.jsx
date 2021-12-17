import "./about.scss";

// Components;
import AboutTitle from "./aboutTitle/AboutTitle";
import AboutSocial from "./aboutSocial/AboutSocial";
import AboutSkills from "./aboutSkills/AboutSkills";
import ScrollDown from "../UI/scrollDown/ScrollDown";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-content-left">
          <div className="about-content-left-title my-1">
            <AboutTitle />
          </div>
          <div className="about-content-left-text">
            <p>
              Hello there, my name is Thauã Engelmann. I am a{" "}
              <span>self-taught</span> web developer based on Sapiranga, Brazil.
            </p>
            <p>
              I have been challenging myself through <span>front-end</span> for
              the past year, and eventually I started to enjoy the idea behind
              each line of code. Now, as professionally connected with the
              software industry, I am interest on front-end scope and free for
              new opportunities.
            </p>
            <p>
              I am a big fan of animations, transitions, shadows and things like
              that. I think all of this stuff can be really cool and always give
              a unique perspective on websites.
            </p>
          </div>
          <div className="about-content-left-social">
            <AboutSocial />
            <ScrollDown />
          </div>
        </div>
        <div className="about-content-right">
          <div className="about-content-right-skills">
            <AboutSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
