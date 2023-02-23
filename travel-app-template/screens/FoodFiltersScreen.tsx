import {
  Badge,
  Button,
  HStack,
  Pressable,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
} from "@spirokit/core";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import BackButton from "../components/BackButton";

const FoodFiltersScreen = () => {
  const { colors } = useTheme();

  const onFilterTapped = (filterName: string, value: string) => {
    // Implement logic to handle filter selection
  };

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
      <HStack
        safeArea
        padding={4}
        width="full"
        space={4}
        alignItems="center"
        backgroundColor={useColorModeValue("white", "primaryDark.0")}
      >
        <BackButton></BackButton>
        <TitleTwo fontWeight={"bold"}>Search filters</TitleTwo>
      </HStack>
      <VStack
        borderTopRadius={16}
        padding={4}
        flex={1}
        space={6}
        width="full"
        backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.1")}
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
        <HStack space={4}>
          <Button
            size="sm"
            variant="secondary"
            textColor={useColorModeValue("primary.500", "primary.300")}
          >
            Clear filters
          </Button>
          <Button size="sm">Apply</Button>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

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
    <VStack space={2}>
      <TitleThree flex={1} fontWeight={"semibold"}>
        {title}
      </TitleThree>
      <HStack flexWrap={"wrap"} space={2}>
        {Object.keys(options).map((key: string) => (
          <Pressable key={key} onPress={() => onPress(key)}>
            <Badge marginBottom={2}>{options[key]}</Badge>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

export default memo(FoodFiltersScreen);
