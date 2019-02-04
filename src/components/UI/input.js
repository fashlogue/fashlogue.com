import styled, { keyframes } from "styled-components";
import { space, propTypes } from "styled-system";
import PropTypes from "prop-types";
import { theme } from "../../config/";

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderColor;
  const focusColor = color ? borderColor :  theme.colors.borderColor;
  return {
    "border-color": borderColor,
    "box-shadow": `0 0 0 1px ${borderColor}`,
    ":focus": {
      outline: 0,
      "border-color": focusColor,
      "box-shadow": `0 0 0 1px ${focusColor}`
    }
  };
};

const input = styled.input`
  appearance: none;
  display: block;
  font-family: inherit;
  color:  darkgrey;
  font-size: 16px;
  background-color: white;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: "lightgrey";

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: grey;
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
`;

input.displayName = "Input";
input.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...propTypes.borders,
  ...propTypes.space
};

input.defaultProps = {
  theme: theme
};

export default input;