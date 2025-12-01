import { Platform } from "react-native";

const LightTheme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    icons: "#ffffff",
    primary: {
      "50": "#fff5ec",
      "100": "#ffe8d3",
      "200": "#ffcda5",
      "300": "#ffaa6d",
      "400": "#ff7b32",
      "500": "#ff570a",
      "600": "#ff3c00",
      "700": "#cc2702",
      "800": "#a1200b",
      "900": "#821d0c",
      "950": "#460b04",
    },
    gray: {
      "50": "#f9fafb",
      "100": "#f3f4f6",
      "200": "#e5e7eb",
      "300": "#d1d5dc",
      "400": "#99a1af",
      "500": "#6a7282",
      "600": "#4a5565",
      "700": "#364153",
      "800": "#1e2939",
      "900": "#101828",
      "950": "#030712",
    },
  },
  fonts: Platform.select({
    default: {
      regular: {
        fontFamily: "Quicksand",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "Quicksand",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "Quicksand Bold",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "Quicksand",
        fontWeight: "700",
      },
    },
  }),
};

export default LightTheme;
