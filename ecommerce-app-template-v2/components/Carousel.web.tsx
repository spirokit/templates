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
import React, { memo, useRef, useState } from "react";
import { Dimensions } from "react-native";

export type CarouselItem = {
  assetUrl?: string;
  id: number;
  alt?: string;
};

type CarouselProps = {
  title: string;
  items: CarouselItem[];
};

const screenWidth = Dimensions.get("screen").width;

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, items } = props;

  const flatlistWidth = useRef(0);
  const [pageBreakpoint, setPageBreakpoint] = useState<"mobile" | "desktop">(
    screenWidth > 768 ? "desktop" : "mobile"
  );

  return (
    <VStack space={"$4"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack space={"$4"}>
          <HStack alignItems={"center"}>
            <TitleThree flex={1} fontWeight={"$semibold"}>
              {title}
            </TitleThree>
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
              textColor={useColorModeValue("$primaryGray.900", "$primary.300")}
              variant="tertiary"
              size="sm"
            >
              More...
            </Button>
          </HStack>

          {pageBreakpoint ? (
            <FlatList
              numColumns={pageBreakpoint === "mobile" ? 1 : 3}
              estimatedItemSize={96 * 4}
              _container={{
                flexWrap: "wrap",
                paddingBottom: "$1",
              }}
              onLayout={(event) => {
                flatlistWidth.current = Math.floor(
                  event.nativeEvent.layout.width
                );
                setPageBreakpoint(
                  flatlistWidth.current > 768 ? "desktop" : "mobile"
                );
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
                  overflow="hidden"
                  marginBottom="$4"
                >
                  <Image
                    alt={item.alt}
                    source={{
                      uri: item.assetUrl,
                    }}
                    height={96 * 4}
                    resizeMode="cover"
                    width={
                      pageBreakpoint === "mobile"
                        ? flatlistWidth.current - 16
                        : flatlistWidth.current / 3 - 16
                    }
                    borderRadius="$3"
                  ></Image>
                </Box>
              )}
            ></FlatList>
          ) : null}
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default memo(Carousel);
