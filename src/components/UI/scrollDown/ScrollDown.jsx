import "./scrollDown.scss";

const ScrollDown = ({ cName }) => {
  return (
    <div className={`scroll-down ${cName}`}>
      <span>scroll down ➩</span>
    </div>
  );
};

export default ScrollDown;
