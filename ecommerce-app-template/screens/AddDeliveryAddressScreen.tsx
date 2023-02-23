import { useNavigation } from "@react-navigation/native";
import {
  Button,
  HStack,
  Input,
  KeyboardAvoidingView,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/core";
import React from "react";
import { Platform, ScrollView } from "react-native";
import BackButton from "../components/BackButton";
import { useHeaderHeight } from "@react-navigation/elements";

const AddDeliveryAddress = () => {
  const navigation = useNavigation();
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      flex={1}
      keyboardVerticalOffset={height}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack padding={4} flex={1} space={6}>
          <HStack width="full" space={4} alignItems="center">
            <BackButton></BackButton>
            <TitleTwo fontWeight={"bold"}>Add Delivery Address</TitleTwo>
          </HStack>
          <VStack space={4} flex={1}>
            <HStack space={4}>
              <Input _container={{ flex: 1 }} placeholder="Name"></Input>

              <Input _container={{ flex: 1 }} placeholder="Last Name"></Input>
            </HStack>

            <Input placeholder="Street"></Input>
            <Input placeholder="City"></Input>
            <Input placeholder="Mobile number"></Input>
            <Input placeholder="House No / Flat No / Floor (Opt)"></Input>
            <Input placeholder="Gate code (Opt)"></Input>
          </VStack>
          <Button onPress={() => navigation.goBack()}>Confirm</Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddDeliveryAddress;
