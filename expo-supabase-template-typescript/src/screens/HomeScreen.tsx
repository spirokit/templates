import { Button, LargeTitle, Image, VStack } from "@spirokit/core";
import { useSupabase } from "../context/useSupabase";

const HomeScreen = () => {
  const { logout } = useSupabase();
  return (
    <VStack space={8} safeArea padding={4} flex={1} justifyContent="center">
      <LargeTitle textAlign={"center"}>Welcome!</LargeTitle>
      <Image
        source={{ uri: "https://i.imgur.com/k78EnxY.png" }}
        width="full"
        alt="Hello icon"
        height={200}
        resizeMode="contain"
      ></Image>
      <Button onPress={() => logout()}>Logout</Button>
    </VStack>
  );
};

export default HomeScreen;
