import React, { useEffect } from "react";
import TagCanvas from "tag-canvas";

const skills = [
  { id: 1, href: "#html_", title: "HTML" },
  { id: 2, href: "#null_", title: "null" },
  { id: 3, href: "#css_", title: "CSS" },
  { id: 4, href: "#null_", title: "null" },
  { id: 5, href: "#javascript_", title: "Javascript" },
  { id: 6, href: "#sass_", title: "SASS" },
  { id: 7, href: "#react_", title: "ReactJS" },
  { id: 8, href: "#null_", title: "null" },
  { id: 9, href: "#git_", title: "Git" },
  { id: 10, href: "#null_", title: "null" },
  { id: 11, href: "#bootstrap_", title: "Bootstrap" },
  { id: 12, href: "#null_", title: "null" },
  { id: 13, href: "#null_", title: "null" },
];

const AboutSkills = () => {
  useEffect(() => {
    console.log("Loading TagCanvas...");

    TagCanvas.wheelZoom = false;
    TagCanvas.textFont = "Raleway, sans-serif";
    TagCanvas.textColour = "#00f2ea";
    TagCanvas.textHeight = 26;
    TagCanvas.outlineMethod = "size";
    TagCanvas.outlineIncrease = 30;
    TagCanvas.maxSpeed = 0.03;
    TagCanvas.minBrightness = 0.2;
    TagCanvas.depth = 0.92;
    TagCanvas.pulsateTo = 0.6;
    TagCanvas.initial = [0.1, -0.1];
    TagCanvas.decel = 0.98;
    TagCanvas.reverse = true;
    TagCanvas.hideTags = false;
    TagCanvas.shadow = false;
    TagCanvas.shadowBlur = 3;
    TagCanvas.weight = false;
    TagCanvas.imageScale = null;
    TagCanvas.fadeIn = 1000;
    TagCanvas.clickToFront = 600;
    TagCanvas.width = window.innerWidth;
    TagCanvas.height = window.innerHeight;

    try {
      TagCanvas.Start("tagcanvas", "taglist");
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <div>
      <div id="skill-sphere" className={`flex`}>
        <canvas
          id="tagcanvas"
          width="820"
          height="600"
          style={{
            width: "100%",
            zIndex: "99",
            position: "relative",
            margin: "0 auto",
          }}
          className="to-fade-in fast-anim"
        ></canvas>
      </div>
      <div id="taglist" style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li className="skill" key={skill.id}>
              <a className="skill" href={skill.href}>
                {skill.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSkills;
