import {
  Box,
  Button,
  Container,
  FlatList,
  HStack,
  Image,
  Subhead,
  TitleThree,
  useColorModeValue,
  VerticalCard,
  VStack,
} from "@spirokit/ui";
import { ShoppingBag } from "@tamagui/lucide-icons";
import BackButton from "components/BackButton";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const SectionScreen = () => {
  const { title } = useLocalSearchParams<{
    title: string;
  }>();

  const backgroundColor = useColorModeValue(
    "$primaryGray.100",
    "$primaryDark.24"
  );

  const isWeb = Platform.OS === "web";

  const [listWidth, setListWidth] = React.useState<number>();

  return (
    <Container
      backgroundColor={backgroundColor}
      flex={1}
      width="$full"
      paddingHorizontal="$4"
    >
      <VStack space="$4" flex={1}>
        <HStack space={"$4"} alignItems="center" marginTop="$4">
          {!isWeb ? <BackButton></BackButton> : null}
          <TitleThree fontWeight="$semibold">
            {decodeURIComponent(title)}
          </TitleThree>
        </HStack>

        <FlatList
          data={items}
          onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setListWidth(width);
          }}
          numColumns={2}
          estimatedItemSize={100}
          ItemSeparatorComponent={() => <Box height={"$4"}></Box>}
          renderItem={({ item, index }) => (
            <Box
              onPress={() =>
                router.push({
                  pathname: "/detail/[id]",
                  params: {
                    id: item.id,
                  },
                })
              }
              marginLeft={index % 2 == 0 ? 0 : "$2"}
              marginRight={index % 2 == 0 ? "$2" : 0}
              cursor="pointer"
              width={(listWidth - 16) / 2}
            >
              <VerticalCard
                _container={{
                  height: 56 * 4,
                }}
                BadgeComponent={
                  <Button
                    size="sm"
                    IconLeftComponent={ShoppingBag}
                    colorMode="dark"
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
  );
};

export default SectionScreen;

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
    {
      id: 7,
      assetUrl: "https://i.imgur.com/CpKlRgU.png",
      title: "Play Hard t-shirt",
      price: 29,
    },
    {
      id: 8,
      assetUrl: "https://i.imgur.com/qsW2nsI.png",
      title: "Rainbox t-shirt",
      price: 25,
    },
    {
      id: 9,
      assetUrl: "https://i.imgur.com/rSvwWy3.png",
      title: "PAC-MAN t-shirt",
      price: 43,
    },
    {
      id: 10,
      assetUrl: "https://i.imgur.com/mM9tFLP.png",
      title: "Solar t-shirt",
      price: 45,
    },
    {
      id: 11,
      assetUrl: "https://i.imgur.com/K2D1aIE.png",
      title: "Derby t-shirt",
      price: 30,
    },
    {
      id: 12,
      assetUrl: "https://i.imgur.com/odSZ3Gv.png",
      title: "Regrets t-shirt",
      price: 40,
    },
  ];
