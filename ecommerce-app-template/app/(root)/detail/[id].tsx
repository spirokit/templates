import {
  Body,
  Box,
  Button,
  HStack,
  ScrollView,
  Subhead,
  useColorModeValue,
  VStack,
  ZStack,
  Image,
  getTokens,
  Footnote,
  TitleTwo,
  Container,
} from "@spirokit/ui";
import { ChevronLeft, ChevronRight, Heart, Share } from "@tamagui/lucide-icons";
import BackButton from "components/BackButton";
import Score from "components/Score";
import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Detail = () => {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [amount, setAmount] = useState<number>(1);
  const isWeb = Platform.OS === "web";

  const [containerWidth, setContainerWidth] = useState<number>();

  const styles = {
    descriptionColor: useColorModeValue("$primaryGray.700", "$primaryGray.300"),
    backgroundColor: useColorModeValue("$primaryGray.100", "$primaryDark.24"),
    header: {
      backgroundColor: useColorModeValue("white", "$primaryDark.1"),
    },
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Box
        backgroundColor={styles.backgroundColor}
        justifyContent="flex-start"
        flex={1}
      >
        <Container
          //@ts-ignore
          onLayout={(e) => {
            setContainerWidth(e.nativeEvent.layout.width);
          }}
          flex={1}
          width={"$full"}
          $gtLg={{ width: "$2/3" }}
        >
          <Box justifyContent="flex-start" flex={1}>
            <ZStack
              height={screenHeight / 2}
              width="$full"
              alignItems="flex-start"
            >
              <Image
                alt="details image"
                resizeMode="cover"
                source={{
                  uri: "https://i.imgur.com/CpKlRgU.png",
                  width: containerWidth,
                  height: screenHeight / 2,
                }}
              ></Image>
              <HStack
                padding={"$4"}
                paddingTop={useSafeAreaInsets().top}
                width="$full"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                {!isWeb ? <BackButton colorMode="dark"></BackButton> : null}
                <VStack
                  space={"$2"}
                  width={isWeb ? "$full" : "auto"}
                  alignItems="flex-end"
                >
                  <Button
                    colorMode={"dark"}
                    textColor="black"
                    IconLeftComponent={Share}
                  ></Button>
                  <Button
                    colorMode={"dark"}
                    textColor="black"
                    IconLeftComponent={Heart}
                  ></Button>
                </VStack>
              </HStack>
            </ZStack>

            <VStack
              marginTop={-16}
              borderTopLeftRadius={16}
              borderTopRightRadius={16}
              padding={"$4"}
              flex={1}
              space={"$4"}
              width="$full"
              backgroundColor={styles.header.backgroundColor}
            >
              <Box>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                  width="$full"
                >
                  <Body fontWeight={"$medium"}>Play T-Shirt - 2021</Body>
                  <AmountCounter
                    amount={amount}
                    onAmountChanged={(value) => setAmount(value)}
                  ></AmountCounter>
                </HStack>
                <Subhead marginBottom={"$2"} color={styles.descriptionColor}>
                  Get ready to play hard in this bold white t-shirt featuring
                  the phrase "play hard" in bold, black letters.
                </Subhead>

                <ReviewsSummary></ReviewsSummary>
                <VStack space={"$6"} paddingVertical={"$6"}>
                  <SizeSelector
                    selectedSize={selectedSize}
                    onSizeSelected={(value) => setSelectedSize(value)}
                  ></SizeSelector>
                  <ColorSelector
                    selectedColor={selectedColor}
                    onColorSelected={(value) => setSelectedColor(value)}
                  ></ColorSelector>
                </VStack>
              </Box>

              <CallToAction></CallToAction>
            </VStack>
          </Box>
        </Container>
      </Box>
    </ScrollView>
  );
};

export default Detail;

const SizeSelector = (props: {
  selectedSize: string;
  onSizeSelected: (value: string) => void;
}) => {
  const styles = {
    selectedBorderColor: useColorModeValue("$primary.500", "$primary.300"),
    borderColor: useColorModeValue("$primary.500", "$primaryGray.500"),
    textColor: useColorModeValue("$black", "$primary.300"),
    backgroundColor: useColorModeValue("$primary.500", "$primary.300"),
  };
  return (
    <VStack space={"$1"}>
      <Subhead fontWeight="$bold">Select size</Subhead>
      <HStack space={"$2"}>
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <Box
            key={size}
            borderWidth={1}
            backgroundColor={
              props.selectedSize === size
                ? styles.backgroundColor
                : "transparent"
            }
            borderColor={
              props.selectedSize === size
                ? styles.selectedBorderColor
                : styles.borderColor
            }
            onPress={() => props.onSizeSelected(size)}
            paddingHorizontal={"$4"}
            paddingVertical={"$2"}
            borderRadius={8}
          >
            <Subhead
              color={props.selectedSize === size ? "black" : styles.textColor}
            >
              {size}
            </Subhead>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

const ColorSelector = (props: {
  selectedColor: string;
  onColorSelected: (value: string) => void;
}) => {
  const styles = {
    selectedBorderColor: useColorModeValue("$primary.500", "$primary.300"),
    borderColor: useColorModeValue("$primary.500", "$primaryGray.500"),
  };

  const { color } = getTokens();

  return (
    <VStack space={"$1"}>
      <Subhead fontWeight="$bold">Select color</Subhead>
      <HStack space={"$2"} alignItems="center">
        {[
          "$red.500",
          "$primaryGray.200",
          "$primaryGray.700",
          "$emerald.500",
        ].map((color) => (
          <Box
            key={color}
            onPress={() => props.onColorSelected(color)}
            borderWidth={2}
            backgroundColor={color}
            borderColor={
              props.selectedColor === color ? styles.selectedBorderColor : color
            }
            padding={"$4"}
            borderRadius={"$12"}
          ></Box>
        ))}
      </HStack>
    </VStack>
  );
};

const AmountCounter = (props: {
  amount: number;
  onAmountChanged: (value: number) => void;
}) => {
  const styles = {
    arrowsColor: useColorModeValue("$primary.500", "$primary.300"),
  };
  return (
    <HStack alignItems="center">
      <Button
        textColor={styles.arrowsColor}
        variant="tertiary"
        size="lg"
        IconLeftComponent={ChevronLeft}
        onPress={() => {
          if (props.amount > 1) {
            props.onAmountChanged(props.amount - 1);
          }
        }}
      ></Button>
      <Body fontWeight={"$medium"}>{props.amount}</Body>
      <Button
        size="lg"
        textColor={styles.arrowsColor}
        variant="tertiary"
        IconLeftComponent={ChevronRight}
        onPress={() => props.onAmountChanged(props.amount + 1)}
      ></Button>
    </HStack>
  );
};

const ReviewsSummary = () => {
  return (
    <HStack alignItems={"center"} space={"$2"}>
      <Score value={5}></Score>
      <Footnote
        color={useColorModeValue("$primaryGray.600", "$primaryGray.300")}
      >
        745 reviews
      </Footnote>
    </HStack>
  );
};

const CallToAction = () => {
  return (
    <HStack paddingVertical={"$4"} alignItems={"center"} space={"$4"}>
      <VStack flex={1}>
        <Subhead
          color={useColorModeValue("$primaryGray.600", "$primaryGray.300")}
        >
          Total Price
        </Subhead>
        <TitleTwo fontWeight={"$bold"}>$29,00</TitleTwo>
      </VStack>
      <Button>Add to Bag</Button>
    </HStack>
  );
};
