import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme, lightTheme } from "@/theme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    NotoSansBold: require("../assets/fonts/NotoSans-Bold.ttf"),
    NotoSansSemiBold: require("../assets/fonts/NotoSans-SemiBold.ttf"),
    NotoSansMedium: require("../assets/fonts/NotoSans-Medium.ttf"),
    NotoSansRegular: require("../assets/fonts/NotoSans-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    RobotoSemiBold: require("../assets/fonts/Roboto-SemiBold.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <RNThemeProvider
        value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </RNThemeProvider>
    </ThemeProvider>
  );
}
