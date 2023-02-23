import {
  Body,
  Button,
  HStack,
  Image,
  Input,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Subhead,
  Switch,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/core";
import React from "react";
import { Dimensions, Platform, ScrollView } from "react-native";
import {
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import LogoWhite from "../assets/logo-white.png";
import LogoBlack from "../assets/logo-black.png";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";

const imageSize = Dimensions.get("screen").width * 0.5;

const SignUp = () => {
  const navigation = useNavigation();
  const height = useHeaderHeight();

  const barStyle = useColorModeValue("dark-content", "light-content");

  const Logo = useColorModeValue(LogoBlack, LogoWhite);

  return (
    <>
      <StatusBar barStyle={barStyle}></StatusBar>
      <KeyboardAvoidingView
        flex={1}
        keyboardVerticalOffset={height}
        backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
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
            <BackButton></BackButton>
            <Image
              alt="eCommerce logo in white"
              marginBottom={4}
              alignSelf="center"
              source={Logo}
              width={imageSize}
              height={imageSize / 2}
            ></Image>
            <VStack space={4} marginTop={5} width="full" flex={1}>
              <TitleTwo fontWeight="medium">Sign up</TitleTwo>
              <Input
                placeholder="Enter your first name..."
                IconLeftComponent={UserIcon}
              ></Input>
              <Input
                placeholder="Enter your email"
                IconLeftComponent={MailIcon}
              ></Input>
              <Input
                placeholder="Enter your password"
                secureTextEntry={true}
                IconLeftComponent={LockClosedIcon}
              ></Input>
              <HStack space={3} width="full" marginTop={2} marginBottom={1}>
                <Subhead flex={1}>
                  Send me exclusive offers, unique gift ideas, and personalized
                  tips for shopping
                </Subhead>

                <Switch></Switch>
              </HStack>
              <Button
                marginBottom={5}
                onPress={() => navigation.navigate("SignIn")}
              >
                Sign up
              </Button>
            </VStack>
          </VStack>
          <VStack padding={4} space={4} paddingTop={8} safeAreaBottom>
            <HStack alignItems="center" justifyContent="center">
              <Body>If you have an account, </Body>
              <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Body fontWeight="bold" textDecorationLine="underline">
                  Sign in
                </Body>
              </Pressable>
            </HStack>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
