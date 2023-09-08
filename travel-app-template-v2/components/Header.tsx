import { HStack, Image, Button, useTheme, Body } from "@spirokit/ui";
import { Moon, Sun } from "@tamagui/lucide-icons";
import React, { memo } from "react";
import { Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const Header = () => {
  const isWeb = Platform.OS === "web";
  const { colorMode, setColorMode } = useTheme();

  return (
    <HStack
      paddingVertical={"$3"}
      paddingHorizontal={"$4"}
      space={"$4"}
      backgroundColor={"$primary.500"}
      alignItems="center"
    >
      <Image
        alt="SpiroKit logo"
        size={isWeb ? "$8" : screenWidth / 8}
        resizeMode="contain"
        source={{
          uri: "https://i.imgur.com/iJSqiQ2.png",
        }}
      ></Image>
      <Body fontWeight={"$semibold"} color="$white" flex={1}>
        Welcome to Travel App
      </Body>
      <Button
        IconLeftComponent={colorMode === "light" ? Moon : Sun}
        onPress={() => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      ></Button>
    </HStack>
  );
};

export default memo(Header);
