import { SpiroKitProvider, usePoppins, useSpiroKitTheme } from "@spirokit/core";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GlobalNavigation from "./navigation/GlobalNavigation";

const myTheme = useSpiroKitTheme({
  config: {
    colors: {
      primary: "amber",
    },
    initialColorMode: "dark",
  },
  resources: {
    colors: {
      night: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
  },
});

export default function App() {
  const fontLoaded = usePoppins();

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={myTheme}>
      <NavigationContainer>
        <GlobalNavigation></GlobalNavigation>
      </NavigationContainer>
    </SpiroKitProvider>
  );
}
