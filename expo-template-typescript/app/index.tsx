import {
  Center,
  VStack,
  Image,
  TitleOne,
  useColorModeValue,
} from "@spirokit/ui";
import React from "react";

const Index = () => {
  const backgroundColor = useColorModeValue("$white", "$primaryDark.0");

  return (
    <Center flex={1} padding={"$4"} backgroundColor={backgroundColor}>
      <VStack alignItems={"center"} space={"$4"}>
        <Image
          alt="SpiroKit logo"
          height={150}
          width={150}
          resizeMode="contain"
          source={{ uri: "https://i.imgur.com/TvHaA0H.png" }}
        ></Image>
        <TitleOne>Welcome to SpiroKit</TitleOne>
      </VStack>
    </Center>
  );
};

export default Index;
