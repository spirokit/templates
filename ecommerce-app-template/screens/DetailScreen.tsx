import {
  Body,
  Box,
  Button,
  Footnote,
  HStack,
  Image,
  Pressable,
  Subhead,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
  ZStack,
} from "@spirokit/core";
import React, { memo, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import BackButton from "../components/BackButton";
import Score from "../components/Score";

const screenHeight = Dimensions.get("window").height;

const DetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [amount, setAmount] = useState<number>(1);

  const styles = {
    descriptionColor: useColorModeValue("primaryGray.700", "primaryGray.300"),
  };

  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["1"]
        ),
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Box flex={1}>
        <ZStack height={screenHeight / 2} width="full" alignItems="flex-start">
          <Image
            alt="details image"
            source={{ uri: "https://i.imgur.com/CpKlRgU.png" }}
            width="full"
            height={screenHeight / 2}
          ></Image>
          <HStack
            padding={4}
            width="full"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <BackButton></BackButton>
            <VStack space={2}>
              <Button
                size="sm"
                textColor="black"
                IconLeftComponent={ShareIcon}
              ></Button>
              <Button
                size="sm"
                textColor="black"
                IconLeftComponent={HeartIcon}
              ></Button>
            </VStack>
          </HStack>
        </ZStack>
        <VStack
          marginTop={-2}
          borderTopRadius={16}
          padding={4}
          flex={1}
          space={4}
          width="full"
          backgroundColor={useColorModeValue("white", "primaryDark.1")}
        >
          <Box>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
              width="full"
            >
              <Body fontWeight={"medium"}>Play T-Shirt - 2021</Body>
              <AmountCounter
                amount={amount}
                onAmountChanged={(value) => setAmount(value)}
              ></AmountCounter>
            </HStack>
            <Subhead marginBottom={2} color={styles.descriptionColor}>
              Get ready to play hard in this bold white t-shirt featuring the
              phrase "play hard" in bold, black letters.
            </Subhead>
            <ReviewsSummary></ReviewsSummary>
            <VStack space={6} paddingY={6}>
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
    </ScrollView>
  );
};

const SizeSelector = (props: {
  selectedSize: string;
  onSizeSelected: (value: string) => void;
}) => {
  const styles = {
    selectedBorderColor: useColorModeValue("primary.500", "primary.300"),
    borderColor: useColorModeValue("primary.500", "primaryGray.500"),
    textColor: useColorModeValue("black", "primary.300"),
    backgroundColor: useColorModeValue("primary.500", "primary.300"),
  };
  return (
    <VStack space={1}>
      <Subhead fontWeight="bold">Select size</Subhead>
      <HStack space={2}>
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <Pressable
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
            paddingX={4}
            paddingY={2}
            borderRadius={8}
          >
            <Subhead
              color={props.selectedSize === size ? "black" : styles.textColor}
            >
              {size}
            </Subhead>
          </Pressable>
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
    selectedBorderColor: useColorModeValue("primary.500", "primary.300"),
    borderColor: useColorModeValue("primary.500", "primaryGray.500"),
  };

  const { colors } = useTheme();

  return (
    <VStack space={1}>
      <Subhead fontWeight="bold">Select color</Subhead>
      <HStack space={2} alignItems="center">
        {[
          colors.red[500],
          colors.primaryGray[200],
          colors.primaryGray[700],
          colors.emerald[500],
        ].map((color) => (
          <Pressable
            key={color}
            onPress={() => props.onColorSelected(color)}
            borderWidth={props.selectedColor === color ? 2 : 0}
            backgroundColor={color}
            borderColor={
              props.selectedColor === color
                ? styles.selectedBorderColor
                : styles.borderColor
            }
            padding={4}
            borderRadius={"full"}
          ></Pressable>
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
    arrowsColor: useColorModeValue("primary.500", "primary.300"),
  };
  return (
    <HStack alignItems="center">
      <Button
        width="auto"
        textColor={styles.arrowsColor}
        variant="tertiary"
        IconLeftComponent={ChevronLeftIcon}
        onPress={() => {
          if (props.amount > 1) {
            props.onAmountChanged(props.amount - 1);
          }
        }}
      ></Button>
      <Body fontWeight={"medium"}>{props.amount}</Body>
      <Button
        width="auto"
        textColor={styles.arrowsColor}
        variant="tertiary"
        IconLeftComponent={ChevronRightIcon}
        onPress={() => props.onAmountChanged(props.amount + 1)}
      ></Button>
    </HStack>
  );
};

const ReviewsSummary = () => {
  return (
    <HStack alignItems={"center"} space={2}>
      <Score value={5}></Score>
      <Footnote color={useColorModeValue("primaryGray.600", "primaryGray.300")}>
        745 reviews
      </Footnote>
    </HStack>
  );
};

const CallToAction = () => {
  return (
    <HStack paddingY={4} alignItems={"center"} space={4}>
      <VStack flex={1}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
        >
          Total Price
        </Subhead>
        <TitleTwo fontWeight={"bold"}>$29,00</TitleTwo>
      </VStack>
      <Button width={"auto"}>Add to Bag</Button>
    </HStack>
  );
};

export default memo(DetailScreen);
