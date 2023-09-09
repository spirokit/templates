import {
  Button,
  HStack,
  TitleThree,
  useColorModeValue,
  VStack,
  Image,
  Body,
  FlatList,
  Box,
  Subhead,
  Input,
  useDisclose,
  Alert,
  TitleOne,
  Container,
} from "@spirokit/ui";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { ChevronLeft, ChevronRight, Trash } from "@tamagui/lucide-icons";
import PaymentSheet from "../../components/PaymentSheet";
import { PurchaseResume } from "../../components/PurchaseResume";
import { router } from "expo-router";

type ShoppingBagItem = {
  id: number;
  title: string;
  assetUrl: string;
  price: number;
  size: string;
  amount: number;
};

const screenHeight = Dimensions.get("screen").height;

const Checkout = () => {
  const { isOpen, onClose, onToggle } = useDisclose();

  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);

  const [shoppingBag, setShoppingBag] =
    useState<ShoppingBagItem[]>(initialItems);

  const onConfirm = () => {
    setShowConfirmationModal(true);
  };

  const styles = {
    iconColor: useColorModeValue("$primary.500", "$primary.300"),
    background: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  const onItemAmountUpdated = (id: number, value: number) => {
    const newItems = shoppingBag.map((item) => {
      if (item.id === id) {
        item.amount = value;
      }

      return item;
    });
    setShoppingBag(newItems);
  };

  const onClearShoppingBag = () => {
    setShoppingBag([]);
  };
  return (
    <Box
      width={"$full"}
      backgroundColor={styles.background}
      flex={1}
      paddingHorizontal="$4"
    >
      <Container width={"$full"} flex={1}>
        {/* Disclaimer: KeyboardAvoidingView does not properly work with FlatList. I'll add a workarround soon for this */}
        {/* In the meantime, you can use react-native-keyboard-spacer */}
        <FlatList
          estimatedItemSize={163}
          _container={{
            flex: 1,
            width: "$full",
            marginHorizontal: "auto",
          }}
          ListHeaderComponent={() => (
            <Header onClearShoppingBag={onClearShoppingBag}></Header>
          )}
          ListFooterComponent={() => (
            <VStack space={"$6"} paddingVertical={"$6"} width="$full">
              <Input
                returnKeyType="done"
                LabelComponent={
                  <Subhead>Have a coupon code? Enter here</Subhead>
                }
                ButtonComponent={<Button>Check</Button>}
                placeholder="Coupon code"
              ></Input>
              <PurchaseResume></PurchaseResume>
              <Button onPress={() => onToggle()}>Checkout</Button>
            </VStack>
          )}
          ListHeaderComponentStyle={{
            paddingTop: 16,
            paddingBottom: 24,
          }}
          data={shoppingBag}
          ItemSeparatorComponent={() => <Box height={"$4"}></Box>}
          bounces={false}
          renderItem={({ item, index }) => (
            <ShoppingBagItem
              {...item}
              index={index}
              onAmountUpdated={(value) => onItemAmountUpdated(item.id, value)}
            ></ShoppingBagItem>
          )}
        ></FlatList>

        <PaymentSheet
          isOpen={isOpen}
          onConfirm={onConfirm}
          onClose={onClose}
        ></PaymentSheet>
        <Alert
          onClose={() => setShowConfirmationModal(false)}
          SubheadingComponent={
            <Body textAlign="center">
              Check your email. You’ll get all the details to track your order.
            </Body>
          }
          ConfirmButtonComponent={
            <Button
              onPress={() => {
                setShowConfirmationModal(false);

                router.replace({
                  pathname: "../",
                });
              }}
            >
              Ok
            </Button>
          }
          isVisible={showConfirmationModal}
          TitleComponent={<TitleOne>Payment received</TitleOne>}
        ></Alert>
      </Container>
    </Box>
  );
};

const Header = (props: { onClearShoppingBag: () => void }) => {
  const styles = {
    iconColor: useColorModeValue("$primary.500", "$primary.300"),
  };

  return (
    <HStack space={"$4"} alignItems="center">
      <TitleThree flex={1} fontWeight="$semibold">
        Shopping Bag
      </TitleThree>
      <Button
        variant="tertiary"
        textColor={styles.iconColor}
        size="sm"
        onPress={() => props.onClearShoppingBag()}
        IconLeftComponent={Trash}
      ></Button>
    </HStack>
  );
};

const ShoppingBagItem = (
  props: ShoppingBagItem & {
    index: number;
    onAmountUpdated: (value: number) => void;
  }
) => {
  const styles = {
    iconColor: useColorModeValue("$primary.500", "$primary.300"),
    background: useColorModeValue("$white", "$primaryDark.1"),
    arrowsColor: useColorModeValue("$primary.500", "$primary.300"),
    priceDisclaimerTextColor: useColorModeValue(
      "$primaryGray.700",
      "$primaryGray.400"
    ),
  };
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <HStack
      key={`${props.assetUrl}-${props.index}`}
      overflow="hidden"
      backgroundColor={styles.background}
      borderRadius={"$4"}
      width="$full"
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <Image
        alt={props.title}
        width={Math.floor(containerWidth / 3)}
        $gtLg={{
          width: Math.floor(containerWidth / 4),
        }}
        height={screenHeight / 5}
        source={{ uri: props.assetUrl }}
      ></Image>
      <VStack justifyContent="space-between" flex={1} padding={"$4"}>
        <HStack flex={1} justifyContent="space-between" alignItems="flex-start">
          <VStack flex={1} space={"$2"}>
            <Body fontWeight="$medium" flex={1}>
              {props.title}
            </Body>
            <Box flex={1}></Box>
            <Subhead>
              ${(props.price * props.amount).toFixed(2)}
              {props.amount > 1 ? (
                <Subhead tag="span" color={styles.priceDisclaimerTextColor}>
                  {` (${props.price.toFixed(2)} x ${props.amount})`}
                </Subhead>
              ) : null}
            </Subhead>
            <Subhead>
              <Subhead tag="span" fontWeight="$extrabold">
                Size:{" "}
              </Subhead>
              {props.size}
            </Subhead>
            <Box flex={1}></Box>
          </VStack>

          <Button
            size="sm"
            textColor={styles.iconColor}
            variant="tertiary"
            IconLeftComponent={Trash}
          ></Button>
        </HStack>
        <HStack space={"$2"} alignItems="center" justifyContent="flex-end">
          <Button
            textColor={styles.arrowsColor}
            variant="tertiary"
            size="sm"
            IconLeftComponent={ChevronLeft}
            onPress={() => {
              if (props.amount > 1) {
                props.onAmountUpdated(props.amount - 1);
              }
            }}
          ></Button>
          <Body fontWeight={"$medium"}>{props.amount}</Body>
          <Button
            size="sm"
            textColor={styles.arrowsColor}
            variant="tertiary"
            IconLeftComponent={ChevronRight}
            onPress={() => props.onAmountUpdated(props.amount + 1)}
          ></Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

const initialItems: ShoppingBagItem[] = [
  {
    id: 1,
    title: "PAC-MAN Yellow T-Shirt - 2021",
    price: 35.99,
    assetUrl: "https://i.imgur.com/rSvwWy3.png",
    size: "LG",
    amount: 1,
  },
  {
    id: 2,
    title: "Regrets T-Shirt",
    price: 32.99,
    assetUrl: "https://i.imgur.com/odSZ3Gv.png",
    size: "LG",
    amount: 1,
  },
];

export default Checkout;
