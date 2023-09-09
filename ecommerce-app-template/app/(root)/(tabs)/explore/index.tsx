import {
  Box,
  Container,
  ScrollView,
  useColorModeValue,
  VStack,
} from "@spirokit/ui";
import Carousel, { CarouselItem } from "components/Carousel";
export default function Explore() {
  const styles = {
    background: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  return (
    <Box
      justifyContent="center"
      flex={1}
      backgroundColor={styles.background}
      width="$full"
      alignItems="center"
    >
      <ScrollView
        width={"$full"}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container width="$full" flex={1}>
          <VStack padding="$4" space="$4" width="$full">
            <Carousel
              title="Best Sellers"
              items={firstCarouselItems}
            ></Carousel>

            <Carousel
              title="New Arrivals"
              items={secondCarouselItems}
            ></Carousel>

            <Carousel
              title="New Arrivals"
              items={secondCarouselItems}
            ></Carousel>
          </VStack>
        </Container>
      </ScrollView>
    </Box>
  );
}

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
