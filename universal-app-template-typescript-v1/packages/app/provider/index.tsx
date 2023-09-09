import { NavigationProvider } from "./navigation";
import { SpiroKitProvider, usePoppins, useSpiroKitTheme } from "@spirokit/core";

/**
 * For more information about theme in SpiroKit:
 * https://docs.spirokit.com/?path=/docs/getting-started-theme--introduction
 */
const theme = useSpiroKitTheme();

export function Provider({ children }: { children: React.ReactNode }) {
  /**
   * If you want to use a custom font instead of Poppins, please read the following guide:
   * https://docs.spirokit.com/?path=/docs/getting-started-theme-4-adding-new-typefaces--page
   */
  const fontsLoaded = usePoppins();

  if (!fontsLoaded) return <></>;

  return (
    <SpiroKitProvider theme={theme}>
      <NavigationProvider>{children}</NavigationProvider>
    </SpiroKitProvider>
  );
}
