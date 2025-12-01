/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import DarkTheme from "@/constants/colors/DarkTheme";
import LightTheme from "@/constants/colors/LightTheme";
import { useColorScheme } from "react-native";

type ThemeColorPrefix = keyof Omit<typeof LightTheme.colors, "white" | "black">;

type ThemeColorSuffix = keyof (typeof LightTheme.colors)["primary"];

type ThemeColor = `${ThemeColorPrefix}.${ThemeColorSuffix}` | "white" | "black";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: ThemeColor
): string {
  const theme = useColorScheme() ?? "light";
  //const theme = "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    let TypeTheme = theme === "dark" ? DarkTheme : LightTheme;

    const [prefix, suffix] = colorName.split(".") as [
      ThemeColorPrefix,
      ThemeColorSuffix
    ];

    if (suffix) {
      return TypeTheme.colors[prefix][suffix];
    }

    return TypeTheme.colors[prefix] as never as string;
  }
}
