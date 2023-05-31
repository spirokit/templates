import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  Pressable,
  TitleTwo,
  VStack,
  Image,
} from "@spirokit/core";
import React from "react";
import { Platform, ScrollView } from "react-native";
import { LockClosedIcon, MailIcon } from "react-native-heroicons/outline";

import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSupabase } from "../context/useSupabase";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const height = useHeaderHeight();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { register } = useSupabase();

  const onSignUpTapped = async () => {
    try {
      setLoading(true);
      await register(email, password);
      navigation.navigate("Login");
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
              source={{ uri: "https://i.imgur.com/oNY0QGb.png" }}
              width="full"
              height={200}
              alt="Register icon"
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="medium">Sign up</TitleTwo>
            <Input
              placeholder="Enter your email"
              IconLeftComponent={MailIcon}
              onChangeText={(text) => setEmail(text)}
            ></Input>
            <Input
              placeholder="Enter your password"
              secureTextEntry={true}
              IconLeftComponent={LockClosedIcon}
              onChangeText={(text) => setPassword(text)}
            ></Input>
            <Button
              isDisabled={loading}
              marginBottom={5}
              onPress={() => onSignUpTapped()}
            >
              {loading ? "Loading..." : "Sign up"}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
