import {
  ActionSheet,
  Body,
  Box,
  Button,
  HStack,
  Image,
  Pressable,
  Subhead,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
} from "@spirokit/core";
import React, { useState } from "react";
import VisaDark from "../assets/visa-dark.png";
import VisaLight from "../assets/visa-light.png";
import MasterDark from "../assets/master-dark.png";
import MasterLight from "../assets/master-light.png";
import {
  LocationMarkerIcon,
  PencilIcon,
  PlusIcon,
} from "react-native-heroicons/outline";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PurchaseResume } from "./PurchaseResume";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("screen").height;
const PaymentSheet = (props: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState<CreditCard>();

  const styles = {
    bg: useColorModeValue("primaryGray.100", "primaryDark.8"),
    separatorColor: useColorModeValue("primaryGray.300", "primaryGray.600"),
  };
  return (
    <ActionSheet
      isOpen={props.isOpen}
      onClose={props.onClose}
      _backdrop={{ backgroundColor: "primaryDark.1", opacity: 0.9 }}
    >
      <ActionSheet.Content
        maxHeight={screenHeight * 0.75}
        backgroundColor={styles.bg}
      >
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            paddingHorizontal: 24,
          }}
        >
          <VStack width="full" space={6}>
            <TitleTwo width="full" fontWeight="semibold">
              Order confirmation
            </TitleTwo>
            <VStack space={2} width="full">
              <CreditCardSelector
                selectedCard={selectedCard}
                onCreditCardSelected={(data) => setSelectedCard(data)}
              ></CreditCardSelector>
              <Pressable
                onPress={() => {
                  props.onClose();
                  navigation.navigate("AddPaymentMethod");
                }}
              >
                <Subhead>Add a card</Subhead>
              </Pressable>
            </VStack>
            <DeliveryAddress
              onAddDeliveryAddress={() => {
                props.onClose();
                navigation.navigate("AddDeliveryAddress");
              }}
            ></DeliveryAddress>
            <Box
              width="full"
              height={0.5}
              backgroundColor={styles.separatorColor}
            ></Box>
            <PurchaseResume></PurchaseResume>
            <Button
              onPress={() => {
                props.onClose();
                props.onConfirm();
              }}
              minWidth="full"
            >
              Make a payment
            </Button>
          </VStack>
        </ScrollView>
      </ActionSheet.Content>
    </ActionSheet>
  );
};

const DeliveryAddress = (props: { onAddDeliveryAddress: () => void }) => {
  const { colors } = useTheme();
  const styles = {
    streetLabelColor: useColorModeValue("primaryGray.900", "primaryGray.100"),
    cityLabelColor: useColorModeValue("primaryGray.600", "primaryGray.300"),
    cardBg: useColorModeValue("white", "primaryDark.24"),
    iconColor: useColorModeValue(colors.primaryGray[900], "white"),
  };

  return (
    <VStack space={2} width="full">
      <HStack
        space={4}
        justifyContent="space-between"
        alignItems="center"
        width="full"
      >
        <TitleThree flex={1} fontWeight="semibold">
          Delivery Address
        </TitleThree>
        <Button
          width="auto"
          variant="tertiary"
          size="sm"
          onPress={() => props.onAddDeliveryAddress()}
          IconLeftComponent={PlusIcon}
        ></Button>
      </HStack>
      <HStack
        space={4}
        alignItems="center"
        borderRadius={4}
        backgroundColor={styles.cardBg}
        paddingY={2}
        paddingX={4}
      >
        {LocationMarkerIcon({ height: 24, width: 24, color: styles.iconColor })}
        <VStack flex={1}>
          <Body color={styles.streetLabelColor}>123 Fake Street</Body>
          <Subhead color={styles.cityLabelColor}>
            Springfield, United States
          </Subhead>
        </VStack>
        <Button
          width="auto"
          variant="tertiary"
          size="sm"
          IconLeftComponent={PencilIcon}
        ></Button>
      </HStack>
    </VStack>
  );
};

const creditCards: CreditCard[] = [
  {
    provider: "visa",
    cardNumber: "4444 4444 4444 4444",
    typeOfCard: "Credit Card",
  },
  {
    provider: "mastercard",
    cardNumber: "5555 5555 5555 5555",
    typeOfCard: "Credit Card",
  },
];

type CreditCard = {
  cardNumber: string;
  provider: "visa" | "mastercard";
  typeOfCard: "Credit Card" | "Debit Card";
};

const CreditCardSelector = (props: {
  onCreditCardSelected: (data: CreditCard) => void;
  selectedCard?: CreditCard;
}) => {
  const VisaLogo = useColorModeValue(VisaLight, VisaDark);

  const MasterLogo = useColorModeValue(MasterLight, MasterDark);

  const styles = {
    typeOfCardColor: useColorModeValue("primaryGray.900", "primaryGray.100"),
    cardNumberColor: useColorModeValue("primaryGray.600", "primaryGray.300"),
    cardBg: useColorModeValue("white", "primaryDark.24"),
    selectorBorderColor: useColorModeValue("primary.500", "primary.300"),
    selectorInnerCircleBg: useColorModeValue("primary.500", "primary.300"),
  };
  return (
    <VStack space={2} width="full">
      {creditCards.map((cc, index) => (
        <Pressable
          key={cc.cardNumber}
          width="full"
          onPress={() => props.onCreditCardSelected(cc)}
        >
          <HStack
            space={4}
            alignItems="center"
            width="full"
            borderRadius={4}
            backgroundColor={styles.cardBg}
            paddingY={2}
            paddingX={4}
          >
            <Image
              alt={`${cc.provider} logo - ${index}`}
              source={cc.provider === "visa" ? VisaLogo : MasterLogo}
            ></Image>
            <VStack flex={1}>
              <Body color={styles.typeOfCardColor}>{cc.typeOfCard}</Body>
              <Subhead color={styles.cardNumberColor}>{cc.cardNumber}</Subhead>
            </VStack>
            <Box
              height={6}
              width={6}
              justifyContent="center"
              alignItems="center"
              borderWidth={2}
              borderRadius={"full"}
              borderColor={styles.selectorBorderColor}
            >
              {props.selectedCard &&
              props.selectedCard.cardNumber === cc.cardNumber ? (
                <Box
                  height={4}
                  width={4}
                  borderRadius="full"
                  backgroundColor={styles.selectorInnerCircleBg}
                ></Box>
              ) : null}
            </Box>
          </HStack>
        </Pressable>
      ))}
    </VStack>
  );
};

export default PaymentSheet;
