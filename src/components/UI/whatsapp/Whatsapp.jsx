import "./whatsapp.scss";

import { FaWhatsappSquare } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="whatsapp-icon">
      <a
        className="whatsapp-icon-link"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5551997108308"
        target="_blank"
      >
        <FaWhatsappSquare className="icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
