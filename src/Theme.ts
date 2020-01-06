import {DefaultTheme} from "styled-components";
export const Colors: {[x: number]: string} = {
    1: '#2C58B9',
    2: '#00BCD4',
    3: '#26A69A',
    4: '#4CAF50',
    5: '#5969c5',
    6: '#FFC107',
    7: '#FF6F22',
    8: '#CF5555',
    9: '#ee59ba'
};


export interface CustomTheme extends DefaultTheme {
    primaryColor: string,
    backgroundColor: string,
    textColorH1: string,
    textColorH2: string,
    textColorH3: string,
    overlayColor: string,
    textLinkColor: string,
    name: 'light' | 'dark'
}

const getTheme = (name: string, color: number = 1) => {
    const Theme: {[name: string]: CustomTheme} = {
        light: {
            name: 'light',
            primaryColor: Colors[color],
            backgroundColor: '#ffffff',
            overlayColor: Colors[color] + '15',
            textColorH1: '#000000',
            textColorH2: '#434343',
            textColorH3: '#8C8C8C',
            textLinkColor: Colors[color],
        },
        dark: {
            name: 'dark',
            primaryColor: '#111111',
            backgroundColor: '#1a1a1a',
            overlayColor: '#111111',
            textColorH1: '#C8C7CC',
            textColorH2: '#8c8c8c',
            textColorH3: '#666666',
            textLinkColor: '#ffffff',
        }
    };

    return Theme[name];
};

export default getTheme;
