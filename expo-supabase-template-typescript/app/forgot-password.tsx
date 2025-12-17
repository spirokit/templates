import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  TitleTwo,
  VStack,
  Image,
  Alert,
  TitleOne,
} from "@spirokit/ui";
import React from "react";
import { Dimensions, Platform, ScrollView } from "react-native";
import { Mail } from "lucide-react-native";

import { useSupabase } from "../context/useSupabase";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const screenWidth = Dimensions.get("screen").width;

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showResultModal, setShowResultModal] = React.useState(false);

  const { top, bottom } = useSafeAreaInsets();

  const { forgotPassword } = useSupabase();

  const onFinishTapped = () => {
    setShowResultModal(false);
    router.push({
      pathname: "/login",
    });
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
      backgroundColor={"$primaryGray.100"}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack
          padding={"$4"}
          paddingTop={top}
          alignItems="flex-start"
          width="$full"
          flex={1}
        >
          <VStack gap={"$4"} marginTop={"$5"} width="$full" flex={1}>
            <Image
              source={{ uri: "https://i.imgur.com/sDzRjS4.png" }}
              width={screenWidth}
              alt="Forgot password icon"
              height={200}
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="$medium">Forgot password?</TitleTwo>
            <Input
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
            >
              <Input.LeftIcon>
                <Mail />
              </Input.LeftIcon>
            </Input>
            <Button
              isDisabled={loading}
              marginBottom={"$5"}
              onPress={() => onSendTapped()}
            >
              {loading ? "Loading..." : "Send"}
            </Button>
          </VStack>
        </VStack>
        <VStack padding={"$4"} paddingBottom={bottom}>
          <Body textAlign={"center"}>
            If you have an account,{" "}
            <Body
              onPress={() =>
                router.push({
                  pathname: "/login",
                })
              }
              tag="span"
              fontWeight="$bold"
              textDecorationLine="underline"
            >
              Sign in
            </Body>
          </Body>
        </VStack>
        <Alert
          isVisible={showResultModal}
          onClose={() => setShowResultModal(false)}
        >
          <Alert.Title>Email sent</Alert.Title>
          <Alert.ConfirmButton onPress={() => onFinishTapped()}>
            Ok
          </Alert.ConfirmButton>
        </Alert>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
