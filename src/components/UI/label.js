import styled from "styled-components";
import { space, fontSize, fontWeight, color, propTypes } from "styled-system";


const nowrap = props =>
  props.nowrap
    ? {
        whiteSpace: "nowrap"
      }
    : null;

const accessiblyHide = props =>
  props.hidden
    ? {
        position: "absolute",
        width: "1px",
        height: "1px",
        clip: "rect(1px, 1px, 1px, 1px)"
      }
    : null;

const label = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;

  ${space} ${fontSize} ${color} ${fontWeight};
  ${nowrap} ${accessiblyHide};
`;

label.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.fontWeight
};

label.defaultProps = {
  fontSize: "10px",
  fontWeight: "regular",
  color: "gray"
};

label.displayName = "Label";

export default label;