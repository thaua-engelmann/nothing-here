import "./work.scss";
import { projects } from "../../data";

// Components;
import WorkTitle from "./workTitle/WorkTitle";
import WorkItem from "./workItem/WorkItem";

const Work = ({
  setShowModal,
  setSelectedImg,
  setSelectedTitle,
  setSelectedDesc,
  setSelectedTechs,
  setSelectedDemo,
  setSelectedCode,
}) => {
  return (
    <section className="work" id="work">
      <div className="work-content">
        <div className="work-content-text">
          <div className="work-content-text-title">
            <WorkTitle />
          </div>
          <p>
            Some of my best projects that I have worked on in the past months.
            Some of them are both developed and designed by me, and others it's
            just the code. Take a look at that and don't forget to hit me up :)
          </p>
          <div className="work-content-text-back">
            <h1>work</h1>
          </div>
        </div>
        <div className="work-content-gallery">
          {projects.map((project) => (
            <WorkItem
              project={project}
              setShowModal={setShowModal}
              setSelectedImg={setSelectedImg}
              setSelectedTitle={setSelectedTitle}
              setSelectedDesc={setSelectedDesc}
              setSelectedTechs={setSelectedTechs}
              setSelectedDemo={setSelectedDemo}
              setSelectedCode={setSelectedCode}
              key={project.id}
            />
          ))}
        </div>
        <a className="message-me" href="#contact">
          Message me!
        </a>
      </div>
    </section>
  );
};

export default Work;
