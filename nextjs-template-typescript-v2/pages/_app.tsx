import "../public/fonts.css";
import "@tamagui/core/reset.css";

import { useSpiroKitTheme } from "@spirokit/ui";
import { NextSpiroKitProvider } from "@spirokit/web";
import NextHead from "next/head";
import React, { useMemo } from "react";
import { AppProps } from "next/app";
import myTheme from "spirokit.theme";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useSpiroKitTheme(myTheme);

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <NextHead>
        <title>SpiroKit Example App</title>
        <meta name="description" content="SpiroKit, Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <NextSpiroKitProvider theme={theme}>{contents}</NextSpiroKitProvider>
    </>
  );
}

export default MyApp;
