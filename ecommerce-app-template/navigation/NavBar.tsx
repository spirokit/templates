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
import { Dimensions } from "react-native";
import { ShoppingBagIcon } from "react-native-heroicons/outline";
import LogoBlack from "../assets/logo-black.png";
import LogoWhite from "../assets/logo-white.png";

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
        onLayout={(event) =>
          setContainerHeight(event.nativeEvent.layout.height)
        }
        alignItems="center"
        backgroundColor={styles.bgColor}
        padding={4}
      >
        <Spacer></Spacer>
        <ScaledLogo></ScaledLogo>
        <Spacer></Spacer>
      </HStack>
      <HStack safeAreaTop alignItems="center" paddingX={4} paddingY={2}>
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
      width={win.width / 5}
      height={(113 * ratio) / 5} // 113 is the heigth of the image
    ></Image>
  );
});

const Spacer = () => {
  return <Box flex={1}></Box>;
};

export default NavBar;
