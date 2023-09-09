import {
  VStack,
  Image,
  TitleThree,
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
  Flex,
} from "@spirokit/ui";
import { router } from "expo-router";
import React, { memo } from "react";

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
          <Flex
            flexDirection="column"
            //@ts-ignore
            $gtLg={{ overflowX: "scroll", flexDirection: "row" }}
          >
            {items.map((item, index) => {
              return (
                <Box
                  key={index}
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
                  marginBottom={"$4"}
                  width="$full"
                  $gtLg={{
                    width: "$1/3",
                  }}
                >
                  {variant == "vertical" ? (
                    <VerticalCard
                      contentMode="floating"
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
              );
            })}
          </Flex>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default memo(Carousel);
