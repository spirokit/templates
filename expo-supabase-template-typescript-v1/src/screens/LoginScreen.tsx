import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  Pressable,
  TitleTwo,
  VStack,
  Image,
  Subhead,
} from "@spirokit/core";
import React from "react";
import { Platform, ScrollView } from "react-native";
import { LockClosedIcon, MailIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSupabase } from "../context/useSupabase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const height = useHeaderHeight();
  const { login } = useSupabase();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSignInTapped = async () => {
    try {
      setLoading(true);
      await login(email, password);
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
        <VStack safeAreaTop padding={4} flex={1}>
          <VStack space={4} marginTop={5} width="full" flex={1}>
            <Image
              source={{ uri: "https://i.imgur.com/FawVClJ.png" }}
              width="full"
              height={200}
              alt="Login icon"
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="medium">Sign in</TitleTwo>
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
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Subhead textAlign={"right"} paddingBottom="2">
                Forgot Password?
              </Subhead>
            </Pressable>

            <Button
              isDisabled={loading}
              onPress={() => onSignInTapped()}
              marginBottom={5}
            >
              {loading ? "Loading..." : "Sign in"}
            </Button>
          </VStack>
        </VStack>

        <VStack padding={4} backgroundColor={"white"} safeAreaBottom>
          <Body textAlign={"center"}>
            Have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Body fontWeight="bold" textDecorationLine="underline">
                Sign up
              </Body>
            </Pressable>
          </Body>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
