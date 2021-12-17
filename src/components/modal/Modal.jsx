import "./modal.scss";

// React-icons;
import { FaTimes } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const Modal = ({
  showModal,
  setShowModal,
  selectedImg,
  selectedTitle,
  selectedDesc,
  selectedTechs,
  selectedDemo,
  selectedCode,
}) => {
  const closeModalHandler = (e) => {
    if (e.target.classList.contains("modal-project")) {
      setShowModal(false);
    }
  };

  return (
    <div
      className={showModal ? "show modal-project" : "modal-project"}
      onClick={closeModalHandler}
    >
      <div className="modal">
        <div className="close-modal" onClick={() => setShowModal(false)}>
          <FaTimes />
        </div>
        <div className="modal-content">
          <div className="modal-content-left">
            <img src={selectedImg} alt="Selected Project" />
          </div>
          <div className="modal-content-right">
            <div className="project-info">
              <div className="project-info-title">
                <h3>Project</h3>
                <h2>{selectedTitle}</h2>
              </div>
              <ul className="project-info-techs my-1">
                {selectedTechs?.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
              <div className="project-info-description my-2">
                <h3>About</h3>
                <div className="project-info-description-text my-1">
                  {selectedDesc}
                </div>
              </div>
              <div className="project-info-actions">
                <a className="demo" href={selectedDemo} target="_blank">
                  <AiFillEye />
                  DEMO
                </a>
                <a className="code" href={selectedCode} target="_blank">
                  <BsCodeSlash />
                  CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
