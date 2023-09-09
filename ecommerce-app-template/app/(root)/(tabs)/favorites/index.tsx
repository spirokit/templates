import {
  Button,
  FlatList,
  HStack,
  TitleThree,
  useColorModeValue,
  VStack,
  Image,
  Box,
  Body,
  useTheme,
  getTokens,
  Container,
} from "@spirokit/ui";
import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import { ShoppingBag, Trash } from "@tamagui/lucide-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

type Favorite = {
  assetUrl: string;
  title: string;
  price: number;
};

const screenHeight = Dimensions.get("screen").height;

const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>(initialItems);

  const styles = {
    iconColor: useColorModeValue("$black", "$primary.300"),
    background: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  const { bottom } = useSafeAreaInsets();

  const onClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <Box width="$full" flex={1} backgroundColor={styles.background}>
      <Container width={"$full"} flex={1}>
        <VStack space={"$4"} flex={1} paddingBottom={"$4"}>
          <HStack
            space={"$4"}
            alignItems="center"
            padding={"$4"}
            backgroundColor={styles.background}
          >
            <TitleThree flex={1} fontWeight="$semibold">
              Favorites
            </TitleThree>
            <Button
              variant="tertiary"
              textColor={styles.iconColor}
              size="sm"
              onPress={() => onClearFavorites()}
            >
              Clear
            </Button>
          </HStack>
          <FlatList
            _container={{
              paddingHorizontal: "$4",
            }}
            estimatedItemSize={screenHeight / 7}
            ListFooterComponent={() => <Box bottom={bottom}></Box>}
            data={favorites}
            ItemSeparatorComponent={() => <Box height={"$4"}></Box>}
            bounces={false}
            renderItem={({ item, index }) => (
              <FavoriteItem {...item} index={index}></FavoriteItem>
            )}
          ></FlatList>
        </VStack>
      </Container>
    </Box>
  );
};

const FavoriteItem = (props: Favorite & { index: number }) => {
  const styles = {
    iconColor: useColorModeValue("$primary.500", "$primary.300"),
    background: useColorModeValue("$white", "$primaryDark.1"),
  };
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <HStack
      onPress={() =>
        router.push({
          pathname: "detail/[id]",
          params: {
            id: 1,
          },
        })
      }
      key={`${props.assetUrl}-${props.index}`}
      overflow="hidden"
      backgroundColor={styles.background}
      borderRadius={8}
      width="$full"
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <Image
        alt={props.title}
        width={Math.floor(containerWidth / 3)}
        height={screenHeight / 7}
        $gtLg={{
          height: screenHeight / 3,
        }}
        source={{ uri: props.assetUrl }}
      ></Image>
      <VStack
        justifyContent="space-between"
        flex={1}
        paddingHorizontal={"$3"}
        paddingVertical={"$2"}
      >
        <HStack justifyContent="space-between">
          <Body fontWeight="$medium" flex={1}>
            {props.title}
          </Body>
          <Button
            size="sm"
            textColor={styles.iconColor}
            variant="tertiary"
            IconLeftComponent={Trash}
          ></Button>
        </HStack>
        <HStack alignItems="flex-end" justifyContent="space-between">
          <Body fontWeight="$medium" flex={1}>
            ${props.price.toFixed(2)}
          </Body>
          <Button
            size="sm"
            textColor={styles.iconColor}
            variant="tertiary"
            IconLeftComponent={ShoppingBag}
          ></Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

const initialItems: Favorite[] = [
  {
    title: "PAC-MAN Yellow T-Shirt - 2021",
    price: 35.99,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
  },
  {
    title: "Regrets T-Shirt",
    price: 32.99,
    assetUrl: "https://i.imgur.com/odSZ3Gv.png",
  },
  {
    title: "Derby t-shirt",
    price: 30.0,
    assetUrl: "https://i.imgur.com/K2D1aIE.png",
  },
  {
    title: "Rainbox t-shirt",
    price: 25.0,
    assetUrl: "https://i.imgur.com/qsW2nsI.png",
  },
  {
    title: "Solar t-shirt",
    price: 45.0,
    assetUrl: "https://i.imgur.com/mM9tFLP.png",
  },
  {
    title: "PAC-MAN Yellow T-Shirt - 2021",
    price: 35.99,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
  },
  {
    title: "Regrets T-Shirt",
    price: 32.99,
    assetUrl: "https://i.imgur.com/odSZ3Gv.png",
  },
  {
    title: "Derby t-shirt",
    price: 30.0,
    assetUrl: "https://i.imgur.com/K2D1aIE.png",
  },
  {
    title: "Rainbox t-shirt",
    price: 25.0,
    assetUrl: "https://i.imgur.com/qsW2nsI.png",
  },
  {
    title: "Solar t-shirt",
    price: 45.0,
    assetUrl: "https://i.imgur.com/mM9tFLP.png",
  },
];

export default Favorites;
