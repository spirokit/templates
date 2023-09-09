import { useNavigation } from "@react-navigation/native";
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
  Pressable,
  useTheme,
} from "@spirokit/core";
import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import { ShoppingBagIcon, TrashIcon } from "react-native-heroicons/outline";

type Favorite = {
  assetUrl: string;
  title: string;
  price: number;
};

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const isWeb = Platform.OS === "web";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>(initialItems);
  const { sizes } = useTheme();

  const styles = {
    iconColor: useColorModeValue("black", "primary.300"),
    background: useColorModeValue("primaryGray.100", "primaryDark.0"),
  };

  const onClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <VStack
      space={4}
      flex={1}
      backgroundColor={styles.background}
      paddingBottom={4}
    >
      <FlatList
        ListHeaderComponent={
          <HStack
            space={4}
            alignItems="center"
            padding={4}
            backgroundColor={styles.background}
          >
            <TitleThree flex={1} fontWeight="semibold">
              Favorites
            </TitleThree>
            <Button
              width="auto"
              variant="tertiary"
              textColor={styles.iconColor}
              size="sm"
              onPress={() => onClearFavorites()}
            >
              Clear
            </Button>
          </HStack>
        }
        paddingX={4}
        stickyHeaderIndices={[0]}
        ListFooterComponent={() => <Box safeAreaBottom></Box>}
        data={favorites}
        contentContainerStyle={{
          flexGrow: 1,
          width: isWeb ? sizes.container.lg : "100%",
          marginHorizontal: "auto",
        }}
        ItemSeparatorComponent={() => <Box height={4}></Box>}
        bounces={false}
        renderItem={({ item, index }) => (
          <FavoriteItem {...item} index={index}></FavoriteItem>
        )}
      ></FlatList>
    </VStack>
  );
};

const FavoriteItem = (props: Favorite & { index: number }) => {
  const navigation = useNavigation();
  const { sizes } = useTheme();

  const styles = {
    iconColor: useColorModeValue("primary.500", "primary.300"),
    background: useColorModeValue("white", "primaryDark.1"),
  };
  return (
    <Pressable onPress={() => navigation.navigate("Detail")}>
      <HStack
        key={`${props.assetUrl}-${props.index}`}
        overflow="hidden"
        backgroundColor={styles.background}
        borderRadius={8}
        width="full"
      >
        <Image
          alt={props.title}
          width={(isWeb ? sizes.container.lg : screenWidth) / 3}
          height={screenHeight / 7}
          source={{ uri: props.assetUrl }}
        ></Image>
        <VStack
          justifyContent="space-between"
          flex={1}
          paddingX={3}
          paddingY={2}
        >
          <HStack justifyContent="space-between">
            <Body fontWeight="medium" flex={1}>
              {props.title}
            </Body>
            <Button
              width="auto"
              size="sm"
              textColor={styles.iconColor}
              variant="tertiary"
              IconLeftComponent={TrashIcon}
            ></Button>
          </HStack>
          <HStack alignItems="flex-end" justifyContent="space-between">
            <Body fontWeight="medium" flex={1}>
              ${props.price.toFixed(2)}
            </Body>
            <Button
              width="auto"
              size="sm"
              textColor={styles.iconColor}
              variant="tertiary"
              IconLeftComponent={ShoppingBagIcon}
            ></Button>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
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
];

export default Favorites;
