import styled from "styled-components";
import "./Modal.scss";

interface IModal {
  text: string;
  onClose: any;
  open: boolean;
}

const Modal: React.FC<IModal> = ({ text, onClose, open }) => {
  return (
    <div id="modal-container" className={open ? "six" : "six out"}>
      <div className="modal-background" onClick={onClose}>
        <div className="modal">
          <p>{text}</p>
          <svg
            className="modal-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              fill="none"
              width="526"
              height="362"
              rx="3"
              ry="3"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
