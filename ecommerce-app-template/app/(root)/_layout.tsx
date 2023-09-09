import { usePoppins } from "@spirokit/native";
import { SpiroKitProvider, useSpiroKitTheme, useTheme } from "@spirokit/ui";
import Wrapper from "components/Wrapper";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import myTheme from "spirokit.theme";
import "@tamagui/core/reset.css";

const Root = () => {
  const fontLoaded = usePoppins();
  const theme = useSpiroKitTheme(myTheme);

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={theme}>
      <Component></Component>
    </SpiroKitProvider>
  );
};

const Component = () => {
  const { colorMode } = useTheme();
  return (
    <>
      <StatusBar style={colorMode === "dark" ? "light" : "dark"}></StatusBar>
      <Wrapper top={false}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        ></Stack>
      </Wrapper>
    </>
  );
};

export default Root;
