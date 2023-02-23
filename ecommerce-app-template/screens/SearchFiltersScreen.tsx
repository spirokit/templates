import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Button,
  HStack,
  VStack,
  useColorModeValue,
  TitleThree,
  Body,
  Pressable,
  VerticalCard,
  Image,
  Subhead,
  Box,
  ZStack,
  useTheme,
} from "@spirokit/core";
import React, { memo, useState } from "react";
import { ScrollView } from "react-native";
import BackButton from "../components/BackButton";
import { GlobalParamList } from "../navigation/GlobalParamList";

export type Filter = { value: string; type: string };

const orderByFilters: Filter[] = [
  {
    type: "OrderBy",
    value: "Traveler ranking",
  },
  {
    type: "OrderBy",
    value: "Relevance",
  },
];

const priceFilters: Filter[] = [
  {
    type: "Price",
    value: "$",
  },
  {
    type: "Price",
    value: "$$",
  },
  {
    type: "Price",
    value: "$$$",
  },
];

const categoryFilters: CategoryFilter[] = [
  {
    type: "Category",
    value: "Shoes",
    assetUrl: "https://i.imgur.com/BavNTR3.png",
  },
  {
    type: "Category",
    value: "Outerwear",
    assetUrl: "https://i.imgur.com/Dz8ZcLL.png",
  },
  {
    type: "Category",
    value: "Jeans",
    assetUrl: "https://i.imgur.com/qoyCPRL.png",
  },
  {
    type: "Category",
    value: "Dresses",
    assetUrl: "https://i.imgur.com/QUNzsjJ.png",
  },
];

type SearchFilterProps = StackScreenProps<GlobalParamList, "SearchFilters">;

const SearchFilters = (props: SearchFilterProps) => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>(
    props.route.params?.activeFilters ?? []
  );
  const [bottomPadding, setBottomPadding] = useState<number>(0);
  const { colors } = useTheme();
  const navigation = useNavigation();

  const onFilterSelected = (filter: Filter) => {
    const exists = activeFilters.find(
      (f) => f.type === filter.type && f.value === filter.value
    );

    if (exists) {
      setActiveFilters(
        activeFilters.filter(
          (i) => i.value !== filter.value && i.type !== filter.type
        )
      );
      return;
    }

    const newFilters = activeFilters.filter((i) => i.type !== filter.type);
    newFilters.push(filter);
    setActiveFilters(newFilters);
  };

  const onClearFilters = () => {
    setActiveFilters([]);
  };

  const styles = {
    clearFiltersIconColor: useColorModeValue("primary.500", "primary.300"),
  };

  return (
    <>
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
        <VStack
          flex={1}
          space={4}
          padding={4}
          marginBottom={`${bottomPadding}px`}
        >
          <HStack space={4} alignItems="center">
            <BackButton></BackButton>
            <TitleThree flex={1} fontWeight="semibold">
              Filters
            </TitleThree>
            <Button
              width="auto"
              variant="tertiary"
              size="xs"
              onPress={() => onClearFilters()}
            >
              Clear
            </Button>
          </HStack>

          <FilterCriteria
            title="Order by"
            data={orderByFilters}
            activeFilters={activeFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></FilterCriteria>
          <FilterCriteria
            title="Price"
            activeFilters={activeFilters}
            data={priceFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></FilterCriteria>
          <Categories
            activeFilters={activeFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></Categories>
        </VStack>
      </ScrollView>
      <Box
        onLayout={(event) => setBottomPadding(event.nativeEvent.layout.height)}
        position="absolute"
        bottom={0}
        padding={4}
        width="full"
        justifyContent="flex-end"
      >
        <Button
          onPress={() =>
            navigation.navigate("Search", {
              activeFilters: activeFilters,
            })
          }
        >
          Apply filters
        </Button>
      </Box>
    </>
  );
};

const FilterCriteria = (props: {
  activeFilters: Filter[];
  title: string;
  data: Filter[];
  onFilterSelected: (filter: Filter) => void;
}) => {
  const { title, data, onFilterSelected, activeFilters } = props;

  return (
    <VStack space={2}>
      <Body>{title}</Body>
      <HStack space={2} width="full" flexWrap="wrap">
        {data.map((item, index) => (
          <Button
            key={`${item.type}-${index}`}
            onPress={() => onFilterSelected(item)}
            size="xs"
            variant={
              activeFilters.find(
                (f) => f.value === item.value && f.type === item.type // This applies conditional styles based on the state of the filter
              )
                ? "primary"
                : "secondary"
            }
            marginBottom={2}
          >
            {item.value}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

type CategoryFilter = Filter & { assetUrl: string };
const Categories = memo(
  (props: {
    activeFilters: Filter[];
    onFilterSelected: (filter: Filter) => void;
  }) => {
    const { activeFilters, onFilterSelected } = props;

    return (
      <VStack space={2} flex={1}>
        <Body>Category</Body>
        <VStack space={4}>
          {categoryFilters.map((item) => (
            <Pressable
              key={item.assetUrl}
              onPress={() => {
                onFilterSelected({
                  type: item.type,
                  value: item.value,
                });
              }}
            >
              <ZStack height={32}>
                <VerticalCard
                  height={32}
                  TitleComponent={<Subhead>{item.value}</Subhead>}
                  AssetComponent={
                    <Image
                      alt={item.value}
                      source={{ uri: item.assetUrl }}
                    ></Image>
                  }
                ></VerticalCard>
                <Box
                  height={"full"}
                  width="full"
                  backgroundColor={
                    activeFilters.find(
                      (af) => af.type === item.type && af.value === item.value
                    ) !== undefined
                      ? "primary.500:alpha.20"
                      : "transparent"
                  }
                  flex={1}
                ></Box>
              </ZStack>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    );
  }
);

export default SearchFilters;
