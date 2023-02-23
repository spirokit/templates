import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
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
  Center,
  Pressable,
  useColorMode,
  Subhead,
  TitleThree,
} from "@spirokit/core";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import {
  FilterIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "react-native-heroicons/outline";

import { FilterIcon as FilterIconSolid } from "react-native-heroicons/solid";

import BackButton from "../components/BackButton";
import {
  GlobalParamList,
  ScreenNavigationProp,
} from "../navigation/GlobalParamList";
import { Filter } from "./SearchFiltersScreen";
import NoResultsLightIcon from "../assets/no-results-light.png";
import NoResultsDarkIcon from "../assets/no-results-dark.png";

const screenWidth = Dimensions.get("window").width;
const imageWidth = (screenWidth - 32) / 2; // 32 for the left and right margin (16 each)

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

type SearchProps = StackScreenProps<GlobalParamList, "Search">;

const SearchScreen = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const { colorMode } = useColorMode();

  const styles = {
    filtersIconColor: useColorModeValue("primary.500", "primary.300"),
  };
  const NoResultsIcon = useColorModeValue(
    NoResultsLightIcon,
    NoResultsDarkIcon
  );
  const noResultsTextColor = useColorModeValue(
    "primaryGray.700",
    "primary.300"
  );

  const [results, setResults] = useState<ItemProps[]>(items);
  const [activeFilters, setActiveFilters] = useState<Filter[]>(
    props.route.params?.activeFilters ?? []
  );

  const navigation = useNavigation<ScreenNavigationProp>();

  const onClearActiveFilters = () => {
    setActiveFilters([]);
  };

  useEffect(() => {
    if (props.route.params?.activeFilters) {
      setActiveFilters(props.route.params.activeFilters);
    }
  }, [props.route.params?.activeFilters]);

  const onSearchByTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setResults(items.filter((item) => item.title.includes(searchTerm)));
  };

  return (
    <VStack
      space={4}
      padding={4}
      flex={1}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
    >
      <VStack space={4}>
        <HStack space={4} alignItems="center">
          <BackButton></BackButton>
          <SearchBox
            onChangeText={(searchTerm) => onSearchByTerm(searchTerm)}
            flex={1}
          ></SearchBox>
          <Button
            width="auto"
            textColor={styles.filtersIconColor}
            variant="tertiary"
            size="sm"
            IconLeftComponent={
              activeFilters.length ? FilterIconSolid : FilterIcon
            }
            onPress={() =>
              navigation.navigate("SearchFilters", { activeFilters })
            }
          ></Button>
        </HStack>

        {activeFilters.length > 0 ? (
          <HStack
            width="full"
            space={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack space={2} flex={1} flexWrap="wrap">
              {activeFilters.map((af, index) => (
                <Badge marginY={1} key={`${af.type}-${af.value}-${index}`}>
                  {af.value}
                </Badge>
              ))}
            </HStack>
            <Button
              size="xs"
              variant="secondary"
              width="auto"
              onPress={() => onClearActiveFilters()}
            >
              Clear
            </Button>
          </HStack>
        ) : null}
      </VStack>
      <FlatList
        ListFooterComponent={() => <Box safeAreaBottom></Box>}
        data={results}
        flexWrap={"wrap"}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, width: "100%" }}
        bounces={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        ListEmptyComponent={() => (
          <Center width="full" flex={1}>
            <Image
              source={NoResultsIcon}
              alt="No results to display"
              width={screenWidth / 2}
              height={screenWidth / 2}
              resizeMode="contain"
            ></Image>
            <Body textAlign="center" color={noResultsTextColor}>
              No results to display for “{searchTerm}”
            </Body>
          </Center>
        )}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigation.navigate("Detail")}>
            <Box
              marginLeft={index % 2 == 0 ? 0 : 2}
              marginRight={index % 2 == 0 ? 2 : 0}
              width={`${imageWidth - 8}px`}
            >
              <VerticalCard
                height={56}
                BadgeComponent={
                  <Button
                    size="sm"
                    IconLeftComponent={ShoppingBagIcon}
                    width="auto"
                    textColor="black"
                    colorMode={colorMode}
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
                    <TitleThree fontWeight="light">
                      ${item.price.toFixed(2)}
                    </TitleThree>
                  </>
                }
              ></VerticalCard>
            </Box>
          </Pressable>
        )}
      ></FlatList>
    </VStack>
  );
};

export default SearchScreen;
