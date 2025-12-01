import { Platform } from "react-native";

// Dark theme color palette (inverted from LightTheme)
const DarkTheme = {
  colors: {
    white: "#000000",
    black: "#ffffff",
    icons: "#ffffff",
    primary: {
      "50": "#460b04",
      "100": "#821d0c",
      "200": "#a1200b",
      "300": "#cc2702",
      "400": "#ff3c00",
      "500": "#ff570a",
      "600": "#ff7b32",
      "700": "#ffaa6d",
      "800": "#ffcda5",
      "900": "#ffe8d3",
      "950": "#fff5ec",
    },
    gray: {
      "50": "#030712",
      "100": "#101828",
      "200": "#1e2939",
      "300": "#364153",
      "400": "#4a5565",
      "500": "#6a7282",
      "600": "#99a1af",
      "700": "#d1d5dc",
      "800": "#e5e7eb",
      "900": "#f3f4f6",
      "950": "#f9fafb",
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

export default DarkTheme;
