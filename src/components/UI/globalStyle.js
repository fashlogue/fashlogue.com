import { createGlobalStyle } from 'styled-components';
import { theme } from '../../config';

const globalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${theme.colors.darkestgray};
    font-family: ${theme.Text.fontFamily};
    color: ${theme.colors.lightergray}
  }
`;

export default globalStyle;
