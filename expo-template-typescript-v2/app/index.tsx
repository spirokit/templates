import { Center, VStack, Image, TitleOne } from "@spirokit/ui";
import React from "react";

const Index = () => {
  return (
    <Center flex={1} padding={"$4"}>
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
