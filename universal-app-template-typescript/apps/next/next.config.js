const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "solito",
  "moti",
  "app",
  "@spirokit/core",
  "@spirokit/native-base",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
  webpack5: true,
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [],
  },
};

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    [
      withExpo,
      {
        projectRoot: __dirname + "../../..",
      },
    ],
  ],
  nextConfig
);
