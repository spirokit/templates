import { ZStack, Box, HStack, TitleThree, Image } from "@spirokit/core";
import React, { memo } from "react";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
import Logo from "../assets/isologo.png";

const Header = () => {
  return (
    <ZStack
      justifyContent={"flex-end"}
      height={`${screenHeight / 5}px`}
      width={"full"}
    >
      <Box backgroundColor={"primary.500"} height={"full"} width={"full"}></Box>
      <HStack paddingY={6} paddingX={4} space={2} alignItems="center">
        <Image
          alt="SpiroKit logo"
          size={`${screenWidth / 8}px`}
          resizeMode="contain"
          source={Logo}
        ></Image>
        <TitleThree fontWeight={"semibold"} color="white" flex={1}>
          Welcome to SpiroKit
        </TitleThree>
      </HStack>
    </ZStack>
  );
};

export default memo(Header);
