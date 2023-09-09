import {
  VStack,
  Image,
  TitleThree,
  Box,
  Button,
  HStack,
  useColorModeValue,
  ScrollView,
  Flex,
} from "@spirokit/ui";
import { router } from "expo-router";
import React, { memo } from "react";

export type CarouselItem = {
  assetUrl?: string;
  id: number;
  alt?: string;
};

type CarouselProps = {
  title: string;
  items: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, items } = props;

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

          <Flex
            flexDirection="column"
            $gtLg={{
              //@ts-ignore
              overflowX: "scroll",
              flexDirection: "row",
            }}
          >
            {items.map((item) => {
              return (
                <Box
                  key={item.id}
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
                  marginRight={"$4"}
                  marginBottom="$4"
                  width="$full"
                  $gtLg={{
                    width: "$1/3",
                  }}
                >
                  <Image
                    alt={item.alt}
                    source={{
                      uri: item.assetUrl,
                    }}
                    height={96 * 4}
                    resizeMode="cover"
                    borderRadius="$3"
                  ></Image>
                </Box>
              );
            })}
          </Flex>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default memo(Carousel);
