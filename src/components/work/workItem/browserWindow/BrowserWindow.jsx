import "./browserWindow.scss";

const BrowserWindow = ({ project }) => {
  return (
    <div className="browser-window">
      <div className="row">
        <div className="row-left">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="row-middle">
          <p>{project.name}</p>
        </div>
        <div className="row-right">null</div>
      </div>
    </div>
  );
};

export default BrowserWindow;
