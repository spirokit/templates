import {
  ActionSheet,
  Body,
  Box,
  Button,
  HStack,
  Image,
  Subhead,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
  ScrollView,
  getTokens,
} from "@spirokit/ui";
import React, { useState } from "react";
import VisaDark from "../assets/visa-dark.png";
import VisaLight from "../assets/visa-light.png";
import MasterDark from "../assets/master-dark.png";
import MasterLight from "../assets/master-light.png";
import { MapPin, Pencil, Plus } from "@tamagui/lucide-icons";
import { Dimensions, ImageSourcePropType, Platform } from "react-native";
import { PurchaseResume } from "./PurchaseResume";
import { router } from "expo-router";

const screenHeight = Dimensions.get("screen").height;
const isWeb = Platform.OS === "web";

const PaymentSheet = (props: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const [selectedCard, setSelectedCard] = useState<CreditCard>();
  const styles = {
    bg: useColorModeValue("$primaryGray.100", "$primaryDark.8"),
    separatorColor: useColorModeValue("$primaryGray.300", "$primaryGray.600"),
  };
  return (
    <ActionSheet
      isOpen={props.isOpen}
      onClose={props.onClose}
      _backdrop={{ backgroundColor: "$primaryDark.1" }}
      dismissOnSnapToBottom={false}
      snapPoints={[75]}
      disableDrag={true}
    >
      <ActionSheet.Content
        maxHeight={screenHeight * 0.75}
        backgroundColor={styles.bg}
        width="$full"
        paddingBottom={"$4"}
      >
        <ScrollView
          contentContainerStyle={{
            width: "100%",
          }}
          style={{ width: "100%" }}
        >
          <VStack
            width="$full"
            space={"$6"}
            paddingHorizontal="$6"
            paddingVertical="$3"
          >
            <TitleTwo width="$full" fontWeight="$semibold">
              Order confirmation
            </TitleTwo>
            <VStack space={"$4"} width="$full">
              <CreditCardSelector
                selectedCard={selectedCard}
                onCreditCardSelected={(data) => setSelectedCard(data)}
              ></CreditCardSelector>

              <Button
                size="sm"
                variant="secondary"
                alignSelf="flex-end"
                onPress={() => {
                  props.onClose();
                  router.push("add-payment-method");
                }}
              >
                Add a card
              </Button>
            </VStack>
            <DeliveryAddress
              onAddDeliveryAddress={() => {
                props.onClose();
                router.push("add-delivery-address");
              }}
            ></DeliveryAddress>
            <Box
              width="$full"
              height={"$0.5"}
              backgroundColor={styles.separatorColor}
            ></Box>
            <PurchaseResume></PurchaseResume>
            <Box flex={1}></Box>
            <Button
              onPress={() => {
                props.onClose();
                props.onConfirm();
              }}
              minWidth="$full"
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
  const { color } = getTokens();
  const styles = {
    streetLabelColor: useColorModeValue("$primaryGray.900", "$primaryGray.100"),
    cityLabelColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
    cardBg: useColorModeValue("$white", "$primaryDark.24"),
    iconColor: useColorModeValue(color["$primaryGray.900"].val, "$white"),
  };

  return (
    <VStack space={"$2"} width="$full">
      <HStack
        space={"$4"}
        justifyContent="space-between"
        alignItems="center"
        width="$full"
      >
        <TitleThree flex={1} fontWeight="$semibold">
          Delivery Address
        </TitleThree>
        <Button
          variant="tertiary"
          size="sm"
          onPress={() => props.onAddDeliveryAddress()}
          IconLeftComponent={Plus}
        ></Button>
      </HStack>
      <HStack
        space={"$4"}
        alignItems="center"
        borderRadius={"$2"}
        backgroundColor={styles.cardBg}
        paddingVertical={"$2"}
        paddingHorizontal={"$4"}
      >
        <MapPin height={24} width={24} color={styles.iconColor} />
        <VStack flex={1}>
          <Body color={styles.streetLabelColor}>123 Fake Street</Body>
          <Subhead color={styles.cityLabelColor}>
            Springfield, United States
          </Subhead>
        </VStack>
        <Button
          variant="tertiary"
          size="sm"
          IconLeftComponent={Pencil}
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
  const VisaLogo = useColorModeValue(
    VisaLight,
    VisaDark
  ) as ImageSourcePropType;

  const MasterLogo = useColorModeValue(
    MasterLight,
    MasterDark
  ) as ImageSourcePropType;

  const styles = {
    typeOfCardColor: useColorModeValue("$primaryGray.900", "$primaryGray.100"),
    cardNumberColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
    cardBg: useColorModeValue("$white", "$primaryDark.24"),
    selectorBorderColor: useColorModeValue("$primary.500", "$primary.300"),
    selectorInnerCircleBg: useColorModeValue("$primary.500", "$primary.300"),
  };
  return (
    <VStack space={"$2"}>
      {creditCards.map((cc, index) => (
        <Box
          key={cc.cardNumber}
          width="$full"
          onPress={() => props.onCreditCardSelected(cc)}
        >
          <HStack
            space={"$4"}
            alignItems="center"
            width="$full"
            borderRadius={"$2"}
            backgroundColor={styles.cardBg}
            paddingVertical={"$2"}
            paddingHorizontal={"$4"}
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
              height={"$6"}
              width={"$6"}
              justifyContent="center"
              alignItems="center"
              borderWidth={2}
              borderRadius={"$12"}
              borderColor={styles.selectorBorderColor}
            >
              {props.selectedCard &&
              props.selectedCard.cardNumber === cc.cardNumber ? (
                <Box
                  height={"$4"}
                  width={"$4"}
                  borderRadius="$12"
                  backgroundColor={styles.selectorInnerCircleBg}
                ></Box>
              ) : null}
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default PaymentSheet;
