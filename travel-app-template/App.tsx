import { SpiroKitProvider, usePoppins, useSpiroKitTheme } from "@spirokit/core";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabBarNavigation from "./navigation/TabBarNavigation";

const myTheme = useSpiroKitTheme({
  config: {
    colors: {
      primary: "emerald",
      primaryGray: "coolGray",
      primaryDark: "coolDark",
    },
    initialColorMode: "dark",
  },
});

export default function App() {
  const fontLoaded = usePoppins();

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={myTheme}>
      <NavigationContainer>
        <TabBarNavigation></TabBarNavigation>
      </NavigationContainer>
    </SpiroKitProvider>
  );
}
