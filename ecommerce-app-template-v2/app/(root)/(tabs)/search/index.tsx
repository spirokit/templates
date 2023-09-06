import {
  HStack,
  VStack,
  useColorModeValue,
  FlatList,
  Image,
  VerticalCard,
  Box,
  Button,
  SearchBox,
  Badge,
  Body,
  Subhead,
  TitleThree,
  Container,
} from "@spirokit/ui";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageSourcePropType, Platform } from "react-native";
import {
  Filter as FilterIcon,
  ShoppingBag,
  FilterX,
} from "@tamagui/lucide-icons";

import NoResultsLightIcon from "assets/no-results-light.png";
import NoResultsDarkIcon from "assets/no-results-dark.png";
import { router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Filter } from "types/Filter";

const screenWidth = Dimensions.get("window").width;

type ItemProps = { id: number; assetUrl: string; title: string; price: number };
const items: ItemProps[] = [
  {
    id: 1,
    assetUrl: "https://i.imgur.com/CpKlRgU.png",
    title: "Play Hard t-shirt",
    price: 29,
  },
  {
    id: 2,
    assetUrl: "https://i.imgur.com/qsW2nsI.png",
    title: "Rainbox t-shirt",
    price: 25,
  },
  {
    id: 3,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
    title: "PAC-MAN t-shirt",
    price: 43,
  },
  {
    id: 4,
    assetUrl: "https://i.imgur.com/mM9tFLP.png",
    title: "Solar t-shirt",
    price: 45,
  },
  {
    id: 5,
    assetUrl: "https://i.imgur.com/K2D1aIE.png",
    title: "Derby t-shirt",
    price: 30,
  },
  {
    id: 6,
    assetUrl: "https://i.imgur.com/odSZ3Gv.png",
    title: "Regrets t-shirt",
    price: 40,
  },
];

const isWeb = Platform.OS === "web";

export const mapQueryParamsToFilters = (queryParams?: string[]) => {
  if (!queryParams) {
    return [];
  }
  return queryParams.map((af) => {
    const [type, value] = af.split(":");
    return {
      type,
      value,
    } as Filter;
  });
};

const mapFiltersToQueryParams = (filters: Filter[]) => {
  return filters.map((f) => `${f.type}:${f.value}`);
};

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const { bottom } = useSafeAreaInsets();
  const params = useLocalSearchParams<{
    activeFilters: string;
  }>();

  const styles = {
    filtersIconColor: useColorModeValue("$primary.500", "$primary.300"),
    noResultsTextColor: useColorModeValue("$primaryGray.700", "$primary.300"),
    containerBgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  const NoResultsIcon = useColorModeValue(
    NoResultsLightIcon,
    NoResultsDarkIcon
  ) as ImageSourcePropType;

  const [results, setResults] = useState<ItemProps[]>(items);
  const [activeFilters, setActiveFilters] = useState<Filter[]>(
    params.activeFilters
      ? mapQueryParamsToFilters(params.activeFilters.split(","))
      : []
  );

  const onClearActiveFilters = () => {
    setActiveFilters([]);
  };

  const onSearchByTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setResults(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const [listWidth, setListWidth] = useState<number>(0);

  useEffect(() => {
    if (params.activeFilters) {
      setActiveFilters(
        mapQueryParamsToFilters(params.activeFilters.split(","))
      );
    }
  }, [params.activeFilters]);

  return (
    <Box width="$full" flex={1} backgroundColor={styles.containerBgColor}>
      <Container width={"$full"} flex={1}>
        <VStack space={"$4"} padding={"$4"} flex={1} width="$full">
          <VStack space={"$4"}>
            <HStack space={"$4"} alignItems="center">
              <SearchBox
                onChangeText={(searchTerm) => onSearchByTerm(searchTerm)}
                flex={1}
              ></SearchBox>
              <Button
                textColor={styles.filtersIconColor}
                variant="tertiary"
                size="sm"
                IconLeftComponent={activeFilters.length ? FilterX : FilterIcon}
                onPress={() =>
                  router.push({
                    pathname: "/search/filters",
                    params: {
                      activeFilters: mapFiltersToQueryParams(activeFilters),
                    },
                  })
                }
              ></Button>
            </HStack>

            {activeFilters.length > 0 ? (
              <HStack
                width="$full"
                space={"$4"}
                justifyContent="space-between"
                alignItems="center"
              >
                <HStack space={"$2"} flex={1} flexWrap="wrap">
                  {activeFilters.map((af, index) => (
                    <Badge
                      _container={{ marginVertical: "$1" }}
                      key={`${af.type}-${af.value}-${index}`}
                    >
                      {af.value}
                    </Badge>
                  ))}
                </HStack>
                <Button
                  size="sm"
                  variant="secondary"
                  onPress={() => onClearActiveFilters()}
                >
                  Clear
                </Button>
              </HStack>
            ) : null}
          </VStack>
          <FlatList
            onLayout={(e) => {
              const { width } = e.nativeEvent.layout;
              setListWidth(width);
            }}
            ListFooterComponent={() => <Box bottom={bottom}></Box>}
            data={results}
            numColumns={2}
            estimatedItemSize={56 * 4}
            bounces={false}
            ItemSeparatorComponent={() => <Box height="$4"></Box>}
            ListEmptyComponent={() => (
              <Box space="$4" justifyContent="center" alignItems="center">
                <Image
                  source={NoResultsIcon}
                  alt="No results to display"
                  width={isWeb ? screenWidth / 3 : screenWidth / 2}
                  height={isWeb ? screenWidth / 3 : screenWidth / 2}
                  resizeMode="contain"
                ></Image>
                <Body textAlign="center" color={styles.noResultsTextColor}>
                  No results to display for “{searchTerm}”
                </Body>
              </Box>
            )}
            renderItem={({ item, index }) => (
              <Box
                onPress={() =>
                  router.push({
                    pathname: "detail/[id]",
                    params: {
                      id: item.id,
                    },
                  })
                }
                width={(listWidth - 16) / 2}
                cursor="pointer"
                marginLeft={index % 2 == 0 ? 0 : "$2"}
                marginRight={index % 2 == 0 ? "$2" : 0}
              >
                <VerticalCard
                  _container={{
                    height: 56 * 4,
                  }}
                  BadgeComponent={
                    <Button
                      colorMode="dark"
                      size="sm"
                      IconLeftComponent={ShoppingBag}
                      textColor="black"
                    ></Button>
                  }
                  AssetComponent={
                    <Image
                      alt={item.title}
                      source={{ uri: item.assetUrl }}
                    ></Image>
                  }
                  TitleComponent={
                    <>
                      <Subhead numberOfLines={1}>{item.title}</Subhead>
                      <TitleThree fontWeight="$light">
                        ${item.price.toFixed(2)}
                      </TitleThree>
                    </>
                  }
                ></VerticalCard>
              </Box>
            )}
          ></FlatList>
        </VStack>
      </Container>
    </Box>
  );
};

export default SearchScreen;
