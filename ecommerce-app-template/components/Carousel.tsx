import {
  VStack,
  Image,
  TitleThree,
  FlatList,
  Box,
  Button,
  HStack,
  useColorModeValue,
  ScrollView,
} from "@spirokit/ui";
import { router } from "expo-router";
import React, { memo } from "react";
import { Dimensions, Platform } from "react-native";

export type CarouselItem = {
  assetUrl?: string;
  id: number;
  alt?: string;
};

type CarouselProps = {
  title: string;
  items: CarouselItem[];
};

const isWeb = Platform.OS === "web";
const screenWidth = Dimensions.get("screen").width;

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, items } = props;

  return (
    <VStack space={"$4"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack space={"$4"}>
          <HStack alignItems={"center"}>
            <VStack flex={1}>
              <TitleThree fontWeight={"$semibold"}>{title}</TitleThree>
            </VStack>
            <VStack>
              <Button
                alignSelf={"flex-end"}
                onPress={() =>
                  router.push({
                    pathname: "/explore/[title]",
                    params: {
                      title: title,
                    },
                  })
                }
                textColor={useColorModeValue(
                  "$primaryGray.900",
                  "$primary.300"
                )}
                variant="tertiary"
                size="sm"
              >
                More...
              </Button>
            </VStack>
          </HStack>
          <VStack>
            <FlatList
              horizontal={true}
              estimatedItemSize={96 * 4}
              _container={{
                paddingBottom: "$1",
                marginRight: -16,
                overflow: "hidden",
              }}
              data={items}
              pagingEnabled={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Box
                  onPress={() => {
                    router.push({
                      pathname: "detail/[id]",
                      params: {
                        id: item.id,
                      },
                    });
                  }}
                  cursor="pointer"
                  marginRight={"$4"}
                  marginBottom={isWeb ? "$4" : 0}
                >
                  <Image
                    alt={item.alt}
                    source={{
                      uri: item.assetUrl,
                      height: 96 * 4,
                      width: screenWidth / 1.5,
                    }}
                    borderRadius="$3"
                  ></Image>
                </Box>
              )}
            ></FlatList>
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default memo(Carousel);
