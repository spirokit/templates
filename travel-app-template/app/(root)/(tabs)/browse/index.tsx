import {
  Badge,
  Body,
  Button,
  Flex,
  HStack,
  IconProps,
  ScrollView,
  TitleThree,
  useColorModeValue,
  VStack,
  Image,
  Footnote,
  getTokens,
  Container,
  Box,
  TitleTwo,
  SearchBox,
} from "@spirokit/ui";
import { Building, Cake, Key, MapPin, Ticket } from "@tamagui/lucide-icons";
import Carousel, { CarouselItem } from "components/Carousel";
import Score from "components/Score";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Browse() {
  const styles = {
    background: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      width={"$full"}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      backgroundColor={styles.background}
    >
      <Container paddingTop={top} width="$full" flex={1}>
        <VStack padding={"$4"} width="$full" space={"$4"}>
          <Box>
            <TitleTwo marginBottom={"$1"} fontWeight={"$bold"}>
              Search
            </TitleTwo>
            <SearchBox placeholder="Where to?"></SearchBox>
          </Box>
          <RecentSearches></RecentSearches>
          <Categories></Categories>
        </VStack>
        <VStack
          padding={"$4"}
          flex={1}
          space={"$4"}
          width="$full"
          backgroundColor={useColorModeValue("$white", "$primaryDark.1")}
        >
          <Carousel
            variant="horizontal"
            title="Nearby experiences"
            items={firstCarouselItems}
          ></Carousel>
          <Carousel
            variant="horizontal"
            title="Attractions nearby"
            items={secondCarouselItems}
          ></Carousel>
          <NearbyDinner></NearbyDinner>
        </VStack>
      </Container>
    </ScrollView>
  );
}

const RecentSearchBadge = ({
  children,
  icon,
}: {
  children: string;
  icon?: React.NamedExoticComponent<IconProps>;
}) => {
  return (
    <Badge IconLeftComponent={icon} _container={{ marginRight: "$2" }}>
      {children}
    </Badge>
  );
};

const RecentSearches = () => {
  return (
    <VStack space={"$2"} marginRight={-16}>
      <Body fontWeight={"$medium"}>Your recent searches</Body>
      <ScrollView horizontal={true}>
        <RecentSearchBadge icon={Cake}>Restaurants in Miami</RecentSearchBadge>
        <RecentSearchBadge icon={Ticket}>
          Attractions in Paris
        </RecentSearchBadge>
        <RecentSearchBadge icon={Cake}>
          Restaurants in Buenos Aires
        </RecentSearchBadge>
      </ScrollView>
    </VStack>
  );
};

const Categories = () => {
  return (
    <VStack space={"$2"}>
      <Body fontWeight={"$medium"}>Categories</Body>
      <Flex flexDirection="row" flexWrap={"wrap"}>
        <Button
          marginVertical={"$1"}
          marginRight={"$2"}
          IconLeftComponent={Cake}
          onPress={() =>
            router.push({
              pathname: "/browse/[title]",
              params: {
                title: "Food",
              },
            })
          }
        >
          Food
        </Button>
        <Button
          marginVertical={"$1"}
          marginRight={"$2"}
          IconLeftComponent={Building}
        >
          Hotels
        </Button>
        <Button
          marginVertical={"$1"}
          marginRight={"$2"}
          IconLeftComponent={Ticket}
        >
          Attractions
        </Button>
        <Button
          marginVertical={"$1"}
          marginRight={"$2"}
          IconLeftComponent={Key}
        >
          Rentals
        </Button>
      </Flex>
    </VStack>
  );
};

