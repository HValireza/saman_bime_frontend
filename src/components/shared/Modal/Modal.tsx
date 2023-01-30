import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Modal.scss";
import closeButton from "../../../assets/icons/close.png";

interface IModal {
  text: string;
  onClose: any;
  open: boolean;
  width?: string;
  height?: string;
  link?: string;
}

const Modal: React.FC<IModal> = ({
  text,
  onClose,
  open,
  height,
  width,
  link,
}) => {
  return (
    <div id="modal-container" className={open ? "six" : "six out"}>
      <div className="modal-background">
        <div className="modal">
          <div className="modal-close" onClick={onClose}>
            <img src={closeButton} alt="close" className="modal-svg" />
          </div>
          <p>{text}</p>
          {link && (
            <Link to={link}>
              <p className="modal-read-more">بیشتر بخوانید</p>
            </Link>
          )}
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
              width={width ? width : "526"}
              height={height ? height : "362"}
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
