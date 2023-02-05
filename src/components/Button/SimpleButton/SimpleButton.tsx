import styled from "styled-components";
import "./SimpleButton.scss";

interface ISimpleButton {
  width?: string;
  height?: string;
  title?: string;
  background?: string;
  opacity?: string;
  shadow?: string;
  color?: string;
  fontSize?: string;
  font?: string;
  hoverBackground?: string;
  hoverOpacity?: string;
  hoverShadow?: string;
  hoverColor?: string;
  transitionSpeed?: string;
  transitionMod?: string;
  radius?: string;
  icon?: string;
  doFunc?: () => void;
}

const SimpleButton: React.FC<ISimpleButton> = ({
  background = "#000",
  color = "#fff",
  font = "B Roya",
  fontSize = "14px",
  height = "2rem",
  hoverBackground,
  hoverColor,
  hoverOpacity,
  hoverShadow,
  opacity = "1",
  radius = "0",
  shadow = "0px 0px 0px #fff",
  title = "empty",
  transitionMod = "ease",
  transitionSpeed = "0.5s",
  width = "8rem",
  icon,
  doFunc,
}) => {
  return (
    <Button
      onClick={doFunc}
      className="si-sb-container"
      width={width}
      height={height}
      background={background}
      color={color}
      font={font}
      fontSize={fontSize}
      hoverBackground={hoverBackground}
      hoverColor={hoverColor}
      hoverOpacity={hoverOpacity}
      hoverShadow={hoverShadow}
      opacity={opacity}
      radius={radius}
      shadow={shadow}
      transitionMod={transitionMod}
      transitionSpeed={transitionSpeed}
    >
      {icon && <img src={icon} className="si-sb-icon" />}
      {title && title}
    </Button>
  );
};

export default SimpleButton;

const Button = styled.div<ISimpleButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.fontSize};
  opacity: ${(props) => props.opacity};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) =>
    "all " + props.transitionSpeed + " " + props.transitionMod};

  &:hover {
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
    opacity: ${(props) => props.hoverOpacity};
    box-shadow: ${(props) => props.hoverShadow};
    filter: ${(props) => (props.hoverBackground ? "none" : " grayscale(80%)")};
  }
`;
