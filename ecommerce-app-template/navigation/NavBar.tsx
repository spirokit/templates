import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Image,
  useColorModeValue,
  ZStack,
} from "@spirokit/core";
import { memo, useState } from "react";
import { Dimensions, Platform } from "react-native";
import { ShoppingBagIcon } from "react-native-heroicons/outline";
import LogoBlack from "../assets/logo-black.png";
import LogoWhite from "../assets/logo-white.png";

const isWeb = Platform.OS === "web";

const NavBar = () => {
  const navigation = useNavigation<any>();
  const navState = navigation.getState();
  const [containerHeight, setContainerHeight] = useState<number>();
  const styles = {
    bgColor: useColorModeValue("white", "primaryDark.1"),
  };
  return (
    <ZStack height={containerHeight}>
      <HStack
        safeAreaTop
        width={"full"}
        onLayout={(event) =>
          setContainerHeight(isWeb ? 16 : event.nativeEvent.layout.height)
        }
        alignItems="center"
        backgroundColor={styles.bgColor}
        padding={4}
      >
        <Spacer></Spacer>
        <ScaledLogo></ScaledLogo>
        <Spacer></Spacer>
      </HStack>
      <HStack
        width={"full"}
        safeAreaTop
        alignItems="center"
        paddingX={4}
        paddingY={2}
      >
        <Spacer></Spacer>
        <Button
          onPress={() =>
            navigation.navigate(navState.routes[navState.index].name, {
              screen: "Checkout",
            })
          }
          IconLeftComponent={ShoppingBagIcon}
          size="sm"
          width="auto"
          variant="tertiary"
        ></Button>
      </HStack>
    </ZStack>
  );
};

const ScaledLogo = memo(() => {
  const Logo = useColorModeValue(LogoBlack, LogoWhite);
  const win = Dimensions.get("window");

  const ratio = Dimensions.get("window").width / 258; // 258 is the width of the image

  return (
    <Image
      alt="e-commerce logo"
      source={Logo}
      resizeMode="contain"
      width={isWeb ? 16 : win.width / 5}
      height={isWeb ? 8 : (113 * ratio) / 5} // 113 is the heigth of the image
    ></Image>
  );
});

const Spacer = () => {
  return <Box flex={1}></Box>;
};

export default NavBar;
