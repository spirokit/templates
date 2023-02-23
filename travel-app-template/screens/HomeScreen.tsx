import { useColorModeValue, useTheme, VStack } from "@spirokit/core";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import Carousel, { CarouselItem } from "../components/Carousel";
import Header from "../components/Header";

const firstCarouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Reykjavik Food Walk - Local Foodie Adventure in Iceland",
    badge: "Food",
    assetUrl: "https://i.imgur.com/C1oYr4L.jpg",
  },
  {
    id: 2,
    title: "Wine Country Small-Group Tour from San Francisco with Tastings",
    badge: "Food",
    assetUrl: "https://i.imgur.com/50QOMLS.jpg",
  },
  {
    id: 3,
    title: "Reykjavik Food Walk - Local Foodie Adventure in Iceland",
    badge: "Food",
    assetUrl: "https://i.imgur.com/C1oYr4L.jpg",
  },
  {
    id: 4,
    title: "Wine Country Small-Group Tour from San Francisco with Tastings",
    badge: "Food",
    assetUrl: "https://i.imgur.com/50QOMLS.jpg",
  },
];

const secondCarouselItems: CarouselItem[] = [
  {
    id: 5,
    title: "Bangkok Midnight Food Tour by Tuk Tuk",
    badge: "Food",
    assetUrl: "https://i.imgur.com/QisuDLi.jpg",
  },
  {
    id: 6,
    title: "Private Street Food Motorbike Tour in Ho Chi Minh City",
    badge: "Food",
    assetUrl: "https://i.imgur.com/qUZLBVT.jpg",
  },
  {
    id: 7,
    title: "Bangkok Midnight Food Tour by Tuk Tuk",
    badge: "Food",
    assetUrl: "https://i.imgur.com/QisuDLi.jpg",
  },
  {
    id: 8,
    title: "Private Street Food Motorbike Tour in Ho Chi Minh City",
    badge: "Food",
    assetUrl: "https://i.imgur.com/qUZLBVT.jpg",
  },
];

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["1"]
        ),
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Header></Header>
      <VStack
        marginTop={-2}
        borderTopRadius={16}
        padding={4}
        space={4}
        flex={1}
        width="full"
        backgroundColor={useColorModeValue("white", "primaryDark.1")}
      >
        <Carousel
          title="Traveler faves"
          items={firstCarouselItems}
          description="These top-rated experiences have all won Traveler’s Choice awards (in other words, they’re *chef kiss*)"
        ></Carousel>
        <Carousel
          title="Action-packed"
          items={secondCarouselItems}
          description="Spice up your meal with experiences that let you do a whole lot more than order from a menu."
        ></Carousel>
      </VStack>
    </ScrollView>
  );
};

export default memo(HomeScreen);
