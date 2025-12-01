import DarkTheme from "@/constants/colors/DarkTheme";
import LightTheme from "@/constants/colors/LightTheme";
import React, { createContext } from "react";

import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  useColorScheme
} from "react-native";

export type Theme = { [key: string]: ViewStyle | TextStyle | ImageStyle };

const ThemeContext = createContext<any>({});

export default function ThemeContent({ children }: { children: any }) {
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={colorScheme === "dark" ? DarkTheme : LightTheme}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext) as ThemeColors;

export type ThemeColors = typeof LightTheme;
