import {
  Button,
  HStack,
  VStack,
  useColorModeValue,
  TitleThree,
  Body,
  VerticalCard,
  Image,
  Subhead,
  Box,
  ZStack,
  ScrollView,
  getTokens,
  Container,
} from "@spirokit/ui";
import React, { memo, useState } from "react";
import { Platform } from "react-native";
import { Filter } from "../../../../types/Filter";
import BackButton from "../../../../components/BackButton";
import { router, useLocalSearchParams } from "expo-router";
import { mapQueryParamsToFilters } from ".";
import Wrapper from "components/Wrapper";
import { useColorWithOpacity } from "@spirokit/core";

const isWeb = Platform.OS === "web";

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

const SearchFilters = () => {
  const params = useLocalSearchParams<{
    activeFilters?: string;
  }>();

  const styles = {
    containerBgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  const [activeFilters, setActiveFilters] = useState<Filter[]>(
    params.activeFilters
      ? mapQueryParamsToFilters(params.activeFilters.split(","))
      : []
  );

  const [bottomPadding, setBottomPadding] = useState<number>(0);

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

  return (
    <Box width="$full" flex={1} backgroundColor={styles.containerBgColor}>
      <Container
        backgroundColor={styles.containerBgColor}
        width="$full"
        flex={1}
      >
        <Box flex={1}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <VStack
              flex={1}
              space={"$4"}
              padding={"$4"}
              width={"$full"}
              marginBottom={bottomPadding}
            >
              <HStack space={"$4"} alignItems="center">
                {!isWeb ? <BackButton></BackButton> : null}
                <TitleThree flex={1} fontWeight="$semibold">
                  Filters
                </TitleThree>
                <Button
                  variant="tertiary"
                  size="sm"
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
          <VStack
            onLayout={(event) =>
              setBottomPadding(event.nativeEvent.layout.height)
            }
            position="absolute"
            bottom={0}
            padding={"$4"}
            width={"$full"}
            alignItems="center"
            margin="auto"
            justifyContent="flex-end"
          >
            <Button
              width={"$full"}
              onPress={() =>
                router.push({
                  pathname: "/search",
                  params: {
                    activeFilters: activeFilters.map(
                      (af) => `${af.type}:${af.value}`
                    ),
                  },
                })
              }
            >
              Apply filters
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
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
    <VStack space={"$2"}>
      <Body>{title}</Body>
      <HStack space={"$2"} width="$full" flexWrap="wrap">
        {data.map((item, index) => (
          <Button
            key={`${item.type}-${index}`}
            onPress={() => onFilterSelected(item)}
            size="sm"
            variant={
              activeFilters.find(
                (f) => f.value === item.value && f.type === item.type // This applies conditional styles based on the state of the filter
              )
                ? "primary"
                : "secondary"
            }
            marginBottom={"$2"}
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
    const { color } = getTokens();
    const primaryWithOpacity = useColorWithOpacity(
      color["$primary.500"].val,
      0.2
    );

    return (
      <VStack space={"$2"} flex={1}>
        <Body>Category</Body>
        <VStack space={"$4"}>
          {categoryFilters.map((item) => (
            <Box
              key={item.assetUrl}
              onPress={() => {
                onFilterSelected({
                  type: item.type,
                  value: item.value,
                });
              }}
            >
              <ZStack height={isWeb ? "$64" : "$32"}>
                <VerticalCard
                  _container={{
                    height: isWeb ? 64 * 4 : 32 * 4,
                  }}
                  TitleComponent={<Subhead>{item.value}</Subhead>}
                  AssetComponent={
                    <Image
                      alt={item.value}
                      source={{ uri: item.assetUrl }}
                    ></Image>
                  }
                ></VerticalCard>
                <Box
                  height={"$full"}
                  width="$full"
                  backgroundColor={
                    activeFilters.find(
                      (af) => af.type === item.type && af.value === item.value
                    ) !== undefined
                      ? primaryWithOpacity
                      : "transparent"
                  }
                  flex={1}
                ></Box>
              </ZStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    );
  }
);

export default SearchFilters;
