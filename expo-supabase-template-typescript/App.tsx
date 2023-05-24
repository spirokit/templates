import { SpiroKitProvider, usePoppins, useSpiroKitTheme } from "@spirokit/core";
import GlobalNavigation from "./src/navigation/GlobalNavigation";
import { SupabaseProvider } from "./src/context/SupabaseProvider";

const myTheme = useSpiroKitTheme();

export default function App() {
  const fontLoaded = usePoppins();

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={myTheme}>
      <SupabaseProvider>
        <GlobalNavigation></GlobalNavigation>
      </SupabaseProvider>
    </SpiroKitProvider>
  );
}
