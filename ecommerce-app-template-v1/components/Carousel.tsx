import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  TitleThree,
  FlatList,
  Pressable,
  Box,
  Button,
  HStack,
  useColorModeValue,
} from "@spirokit/core";
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

const Carousel: React.FC<CarouselProps> = (props) => {
  const { title, items } = props;
  const navigation = useNavigation();

  const getBoxWidth = () => {
    if (isWeb) {
      return 72;
    } else {
      return `${(Dimensions.get("screen").width * 3) / 5}px`;
    }
  };

  return (
    <VStack space={4}>
      <VStack space={4}>
        <HStack alignItems={"center"}>
          <VStack flex={1}>
            <TitleThree fontWeight={"semibold"}>{title}</TitleThree>
          </VStack>
          <VStack>
            <Button
              alignSelf={"flex-end"}
              width="auto"
              onPress={() => navigation.navigate("Section", { title })}
              textColor={useColorModeValue("primaryGray.900", "primary.300")}
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
            marginRight={isWeb ? 0 : -4}
            data={items}
            pagingEnabled={true}
            windowSize={6}
            initialNumToRender={6}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                flex={1}
                onPress={() => {
                  navigation.navigate("Detail");
                }}
                shadow={1}
                marginRight={4}
                marginBottom={isWeb ? 4 : 0}
              >
                <Box width={getBoxWidth()}>
                  <Image
                    alt={item.alt}
                    width="full"
                    height={isWeb ? 96 : 48}
                    source={{ uri: item.assetUrl }}
                    borderRadius="lg"
                  ></Image>
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
