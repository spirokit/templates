import {
  VStack,
  useColorModeValue,
  Input,
  HStack,
  Subhead,
  KeyboardAvoidingView,
  Button,
  TitleTwo,
  ScrollView,
  Container,
} from "@spirokit/ui";
import React, { useState } from "react";
import { Platform } from "react-native";
import CreditCard, { CreditCardProps } from "../../components/CreditCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const AddPaymentMethod = () => {
  const [cardInfo, setCardInfo] = useState<Partial<CreditCardProps>>({});

  const styles = {
    inputLabelColor: useColorModeValue("$black", "$primaryGray.300"),
    bgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
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
      backgroundColor={styles.bgColor}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container flex={1} width="$full">
        <ScrollView>
          <VStack
            space={"$6"}
            padding={"$4"}
            paddingTop={useSafeAreaInsets().top}
            flex={1}
          >
            <HStack width="$full" space={"$4"} alignItems="center">
              <TitleTwo fontWeight={"$bold"}>Add Payment Method</TitleTwo>
            </HStack>
            <CreditCard
              cardNumber={cardInfo.cardNumber}
              expiresOn={cardInfo.expiresOn}
              holderName={cardInfo.holderName}
            ></CreditCard>
            <VStack space={"$4"} flex={1}>
              <Input
                returnKeyType="done"
                placeholder="Card number..."
                maxLength={16}
                keyboardType="numeric"
                onChangeText={(value) => updateCardInfo("cardNumber", value)}
              ></Input>
              <Input
                returnKeyType="done"
                placeholder="Card holder name..."
                onChangeText={(value) => updateCardInfo("holderName", value)}
              ></Input>
              <HStack flex={1} space={"$4"}>
                <Input
                  returnKeyType="done"
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
                  returnKeyType="done"
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
              <Button onPress={() => router.back()}>Confirm</Button>
            </VStack>
          </VStack>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default AddPaymentMethod;
