import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  Pressable,
  TitleTwo,
  VStack,
  Image,
  Alert,
  TitleOne,
} from "@spirokit/core";
import React from "react";
import { Platform, ScrollView } from "react-native";
import { MailIcon } from "react-native-heroicons/outline";

import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSupabase } from "../context/useSupabase";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const height = useHeaderHeight();

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showResultModal, setShowResultModal] = React.useState(false);

  const { forgotPassword } = useSupabase();

  const onFinishTapped = () => {
    setShowResultModal(false);
    navigation.navigate("Login");
  };

  const onSendTapped = async () => {
    try {
      setLoading(true);
      await forgotPassword(email);
      setShowResultModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      keyboardVerticalOffset={height}
      backgroundColor={"primaryGray.100"}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack
          safeAreaTop
          padding={4}
          alignItems="flex-start"
          width="full"
          flex={1}
        >
          <VStack space={4} marginTop={5} width="full" flex={1}>
            <Image
              source={{ uri: "https://i.imgur.com/sDzRjS4.png" }}
              width="full"
              alt="Forgot password icon"
              height={200}
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="medium">Forgot password?</TitleTwo>
            <Input
              placeholder="Enter your email"
              IconLeftComponent={MailIcon}
              onChangeText={(text) => setEmail(text)}
            ></Input>
            <Button
              isDisabled={loading}
              marginBottom={5}
              onPress={() => onSendTapped()}
            >
              {loading ? "Loading..." : "Send"}
            </Button>
          </VStack>
        </VStack>
        <VStack padding={4} safeAreaBottom>
          <Body textAlign={"center"}>
            If you have an account,{" "}
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Body fontWeight="bold" textDecorationLine="underline">
                Sign in
              </Body>
            </Pressable>
          </Body>
        </VStack>
        <Alert
          isVisible={showResultModal}
          onClose={() => setShowResultModal(false)}
          TitleComponent={<TitleOne>Email sent</TitleOne>}
          ConfirmButtonComponent={
            <Button onPress={() => onFinishTapped()}>Ok</Button>
          }
        ></Alert>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
