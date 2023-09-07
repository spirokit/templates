import { usePoppins } from "@spirokit/native";
import { SpiroKitProvider, useSpiroKitTheme } from "@spirokit/ui";
import { SupabaseProvider } from "context/SupabaseProvider";
import { Stack } from "expo-router";
import myTheme from "spirokit.theme";

let RootApp = () => {
  const fontLoaded = usePoppins();
  const theme = useSpiroKitTheme(myTheme);

  if (!fontLoaded) return null;

  return (
    <SpiroKitProvider theme={theme}>
      <SupabaseProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        ></Stack>
      </SupabaseProvider>
    </SpiroKitProvider>
  );
};

export default RootApp;
