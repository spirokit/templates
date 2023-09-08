import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  ScrollView,
  Subhead,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/ui";
import BackButton from "components/BackButton";
import { router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BrowseCategoryFilters() {
  const { title } = useLocalSearchParams();

  const onFilterTapped = (filterName: string, value: string) => {
    // Implement logic to handle filter selection
  };

  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      width={"$full"}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      backgroundColor={useColorModeValue("$white", "$primaryDark.0")}
    >
      <Container width="$full" flex={1}>
        <HStack
          marginTop={"$4"}
          padding={"$4"}
          width="$full"
          space={"$4"}
          alignItems="center"
          paddingTop={top}
        >
          <BackButton></BackButton>
          <VStack>
            <TitleTwo fontWeight={"$bold"}>Search filters</TitleTwo>
            <Subhead>{title}</Subhead>
          </VStack>
        </HStack>
        <VStack
          padding={"$4"}
          flex={1}
          space={"$6"}
          width="$full"
          backgroundColor={useColorModeValue(
            "$primaryGray.100",
            "$primaryDark.1"
          )}
        >
          <FilterCriteria
            onPress={(value) => onFilterTapped("sortBy", value)}
            title="Sort by"
            options={{
              ranking: "Traveler ranking",
              relevance: "Relevance",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("establishment", value)}
            title="Establishment Type"
            options={{
              restaurant: "Restaurants",
              bites: "Quick bites",
              bakeries: "Bakeries",
              dessert: "Dessert",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("features", value)}
            title="Restaurant Features"
            options={{
              seating: "Seating",
              wheelchair: "Wheelchair accessible",
              takeout: "Takeout",
              tableService: "Table Service",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("meals", value)}
            title="Meals"
            options={{
              breakfast: "Breakfast",
              brunch: "Brunch",
              lunch: "Lunch",
              dinner: "Dinner",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("price", value)}
            title="Price"
            options={{
              cheap: "$",
              affordable: "$$ - $$$",
              expensive: "$$$$",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("online", value)}
            title="Online Options"
            options={{
              delivery: "Online delivery",
              reservations: "Online reservations",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("cuisine", value)}
            title="Cuisine Type"
            options={{
              american: "American",
              latin: "Latin",
              spanish: "Spanish",
              italian: "Italian",
            }}
          ></FilterCriteria>
          <FilterCriteria
            onPress={(value) => onFilterTapped("rating", value)}
            title="Traveler rating"
            options={{
              excellent: "5 stars",
              good: "4 stars",
              regular: "3 stars",
            }}
          ></FilterCriteria>
          <HStack space={"$4"}>
            <Button
              onPress={() => router.back()}
              size="sm"
              flex={1}
              variant="secondary"
              textColor={useColorModeValue("$primary.500", "$primary.300")}
            >
              Clear filters
            </Button>
            <Button flex={1} size="sm" onPress={() => router.back()}>
              Apply
            </Button>
          </HStack>
        </VStack>
      </Container>
    </ScrollView>
  );
}

const FilterCriteria = ({
  title,
  onPress,
  options,
}: {
  title: string;
  options: { [key: string]: string };
  onPress: (value: string) => void;
}) => {
  return (
    <VStack space={"$2"}>
      <TitleThree flex={1} fontWeight={"$semibold"}>
        {title}
      </TitleThree>
      <HStack flexWrap={"wrap"} space={"$2"}>
        {Object.keys(options).map((key: string) => (
          <Box key={key} onPress={() => onPress(key)}>
            <Badge
              _container={{
                marginBottom: "$2",
              }}
            >
              {options[key]}
            </Badge>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};
