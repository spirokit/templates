import { useNavigation } from "@react-navigation/native";
import {
  Badge,
  Body,
  Box,
  Button,
  Footnote,
  HStack,
  Image,
  SearchBox,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
} from "@spirokit/core";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import {
  CakeIcon,
  KeyIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  TicketIcon,
} from "react-native-heroicons/outline";
import { SvgProps } from "react-native-svg";
import Carousel, { CarouselItem } from "../components/Carousel";
import Score from "../components/Score";
import { ScreenNavigationProp } from "../navigation/GlobalParamList";

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

const SearchScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["0"]
        ),
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <VStack
        safeArea
        padding={4}
        width="full"
        space={4}
        backgroundColor={useColorModeValue("white", "primaryDark.0")}
      >
        <Box>
          <TitleTwo marginBottom={1} fontWeight={"bold"}>
            Search
          </TitleTwo>
          <SearchBox placeholder="Where to?"></SearchBox>
        </Box>
        <RecentSearches></RecentSearches>
        <Categories></Categories>
      </VStack>
      <VStack
        borderTopRadius={16}
        padding={4}
        flex={1}
        space={4}
        width="full"
        backgroundColor={useColorModeValue("white", "primaryDark.1")}
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
    </ScrollView>
  );
};

const RecentSearchBadge = ({
  children,
  icon,
}: {
  children: string;
  icon?: (props: SvgProps) => JSX.Element;
}) => {
  return (
    <Badge IconLeftComponent={icon} marginRight={2}>
      {children}
    </Badge>
  );
};

const RecentSearches = () => {
  return (
    <VStack space={2} marginRight={-4}>
      <Body fontWeight={"medium"}>Your recent searches</Body>
      <ScrollView horizontal={true}>
        <RecentSearchBadge icon={CakeIcon}>
          Restaurants in Miami
        </RecentSearchBadge>
        <RecentSearchBadge icon={TicketIcon}>
          Attractions in Paris
        </RecentSearchBadge>
        <RecentSearchBadge icon={CakeIcon}>
          Restaurants in Buenos Aires
        </RecentSearchBadge>
      </ScrollView>
    </VStack>
  );
};

const Categories = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <VStack space={2}>
      <Body fontWeight={"medium"}>Categories</Body>
      <VStack space={4}>
        <HStack space={2}>
          <Button
            size="sm"
            IconLeftComponent={CakeIcon}
            onPress={() => navigation.navigate("FoodSearch", {})}
          >
            Food
          </Button>
          <Button size="sm" IconLeftComponent={OfficeBuildingIcon}>
            Hotels
          </Button>
        </HStack>
        <HStack space={2}>
          <Button size="sm" IconLeftComponent={TicketIcon}>
            Attractions
          </Button>
          <Button size="sm" IconLeftComponent={KeyIcon}>
            Rentals
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

const NearbyDinner = () => {
  const { colors } = useTheme();

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
    <VStack space={4}>
      <HStack alignItems={"center"}>
        <TitleThree flex={1} fontWeight={"semibold"}>
          Dinner nearby
        </TitleThree>
        <Button
          alignSelf={"flex-end"}
          width="auto"
          textColor={useColorModeValue("primary.500", "primary.300")}
          variant="tertiary"
          size="sm"
        >
          More...
        </Button>
      </HStack>
      <VStack space={2}>
        {places.map((item) => (
          <HStack key={item.name}>
            <Image
              alt={item.name}
              height={106}
              width={110}
              source={{ uri: item.assetUrl }}
            ></Image>
            <VStack space={2} padding={3} flex={1} justifyContent="center">
              <Body fontWeight={"medium"}>{item.name}</Body>
              <HStack space={2} alignItems={"center"}>
                <Score value={item.reviewsAvg}></Score>
                <Footnote
                  color={useColorModeValue(
                    "primaryGray.600",
                    "primaryGray.300"
                  )}
                >
                  {item.reviews} reviews
                </Footnote>
              </HStack>
              <HStack space={1}>
                <LocationMarkerIcon
                  size={16}
                  color={useColorModeValue(
                    colors.primaryGray["600"],
                    colors.primaryGray["300"]
                  )}
                ></LocationMarkerIcon>
                <Footnote
                  color={useColorModeValue(
                    "primaryGray.600",
                    "primaryGray.300"
                  )}
                >
                  {item.address}
                </Footnote>
              </HStack>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default memo(SearchScreen);
