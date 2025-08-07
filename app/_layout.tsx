import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load custom fonts with static and variable font types
  const [fontsLoaded, fontError] = useFonts({
    // Static Fonts (separate files for each font-weight)
    AntonRegular: require("../assets/fonts/Anton/Anton-Regular.ttf"),
    CinzelRegular: require("../assets/fonts/Cinzel/static/Cinzel-Regular.ttf"),
    CinzelBold: require("../assets/fonts/Cinzel/static/Cinzel-Bold.ttf"),
    PTSansRegular: require("../assets/fonts/PT_Sans/PTSans-Regular.ttf"),
    PTSansBold: require("../assets/fonts/PT_Sans/PTSans-Bold.ttf"),

    // Variable Fonts (single file supports multiple font-weights)
    CinzelVariable: require("../assets/fonts/Cinzel/Cinzel-VariableFont_wght.ttf"),
    OswaldVariable: require("../assets/fonts/Oswald/Oswald-VariableFont_wght.ttf"),
    SpaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ShadowsIntoLight: require("../assets/fonts/Shadows_Into_Light/ShadowsIntoLight-Regular.ttf"),
    SigmarOne: require("../assets/fonts/Sigmar_One/SigmarOne-Regular.ttf"),
  });

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded && !fontError) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded, fontError]);

  // Show nothing while fonts are loading
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
