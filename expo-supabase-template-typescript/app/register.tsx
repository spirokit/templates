import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  TitleTwo,
  VStack,
  Image,
} from "@spirokit/ui";
import React from "react";
import { Dimensions, Platform, ScrollView } from "react-native";
import { Lock, Mail } from "@tamagui/lucide-icons";

import { useSupabase } from "../context/useSupabase";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("screen").width;

const RegisterScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { top, bottom } = useSafeAreaInsets();

  const { register } = useSupabase();

  const onSignUpTapped = async () => {
    try {
      setLoading(true);
      await register(email, password);
      router.push({
        pathname: "/login",
      });
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
          <VStack space={"$4"} marginTop={"$5"} width="$full" flex={1}>
            <Image
              source={{ uri: "https://i.imgur.com/oNY0QGb.png" }}
              width={screenWidth}
              height={200}
              alt="Register icon"
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="$medium">Sign up</TitleTwo>
            <Input
              placeholder="Enter your email"
              IconLeftComponent={Mail}
              onChangeText={(text) => setEmail(text)}
            ></Input>
            <Input
              placeholder="Enter your password"
              secureTextEntry={true}
              IconLeftComponent={Lock}
              onChangeText={(text) => setPassword(text)}
            ></Input>
            <Button
              isDisabled={loading}
              marginBottom={"$5"}
              onPress={() => onSignUpTapped()}
            >
              {loading ? "Loading..." : "Sign up"}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
