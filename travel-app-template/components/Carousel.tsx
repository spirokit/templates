import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  TitleThree,
  Subhead,
  VerticalCard,
  Badge,
  Body,
  FlatList,
  Pressable,
  Box,
  Button,
  HorizontalCard,
  HStack,
  useColorModeValue,
} from "@spirokit/core";
import React, { memo } from "react";
import { Dimensions } from "react-native";
import { ScreenNavigationProp } from "../navigation/GlobalParamList";

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

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, description, items, variant = "vertical" } = props;
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <VStack space={4}>
      <VStack space={4}>
        <HStack alignItems={"center"}>
          <VStack flex={1}>
            <TitleThree fontWeight={"semibold"}>{title}</TitleThree>
            {description ? (
              <Subhead
                numberOfLines={2}
                color={useColorModeValue("primaryGray.600", "primaryGray.300")}
              >
                {description}
              </Subhead>
            ) : null}
          </VStack>
          <VStack>
            <Button
              alignSelf={"flex-end"}
              width="auto"
              textColor={useColorModeValue("primary.500", "primary.300")}
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
            paddingBottom={1}
            marginRight={-4}
            data={items}
            pagingEnabled={true}
            windowSize={6}
            initialNumToRender={6}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                flex={1}
                onPress={() => {
                  navigation.navigate("Detail", {});
                }}
                shadow={1}
                marginRight={4}
              >
                <Box
                  width={`${
                    (Dimensions.get("screen").width *
                      (variant == "horizontal" ? 4 : 3)) /
                    5
                  }px`}
                >
                  {variant == "vertical" ? (
                    <VerticalCard
                      contentMode="fixed"
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
                        <Body fontWeight={"medium"} numberOfLines={2}>
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
              </Pressable>
            )}
          ></FlatList>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default memo(Carousel);
