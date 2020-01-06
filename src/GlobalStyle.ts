import {createGlobalStyle} from "styled-components/macro";
import getTheme , {CustomTheme} from "Theme";

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) as string[];
    return [
       parseInt(result[1], 16),
       parseInt(result[2], 16),
       parseInt(result[3], 16)
    ];
}

function hexToRgbCssVariable(hex: string) {
    return hexToRgb(hex).join(', ');
}

export const GlobalStyle = createGlobalStyle<{ color: number , theme: CustomTheme }>`
  :root {
    --primary-color: ${props => props.theme.primaryColor};
    --primary-color-rgb: ${props => hexToRgbCssVariable(props.theme.primaryColor)};
    --background-color: ${props => props.theme.backgroundColor};
    --background-color-rgba: ${props => hexToRgbCssVariable(props.theme.backgroundColor)};
    --overlay-color: ${props => props.theme.overlayColor};
    --text-color-h1: ${props => props.theme.textColorH1};
    --text-color-h1-rgb: ${props => hexToRgbCssVariable(props.theme.textColorH1)};
    --text-color-h2: ${props => props.theme.textColorH2};
    --text-color-h2-rgb: ${props => hexToRgbCssVariable(props.theme.textColorH2)};
    --text-color-h3: ${props => props.theme.textColorH3};
    --text-color-h3-rgb: ${props => hexToRgbCssVariable(props.theme.textColorH3)};
    --text-link-color: ${props => props.theme.textLinkColor};
    --text-link-color-rgb: ${props => hexToRgbCssVariable(props.theme.textLinkColor)};
    --light-primary-color: ${props => getTheme('light', props.color).primaryColor};
    --light-primary-color-rgb: ${props => hexToRgbCssVariable(getTheme('light', props.color).primaryColor)};
  }
`;

export default GlobalStyle;

