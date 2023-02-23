import {
  VStack,
  useColorModeValue,
  Input,
  HStack,
  Subhead,
  KeyboardAvoidingView,
  Button,
  TitleTwo,
} from "@spirokit/core";
import React, { useState } from "react";
import { Platform, ScrollView } from "react-native";
import CreditCard, { CreditCardProps } from "../components/CreditCard";

import { useHeaderHeight } from "@react-navigation/elements";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";

const AddPaymentMethod = () => {
  const navigation = useNavigation();
  const [cardInfo, setCardInfo] = useState<Partial<CreditCardProps>>({});
  const height = useHeaderHeight();

  const styles = {
    inputLabelColor: useColorModeValue("black", "primaryGray.300"),
  };

  const updateCardInfo = (field: string, value: string) => {
    setCardInfo({
      ...cardInfo,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      keyboardVerticalOffset={height}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack
          space={6}
          padding={4}
          flex={1}
          backgroundColor={useColorModeValue(
            "primaryGray.100",
            "primaryDark.0"
          )}
        >
          <HStack width="full" space={4} alignItems="center">
            <BackButton></BackButton>
            <TitleTwo fontWeight={"bold"}>Add Payment Method</TitleTwo>
          </HStack>
          <CreditCard
            cardNumber={cardInfo.cardNumber}
            expiresOn={cardInfo.expiresOn}
            holderName={cardInfo.holderName}
          ></CreditCard>
          <VStack space={4} flex={1}>
            <Input
              placeholder="Card number..."
              maxLength={16}
              keyboardType="numeric"
              onChangeText={(value) => updateCardInfo("cardNumber", value)}
            ></Input>
            <Input
              placeholder="Card holder name..."
              onChangeText={(value) => updateCardInfo("holderName", value)}
            ></Input>
            <HStack flex={1} space={4}>
              <Input
                _container={{ flex: 1 }}
                placeholder="MMYY"
                maxLength={4}
                keyboardType="numeric"
                LabelComponent={
                  <Subhead color={styles.inputLabelColor}>Expires on</Subhead>
                }
                onChangeText={(value) => updateCardInfo("expiresOn", value)}
              ></Input>
              <Input
                _container={{ flex: 1 }}
                placeholder="XXX"
                maxLength={3}
                secureTextEntry={true}
                keyboardType={"numeric"}
                LabelComponent={
                  <Subhead color={styles.inputLabelColor}>CVV</Subhead>
                }
                onChangeText={(value) => updateCardInfo("cvv", value)}
              ></Input>
            </HStack>
            <Button onPress={() => navigation.goBack()}>Confirm</Button>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddPaymentMethod;
