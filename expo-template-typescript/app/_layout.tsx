import "../spirokit-web.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { usePoppins } from "@spirokit/native";
import { SpiroKitProvider, useSpiroKitTheme } from "@spirokit/ui";
import myTheme from "@/spirokit.theme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const fontLoaded = usePoppins();
  const theme = useSpiroKitTheme(myTheme);

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </SpiroKitProvider>
  );
}
