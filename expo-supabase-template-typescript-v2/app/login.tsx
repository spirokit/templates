import {
  Body,
  Button,
  Input,
  KeyboardAvoidingView,
  TitleTwo,
  VStack,
  Image,
  Subhead,
} from "@spirokit/ui";
import React from "react";
import { Dimensions, Platform, ScrollView } from "react-native";
import { Lock, Mail } from "@tamagui/lucide-icons";
import { useSupabase } from "../context/useSupabase";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const Login = () => {
  const { login, isLoggedIn } = useSupabase();
  const { top, bottom } = useSafeAreaInsets();
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

  if (isLoggedIn) {
    return <Redirect href={"/"}></Redirect>;
  }

  return (
    <KeyboardAvoidingView
      flex={1}
      backgroundColor={"$primaryGray.100"}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack padding={"$4"} paddingTop={top} flex={1}>
          <VStack space={"$4"} marginTop={"$5"} width="$full" flex={1}>
            <Image
              source={{ uri: "https://i.imgur.com/FawVClJ.png" }}
              width={screenWidth}
              height={200}
              alt="Login icon"
              resizeMode="contain"
            ></Image>
            <TitleTwo fontWeight="$medium">Sign in</TitleTwo>
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
            <Subhead
              textAlign={"right"}
              paddingBottom="$2"
              onPress={() =>
                router.push({
                  pathname: "/forgot-password",
                })
              }
            >
              Forgot Password?
            </Subhead>

            <Button
              isDisabled={loading}
              onPress={() => onSignInTapped()}
              marginBottom={"$5"}
            >
              {loading ? "Loading..." : "Sign in"}
            </Button>
          </VStack>
        </VStack>

        <VStack
          padding={"$4"}
          backgroundColor={"$white"}
          paddingBottom={bottom}
        >
          <Body textAlign={"center"}>
            Have an account?{" "}
            <Body
              tag="span"
              fontWeight="$bold"
              textDecorationLine="underline"
              onPress={() =>
                router.push({
                  pathname: "/register",
                })
              }
            >
              Sign up
            </Body>
          </Body>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
