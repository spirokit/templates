import { usePoppins } from "@spirokit/native";
import { SpiroKitProvider, useSpiroKitTheme } from "@spirokit/ui";
import { Slot } from "expo-router";
import myTheme from "../spirokit.theme";

let RootApp = () => {
  const fontLoaded = usePoppins();
  const theme = useSpiroKitTheme(myTheme);

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={theme}>
      <Slot />
    </SpiroKitProvider>
  );
};

export default RootApp;
