import "./workItem.scss";
import { useInView } from "react-intersection-observer";

// Components;
import BrowserWindow from "./browserWindow/BrowserWindow";

const WorkItem = ({
  project,
  setShowModal,
  setSelectedImg,
  setSelectedTitle,
  setSelectedDesc,
  setSelectedTechs,
  setSelectedDemo,
  setSelectedCode,
}) => {
  const run = () => {
    setShowModal(true);
    setSelectedImg(project.image);
    setSelectedTitle(project.name);
    setSelectedDesc(project.description);
    setSelectedTechs(project.techs);
    setSelectedDemo(project.links.demo);
    setSelectedCode(project.links.code);
  };

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={inView ? "work-item fade" : "work-item"}
      onClick={run}
      ref={ref}
    >
      <BrowserWindow project={project} />
      <div className="work-item-image">
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  );
};

export default WorkItem;
