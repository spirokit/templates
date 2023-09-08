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
  VerticalCard,
  Badge,
  HorizontalCard,
  Subhead,
  Body,
} from "@spirokit/ui";
import { router } from "expo-router";
import React, { memo } from "react";
import { Dimensions, Platform } from "react-native";

export type CarouselItem = {
  assetUrl?: string;
  title: string;
  description?: string;
  badge?: string;
  id: number;
};

type CarouselProps = {
  title: string;
  description?: string;
  variant?: "vertical" | "horizontal";
  items: CarouselItem[];
};

const isWeb = Platform.OS === "web";
const screenWidth = Dimensions.get("window").width;

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, items, variant = "vertical" } = props;

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
                  {variant == "vertical" ? (
                    <VerticalCard
                      contentMode="floating"
                      _container={{
                        height: isWeb ? 64 * 4 : 48 * 4,
                        width: screenWidth / 1.5,
                      }}
                      BadgeComponent={
                        item.badge ? <Badge>{item.badge}</Badge> : undefined
                      }
                      AssetComponent={
                        <Image
                          alt={item.title}
                          source={{ uri: item.assetUrl }}
                        ></Image>
                      }
                      TitleComponent={
                        <Body numberOfLines={2}>{item.title}</Body>
                      }
                      DescriptionComponent={
                        item.description ? (
                          <Subhead>{item.description}</Subhead>
                        ) : undefined
                      }
                    ></VerticalCard>
                  ) : (
                    <HorizontalCard
                      _container={{
                        height: isWeb ? 64 * 4 : 48 * 4,
                        width: screenWidth / 1.5,
                      }}
                      BadgeComponent={
                        item.badge ? <Badge>{item.badge}</Badge> : undefined
                      }
                      AssetLeftComponent={
                        <Image
                          alt={item.title}
                          source={{ uri: item.assetUrl }}
                        ></Image>
                      }
                      TitleComponent={
                        <Body fontWeight={"$medium"} numberOfLines={2}>
                          {item.title}
                        </Body>
                      }
                      DescriptionComponent={
                        item.description ? (
                          <Subhead numberOfLines={5}>
                            {item.description}
                          </Subhead>
                        ) : undefined
                      }
                    ></HorizontalCard>
                  )}
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
