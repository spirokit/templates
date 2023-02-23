import {
  HStack,
  TitleThree,
  VStack,
  useColorModeValue,
  FlatList,
  Image,
  VerticalCard,
  Box,
  Button,
  Pressable,
  Subhead,
  useColorMode,
} from "@spirokit/core";
import React from "react";
import { Dimensions, View } from "react-native";
import { ShoppingBagIcon } from "react-native-heroicons/outline";
import BackButton from "../components/BackButton";
import type { StackScreenProps } from "@react-navigation/stack";

import { GlobalParamList } from "../navigation/GlobalParamList";
import { useNavigation } from "@react-navigation/native";

type SectionProps = StackScreenProps<GlobalParamList, "Section">;

const imageWidth = (Dimensions.get("window").width - 32) / 2; // 32 for the left and right margin (16 each)
const items: { id: number; assetUrl: string; title: string; price: number }[] =
  [
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

const SectionScreen = (props: SectionProps) => {
  const { route } = props;
  const navigation = useNavigation();
  const { colorMode } = useColorMode();

  const title = route.params?.title || "Best Sellers";

  return (
    <VStack
      space={4}
      padding={4}
      flex={1}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
    >
      <HStack space={4} alignItems="center">
        <BackButton></BackButton>
        <TitleThree fontWeight="semibold">{title}</TitleThree>
      </HStack>

      <FlatList
        data={items}
        flexWrap={"wrap"}
        numColumns={2}
        bounces={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
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
                    <Subhead>{item.title}</Subhead>
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

export default SectionScreen;
