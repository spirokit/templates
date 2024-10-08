import { StatusBar, useColorModeValue, useTheme, VStack } from "@spirokit/core";
import React, { memo } from "react";
import Carousel, { CarouselItem } from "../components/Carousel";
import Container from "../components/Container";

const firstCarouselItems: CarouselItem[] = [
  {
    id: 1,
    assetUrl: "https://i.imgur.com/CpKlRgU.png",
    alt: "Play hard t-shirt",
  },
  {
    id: 2,
    assetUrl: "https://i.imgur.com/mM9tFLP.png",
    alt: "Solar t-shirt",
  },
  {
    id: 3,
    assetUrl: "https://i.imgur.com/CpKlRgU.png",
    alt: "Play hard t-shirt",
  },
  {
    id: 4,
    assetUrl: "https://i.imgur.com/mM9tFLP.png",
    alt: "Solar t-shirt",
  },
];

const secondCarouselItems: CarouselItem[] = [
  {
    id: 5,
    assetUrl: "https://i.imgur.com/qsW2nsI.png",
    alt: "Rainbow t-shirt",
  },
  {
    id: 6,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
    alt: "PAC-MAN t-shirt",
  },
  {
    id: 7,
    assetUrl: "https://i.imgur.com/qsW2nsI.png",
    alt: "Rainbow t-shirt",
  },
  {
    id: 8,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
    alt: "PAC-MAN t-shirt",
  },
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const barStyle = useColorModeValue("dark-content", "light-content");
  return (
    <Container
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["0"]
        ),
      }}
    >
      <StatusBar barStyle={barStyle}></StatusBar>
      <VStack safeAreaBottom padding={4} space={4} flex={1} width="full">
        <Carousel title="Best Sellers" items={firstCarouselItems}></Carousel>
        <Carousel title="New Arrivals" items={secondCarouselItems}></Carousel>
      </VStack>
    </Container>
  );
};

export default memo(HomeScreen);
