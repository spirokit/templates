import { Button, LargeTitle, Image, VStack } from "@spirokit/ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { useSupabase } from "../context/useSupabase";
import { Redirect, useRootNavigationState } from "expo-router";

const screenWidth = Dimensions.get("screen").width;

const Home = () => {
  const { logout, isLoggedIn } = useSupabase();
  const { top, bottom } = useSafeAreaInsets();
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  if (!isLoggedIn) {
    return <Redirect href={"/login"}></Redirect>;
  }

  return (
    <VStack
      gap={"$8"}
      paddingTop={top}
      paddingBottom={bottom}
      padding={"$4"}
      flex={1}
      maxWidth={"$full"}
      $gtMd={{
        maxWidth: "$1/2",
      }}
      $gtLg={{
        maxWidth: "$1/3",
      }}
      justifyContent="center"
      alignSelf="center"
    >
      <LargeTitle textAlign={"center"}>Welcome!</LargeTitle>
      <Image
        source={{ uri: "https://i.imgur.com/k78EnxY.png" }}
        width={200}
        alignSelf="center"
        alt="Hello icon"
        height={200}
      ></Image>
      <Button onPress={() => logout()}>Logout</Button>
    </VStack>
  );
};

export default Home;
