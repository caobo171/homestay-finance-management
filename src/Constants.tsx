
export const CssVariable = {
    PRIMARY_COLOR: 'var(--primary-color)',
    PRIMARY_COLOR_RGBA: (alpha: number) => `rgba(var(--primary-color-rgb), ${alpha})`,
    BACKGROUND_COLOR: 'var(--background-color)',
    BACKGROUND_COLOR_RGBA: (alpha: number) => `rgba(var(--background-color), ${alpha})`,
    OVERLAY_COLOR: 'var(--overlay-color)',
    TEXT_COLOR_H1: 'var(--text-color-h1)',
    TEXT_COLOR_H1_RGBA: (alpha: number) => `rgba(var(--text-color-h1-rgb), ${alpha})`,
    TEXT_COLOR_H2: 'var(--text-color-h2)',
    TEXT_COLOR_H2_RGBA: (alpha: number) => `rgba(var(--text-color-h2-rgb), ${alpha})`,
    TEXT_COLOR_H3: 'var(--text-color-h3)',
    TEXT_COLOR_H3_RGBA: (alpha: number) => `rgba(var(--text-color-h3-rgb), ${alpha})`,
    TEXT_LINK_COLOR: 'var(--text-link-color)',
    TEXT_LINK_COLOR_RGBA: (alpha: number) => `rgba(var(--text-link-color-rgb), ${alpha})`,
    LIGHT_PRIMARY_COLOR: 'var(--light-primary-color)',
    LIGHT_PRIMARY_COLOR_RGBA: (alpha: number) => `rgba(var(--light-primary-color-rgb), ${alpha})`
};

export default {
    IS_DEV: process.env.NODE_ENV === 'development',
    TRANSITION_DURATION: '.3s',
    TRANSITION_DURATION_MILISECOND: 300,
    CHANNEL_WIDTH: 300,
    SIDEBAR_WIDTH: 64,
    FORM_WIDTH: 410,
    INPUT_HEIGHT: 40,
    MAX_INPUT_WIDTH: 200 , 
    LABEL_FONTSIZE: 18,
    COVERSATION_HEADER_HEIGHT: 68,
    primaryColor: '#2C58B9',
    overlayColor: '#EBF1FF',
    red: '#ff4848',
    green: '#4CD964',
    yellow: '#f2a100',
    IS_MOBILE : window.innerWidth < 600

}
