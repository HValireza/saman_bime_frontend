import "./TextBox.scss";

interface IText {
  children: React.ReactNode | string;
}

const TextBox: React.FC<IText> = ({ children }) => {
  return <p className="si-text-box">{children}</p>;
};

export default TextBox;
