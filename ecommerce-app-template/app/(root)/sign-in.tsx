import {
  Body,
  Button,
  Container,
  HStack,
  Image,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/ui";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Lock, Mail } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const isWeb = Platform.OS === "web";
const imageSize = isWeb ? 64 * 4 : Dimensions.get("screen").width * 0.5;

const SignIn = () => {
  const height = useHeaderHeight();
  const { bottom, top } = useSafeAreaInsets();

  const styles = {
    bgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
    footerBgColor: useColorModeValue("$white", "$primaryDark.1"),
  };

  const logoUrl = useColorModeValue(
    "https://i.imgur.com/LLdbpn8.png",
    "https://i.imgur.com/yXDYwpw.png"
  ) as string;

  return (
    <KeyboardAvoidingView
      flex={1}
      {...(!isWeb && {
        keyboardVerticalOffset: height,
      })}
      backgroundColor={styles.bgColor}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container flex={1} width="$full">
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <VStack
            top={top}
            padding={"$4"}
            alignItems="flex-start"
            width="$full"
            flex={1}
          >
            <Image
              resizeMode="contain"
              alt="eCommerce logo in white"
              marginBottom={"$4"}
              alignSelf="center"
              source={{
                uri: logoUrl,
                width: imageSize,
                height: imageSize / 2,
              }}
            ></Image>
            <VStack space={"$4"} marginTop={"$5"} width="$full" flex={1}>
              <TitleTwo fontWeight="$medium">Sign in</TitleTwo>
              <Input
                placeholder="Enter your email"
                IconLeftComponent={Mail}
              ></Input>
              <Input
                placeholder="Enter your password"
                secureTextEntry={true}
                IconLeftComponent={Lock}
              ></Input>
              <Button
                onPress={() => router.replace("/(tabs)/explore")}
                marginBottom={"$5"}
                textColor="$primaryGray.900"
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
          <VStack
            padding={"$4"}
            backgroundColor={styles.footerBgColor}
            space={"$4"}
            width="$full"
            paddingTop={"$8"}
            bottom={bottom}
          >
            <Button
              backgroundColor="$blue.500"
              borderColor={"$blue.500"}
              pressStyle={{
                backgroundColor: "$blue.700",
                borderColor: "$blue.700",
              }}
              hoverStyle={{
                backgroundColor: "$blue.700",
                borderColor: "$blue.700",
              }}
              onPress={() =>
                router.replace({
                  pathname: "/(tabs)/explore",
                })
              }
              textColor="white"
            >
              Sign in with Facebook
            </Button>
            <Button
              backgroundColor="$primaryGray.100"
              borderColor={"$primaryGray.100"}
              pressStyle={{ backgroundColor: "$white", borderColor: "$white" }}
              hoverStyle={{ backgroundColor: "$white", borderColor: "$white" }}
              onPress={() => router.replace("/(tabs)/explore")}
              textColor="black"
            >
              Sign in with Google
            </Button>
            <Button
              backgroundColor="$primaryGray.900"
              borderColor={"$primaryGray.900"}
              pressStyle={{ backgroundColor: "black", borderColor: "black" }}
              hoverStyle={{ backgroundColor: "black", borderColor: "black" }}
              onPress={() => router.replace("/(tabs)/explore")}
              textColor="white"
            >
              Sign in with Apple
            </Button>
            <HStack alignItems="center" justifyContent="center">
              <Body>Have an account? </Body>

              <Body
                onPress={() => router.push("/sign-up")}
                fontWeight="$bold"
                textDecorationLine="underline"
              >
                Sign up
              </Body>
            </HStack>
          </VStack>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
