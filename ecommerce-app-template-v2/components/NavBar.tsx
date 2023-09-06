import {
  Button,
  HStack,
  Image,
  useColorModeValue,
  useTheme,
  ZStack,
} from "@spirokit/ui";
import { memo, useState } from "react";
import { Dimensions, Platform } from "react-native";
import { Moon, ShoppingBag, Sun } from "@tamagui/lucide-icons";
import { router } from "expo-router";

const isWeb = Platform.OS === "web";

const NavBar = () => {
  const [containerHeight, setContainerHeight] = useState<number>();
  const { colorMode, setColorMode } = useTheme();

  const styles = {
    bgColor: useColorModeValue("$white", "$primaryDark.24"),
  };

  return (
    <ZStack
      onPress={() => router.replace({ pathname: "(root)" })}
      height={containerHeight}
    >
      <HStack
        width={"$full"}
        onLayout={(event) =>
          setContainerHeight(event.nativeEvent.layout.height)
        }
        alignItems="center"
        justifyContent="center"
        backgroundColor={styles.bgColor}
        paddingHorizontal={"$4"}
        paddingVertical={"$2"}
      >
        <ScaledLogo></ScaledLogo>
      </HStack>
      <HStack
        width={"$full"}
        alignItems="center"
        paddingHorizontal={"$4"}
        paddingVertical={"$2"}
        space="$2"
        justifyContent="flex-end"
      >
        <Button
          onPress={() =>
            router.push({
              pathname: "/checkout",
            })
          }
          IconLeftComponent={ShoppingBag}
          variant="tertiary"
        ></Button>
        <Button
          alignSelf="flex-end"
          variant="tertiary"
          onPress={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
          IconLeftComponent={colorMode === "dark" ? Sun : Moon}
        ></Button>
      </HStack>
    </ZStack>
  );
};

const ScaledLogo = memo(() => {
  const win = Dimensions.get("window");

  const ratio = Dimensions.get("window").width / 258; // 258 is the width of the image
  const logoUrl = useColorModeValue(
    "https://i.imgur.com/LLdbpn8.png",
    "https://i.imgur.com/yXDYwpw.png"
  ) as string;

  return (
    <Image
      alt="e-commerce logo"
      source={{
        uri: logoUrl,
        width: isWeb ? 16 * 4 : win.width / 5,
        height: isWeb ? 8 * 4 : (113 * ratio) / 5, // 113 is the heigth of the image
      }}
      resizeMode="contain"
      width={isWeb ? 16 * 4 : win.width / 5}
      height={isWeb ? 8 * 4 : (113 * ratio) / 5}
    ></Image>
  );
});

export default NavBar;
