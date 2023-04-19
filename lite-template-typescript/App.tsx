import {
  SpiroKitProvider,
  usePoppins,
  useSpiroKitTheme,
  AccentColor,
} from "@spirokit/lite";
import { useState } from "react";
import Home from "./Home";

export default function App() {
  const fontLoaded = usePoppins();

  const [accentColor, setAccentColor] = useState<AccentColor>("indigo");

  const myTheme = useSpiroKitTheme({
    config: {
      colors: {
        primary: accentColor,
      },
    },
  });

  if (!fontLoaded) return <></>;

  return (
    <SpiroKitProvider theme={myTheme}>
      <Home
        onUpdateAccentColor={(newColor) => {
          setAccentColor(newColor);
        }}
      ></Home>
    </SpiroKitProvider>
  );
}
