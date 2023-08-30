import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    breakpoints: {
        xs: "0",
        sm: "768px",
        md: "1024px",
        lg: "1440px",
        xl: "1920px",
    },

    typography: {
        fontFamily: {
            roboto: "Roboto",
        },

        fontSize: {
            h1: "50px",
            h2: "48px",
            h3: "46px",
            h4: "44px",
            h5: "42px",
            h6: "40px",
            p38: "38px",
            p36: "36px",
            p34: "34px",
            p32: "32px",
            p30: "30px",
            p28: "28px",
            p26: "26px",
            p24: "24px",
            p22: "22px",
            p20: "20px",
            p18: "18px",
            p16: "16px",
            p14: "14px",
            p12: "12px",
            p10: "10px",
            p8: "8px",
        },

        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
            black: 900,
        },
    },

    borderRadius: {
        radius2: "2px",
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius12: "12px",
        radius20: "20px",
    },

    zIndex: {
        index2: "2",
    },

    palette: {
        white: "#ffffff",
        black: "#000000",
        red: "#f14644",
        green: "#72B59B",
        orange: "#FFAD00",
        blue: "#42229D",

        base: "#242529",
        primary: "#36383e",
        secondary: "#363538",
        accent: "#fff37a",

        primaryTextColor: "#fdebdd",
        secondaryTextColor: "#8e8885",
        accentTextColor: "#fdebdd",
        secondaryIconColor: "#8e8885",

        primaryButtonBackgroundColor: "#fff37a",
        primaryButtonTextColor: "#242529",
        secondaryButtonBackgroundColor: "#363538",
        secondaryButtonTextColor: "#fdebdd",
        disableButtonBackgroundColor: "rgba(54, 53, 56, 0.4)",
        disableButtonTextColor: "rgba(255, 255, 255, 0.4)",

        tooltipBackgroundColor: "#444449",
        tooltipTextColor: "#dcdcdc",

        borderColor: "#363538",
        scrollbarBackgroundColor: "#333333",

        transparent: "rgba(36, 37, 41, 0)",
        transparent05: "rgba(36, 37, 41, 0.5)",
    },
};
const lightTheme = {
    ...defaultTheme,
    palette: {
        white: "#ffffff",
        black: "#000000",
        red: "#f14644",
        green: "#72B59B",
        orange: "#FFAD00",
        blue: "#42229D",

        base: "#fafbfe",
        primary: "#F2F3F8",
        secondary: "#f5f6fa",
        accent: "#008aff",

        primaryTextColor: "#152c5b",
        secondaryTextColor: "#62759d",
        accentTextColor: "#152c5b",
        secondaryIconColor: "rgba(98, 117, 157, 0.3)",

        primaryButtonBackgroundColor: "#008aff",
        primaryButtonTextColor: "#ffffff",
        secondaryButtonBackgroundColor: "#f5f6fa",
        secondaryButtonTextColor: "#152c5b",
        disableButtonBackgroundColor: "rgba(24, 21, 40, 0.2)",
        disableButtonTextColor: "#ffffff",

        tooltipBackgroundColor: "#ffffff",
        tooltipTextColor: "rgba(98, 117, 157, 0.75)",

        borderColor: "#eaecf3",
        scrollbarBackgroundColor: "rgba(24, 21, 40, 0.1)",

        transparent: "rgba(255, 255, 255, 0)",
        transparent05: "rgba(255, 255, 255, 0.5)",
    },
};

export default defaultTheme;
export { lightTheme };
