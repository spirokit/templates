import { useNavigation } from "@react-navigation/native";
import {
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
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { FilterIcon, MapIcon } from "react-native-heroicons/solid";
import BackButton from "../components/BackButton";
import Score from "../components/Score";
import { ScreenNavigationProp } from "../navigation/GlobalParamList";

const FoodSearchScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProp>();
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
        backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
      >
        <Box>
          <HStack marginBottom={4} alignItems={"center"} space={4}>
            <BackButton></BackButton>
            <TitleTwo marginBottom={1} fontWeight={"bold"}>
              Food
            </TitleTwo>
          </HStack>
          <HStack space={2} alignItems="center">
            <SearchBox placeholder="What do you want?"></SearchBox>
            <Button
              borderRadius={8}
              width={"auto"}
              minWidth={12}
              size="sm"
              onPress={() => navigation.navigate("FoodFilters", {})}
              IconLeftComponent={FilterIcon}
            ></Button>
            <Button
              borderRadius={8}
              size="sm"
              width={"auto"}
              minWidth={12}
              IconLeftComponent={MapIcon}
            ></Button>
          </HStack>
        </Box>
      </VStack>
      <VStack
        borderTopRadius={16}
        padding={4}
        flex={1}
        space={4}
        width="full"
        backgroundColor={useColorModeValue("white", "primaryDark.1")}
      >
        <NearbyDinner></NearbyDinner>
      </VStack>
    </ScrollView>
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
        {places.map((item, index) => (
          <HStack key={index}>
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

export default memo(FoodSearchScreen);
