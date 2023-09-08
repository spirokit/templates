import {
  Box,
  Image,
  Button,
  Container,
  getTokens,
  HStack,
  ScrollView,
  SearchBox,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  VStack,
  Body,
  Footnote,
} from "@spirokit/ui";
import { Filter, Map, MapPin } from "@tamagui/lucide-icons";
import BackButton from "components/BackButton";
import Score from "components/Score";
import { router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BrowseCategory() {
  const { title } = useLocalSearchParams();
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
      <Container width="$full" flex={1}>
        <VStack padding={"$4"} width="$full" space={"$4"} paddingTop={top}>
          <Box marginTop="$4">
            <HStack marginBottom={"$4"} alignItems={"center"} space={"$4"}>
              <BackButton></BackButton>
              <TitleTwo marginBottom={"$1"} fontWeight={"$bold"}>
                {title}
              </TitleTwo>
            </HStack>
            <HStack space={"$2"} alignItems="center">
              <SearchBox flex={1} placeholder="What do you want?"></SearchBox>
              <Button
                size="sm"
                onPress={() =>
                  router.push({
                    pathname: "/browse/category/filters",
                    params: {
                      title: "Food",
                    },
                  })
                }
                IconLeftComponent={Filter}
              ></Button>
              <Button size="sm" IconLeftComponent={Map}></Button>
            </HStack>
          </Box>
        </VStack>
        <VStack
          padding={"$4"}
          flex={1}
          space={"$4"}
          width="$full"
          backgroundColor={useColorModeValue("$white", "$primaryDark.1")}
        >
          <NearbyDinner></NearbyDinner>
        </VStack>
      </Container>
    </ScrollView>
  );
}

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

const NearbyDinner = () => {
  const { color } = getTokens();

  return (
    <VStack space={"$4"}>
      <HStack alignItems={"center"}>
        <TitleThree flex={1} fontWeight={"$semibold"}>
          Dinner nearby
        </TitleThree>
        <Button
          alignSelf={"flex-end"}
          textColor={useColorModeValue("$primary.500", "$primary.300")}
          variant="tertiary"
          size="sm"
        >
          More...
        </Button>
      </HStack>
      <VStack space={"$2"}>
        {places.map((item, index) => (
          <HStack key={index}>
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
                <Footnote
                  color={useColorModeValue(
                    "$primaryGray.600",
                    "$primaryGray.300"
                  )}
                >
                  {item.reviews} reviews
                </Footnote>
              </HStack>
              <HStack space={"$1"}>
                <MapPin
                  size={16}
                  color={useColorModeValue(
                    color["primaryGray.600"].val,
                    color["primaryGray.300"].val
                  )}
                ></MapPin>
                <Footnote
                  color={useColorModeValue(
                    "$primaryGray.600",
                    "$primaryGray.300"
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
