import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { Children } from "react";
import { AppRegistry } from "react-native";

import config from "../spirokit.config";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: any) {
    AppRegistry.registerComponent("Main", () => Main);
    const page = await renderPage();
    const styles = [
      <style
        dangerouslySetInnerHTML={{
          __html: config.getCSS(),
        }}
        key="spirokit-css"
      />,
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body style={{ background: "white" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