const NearbyDinner = () => {
  const { color } = getTokens();

  const styles = {
    buttonTextColor: useColorModeValue("$primary.500", "$primary.300"),
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
    iconColor: useColorModeValue(
      color["$primaryGray.600"].val,
      color["$primaryGray.300"].val
    ),
  };

  const places: {
    name: string;
    reviews: number;
    reviewsAvg: number;
    address: string;
    assetUrl: string;
  }[] = [
    {
      name: "Fogón Asado",
      reviews: 500,
      reviewsAvg: 4.3,
      assetUrl: "https://i.imgur.com/U1Raaqv.jpg",
      address: "Calle Uriarte 1423, Buenos Aires Argentina",
    },
    {
      name: "The Argentine Experience",
      reviews: 2500,
      reviewsAvg: 4.6,
      assetUrl: "https://i.imgur.com/0M5Mty0.jpg",
      address: "Fitz Roy 2110 Palermo Hollywood, Buenos Aires Argentina",
    },
    {
      name: "Toro 777",
      reviews: 329,
      reviewsAvg: 4,
      assetUrl: "https://i.imgur.com/8e4Y9tv.jpg",
      address: "Fitz Roy 800, Buenos Aires Argentina",
    },
  ];
  return (
    <VStack space={"$4"}>
      <HStack alignItems={"center"}>
        <TitleThree flex={1} fontWeight={"$semibold"}>
          Dinner nearby
        </TitleThree>
        <Button
          alignSelf={"flex-end"}
          textColor={styles.buttonTextColor}
          variant="tertiary"
        >
          More...
        </Button>
      </HStack>
      <VStack space={"$2"}>
        {places.map((item) => (
          <HStack key={item.name}>
            <Image
              alt={item.name}
              height={106}
              width={110}
              source={{ uri: item.assetUrl }}
            ></Image>
            <VStack
              space={"$2"}
              padding={"$3"}
              flex={1}
              justifyContent="center"
            >
              <Body fontWeight={"$medium"}>{item.name}</Body>
              <HStack space={"$2"} alignItems={"center"}>
                <Score value={item.reviewsAvg}></Score>
                <Footnote color={styles.textColor}>
                  {item.reviews} reviews
                </Footnote>
              </HStack>
              <HStack space={1}>
                <MapPin size={16} color={styles.iconColor}></MapPin>
                <Footnote color={styles.textColor}>{item.address}</Footnote>
              </HStack>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

const firstCarouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Private City Tour of the City of Buenos Aires with a local guide",
    description:
      "Our VIP Private City Tour will allow you to discover a large number of attractions and curiosities of the city of Buenos Aires in a relaxed and exclusive atmosphere with a bilingual guide.",
    assetUrl: "https://i.imgur.com/oyZxmXH.jpg",
  },
  {
    id: 2,
    title: "Small-Group Food Tour in Palermo with Dinner",
    description:
      "Explore the Palermo neighborhood of Buenos Aires through your taste buds with this small-group tour.",
    assetUrl: "https://i.imgur.com/LWy1U7s.jpg",
  },
  {
    id: 3,
    title: "Private City Tour of the City of Buenos Aires with a local guide",
    description:
      "Our VIP Private City Tour will allow you to discover a large number of attractions and curiosities of the city of Buenos Aires in a relaxed and exclusive atmosphere with a bilingual guide.",
    assetUrl: "https://i.imgur.com/oyZxmXH.jpg",
  },
  {
    id: 4,
    title: "Small-Group Food Tour in Palermo with Dinner",
    description:
      "Explore the Palermo neighborhood of Buenos Aires through your taste buds with this small-group tour.",
    assetUrl: "https://i.imgur.com/LWy1U7s.jpg",
  },
];

const secondCarouselItems: CarouselItem[] = [
  {
    id: 5,
    title: "Half-Day Recoleta and Palermo Bike Tour in Buenos Aires",
    description:
      "The Buenos Aires neighborhoods of Recoleta and Palermo are known for their green parks, striking monuments, and lively plazas.",
    assetUrl: "https://i.imgur.com/swz7iCi.jpg",
  },
  {
    id: 6,
    title:
      "Delta del Tigre Premium with Navigation from Buenos Aires in Private",
    description:
      "We start the tour with pick up at your hotel, then the guide will leave you in Puerto Madero where you will have a 2-hour navigation in comfortable boats through the Rio de La Plata with the best panoramic views of the city",
    assetUrl: "https://i.imgur.com/RpRdY0v.jpg",
  },
  {
    id: 7,
    title: "Half-Day Recoleta and Palermo Bike Tour in Buenos Aires",
    description:
      "The Buenos Aires neighborhoods of Recoleta and Palermo are known for their green parks, striking monuments, and lively plazas.",
    assetUrl: "https://i.imgur.com/swz7iCi.jpg",
  },
  {
    id: 8,
    title:
      "Delta del Tigre Premium with Navigation from Buenos Aires in Private",
    description:
      "We start the tour with pick up at your hotel, then the guide will leave you in Puerto Madero where you will have a 2-hour navigation in comfortable boats through the Rio de La Plata with the best panoramic views of the city",
    assetUrl: "https://i.imgur.com/RpRdY0v.jpg",
  },
];
