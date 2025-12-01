import { useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";

export default function Routes() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="estab" />
      <Stack.Screen
        name="+not-found"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
