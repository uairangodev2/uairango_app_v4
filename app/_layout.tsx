import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import ThemeContent from "@/context/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import "@/mock";
import { useColorScheme } from "react-native";
import Routes from "./routes";

export default function RootLayout() {
  const { top } = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeContent>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <ThemedView style={{ height: top }} />
      <Routes />
    </ThemeContent>
  );
}
