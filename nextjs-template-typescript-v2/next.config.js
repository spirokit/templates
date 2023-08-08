/** @type {import('next').NextConfig} */
const { withTamagui } = require("@tamagui/next-plugin");
const withImages = require("next-images");

process.env.TAMAGUI_TARGET = "web";

const plugins = [
  withImages,
  withTamagui({
    config: "./spirokit.config.ts",
    components: [],
    importsWhitelist: ["constants.js", "colors.js"],
    logTimings: true,
    disableExtraction: false,
    // experiment - reduced bundle size react-native-web
    useReactNativeWebLite: false,
    excludeReactNativeWebExports: [
      "Switch",
      "ProgressBar",
      "Picker",
      "CheckBox",
      "Touchable",
    ],
  }),
];

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      disableStaticImages: true,
    },
    modularizeImports: {
      "@tamagui/lucide-icons": {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      "react-native-web",
      "@shopify/flash-list",
      "recyclerlistview",
      "@spirokit/action-sheet",
      "@spirokit/alert",
      "@spirokit/asset",
      "@spirokit/avatar",
      "@spirokit/badge",
      "@spirokit/button",
      "@spirokit/core",
      "@spirokit/date-time-picker",
      "@spirokit/horizontal-card",
      "@spirokit/input",
      "@spirokit/message",
      "@spirokit/modal",
      "@spirokit/portrait-card",
      "@spirokit/radio",
      "@spirokit/react-native-modern-datepicker",
      "@spirokit/search-box",
      "@spirokit/select",
      "@spirokit/skeleton",
      "@spirokit/switch",
      "@spirokit/tab-bar",
      "@spirokit/textarea",
      "@spirokit/typography",
      "@spirokit/ui",
      "@spirokit/vertical-card",
      "@spirokit/web",
    ],
    experimental: {
      // optimizeCss: true,
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
