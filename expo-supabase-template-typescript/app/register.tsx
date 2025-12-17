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
import { Lock, Mail } from "lucide-react-native";

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
          alignItems="center"
          width="$full"
          flex={1}
        >
          <VStack
            gap={"$4"}
            maxWidth={"$full"}
            $gtMd={{
              maxWidth: "$1/2",
            }}
            $gtLg={{
              maxWidth: "$1/3",
            }}
            marginTop={"$5"}
            width="$full"
            flex={1}
          >
            <Image
              source={{ uri: "https://i.imgur.com/oNY0QGb.png" }}
              height={200}
              width={200}
              alignSelf="center"
              alt="Register icon"
            ></Image>
            <TitleTwo fontWeight="$medium">Sign up</TitleTwo>
            <Input
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
            >
              <Input.LeftIcon>
                <Mail />
              </Input.LeftIcon>
            </Input>
            <Input
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            >
              <Input.LeftIcon>
                <Lock />
              </Input.LeftIcon>
            </Input>
            <Button
              isDisabled={loading}
              marginBottom={"$5"}
              onPress={() => onSignUpTapped()}
            >
              {loading ? "Loading..." : "Sign up"}
            </Button>
          </VStack>
        </VStack>
        <VStack
          padding={"$4"}
          paddingBottom={bottom}
          $platform-web={{
            paddingBottom: "$4",
          }}
        >
          <Body textAlign={"center"}>
            If you have an account,{" "}
            <Body
              cursor="pointer"
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
