import {
  Body,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  ScrollView,
  Subhead,
  Switch,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/ui";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { Lock, Mail, User } from "@tamagui/lucide-icons";

import BackButton from "../../components/BackButton";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const isWeb = Platform.OS === "web";
const imageSize = isWeb ? 64 : Dimensions.get("screen").width * 0.5;

const SignUp = () => {
  const { bottom, top } = useSafeAreaInsets();
  const logoUrl = useColorModeValue(
    "https://i.imgur.com/LLdbpn8.png",
    "https://i.imgur.com/yXDYwpw.png"
  ) as string;

  const styles = {
    bgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  return (
    <Box flex={1} width="$full" backgroundColor={styles.bgColor}>
      <Container width="$full" flex={1}>
        <VStack
          top={top}
          padding={"$4"}
          alignItems="flex-start"
          width="$full"
          flex={1}
        >
          <BackButton></BackButton>
          <Image
            alt="eCommerce logo in white"
            marginBottom={"$4"}
            alignSelf="center"
            source={{
              uri: logoUrl,
              width: imageSize,
              height: imageSize / 2,
            }}
          ></Image>
          <ScrollView width="$full">
            <VStack space={"$4"} marginTop={"$5"} width="$full" flex={1}>
              <TitleTwo fontWeight="$medium">Sign up</TitleTwo>
              <Input
                placeholder="Enter your first name..."
                IconLeftComponent={User}
              ></Input>
              <Input
                placeholder="Enter your email"
                IconLeftComponent={Mail}
              ></Input>
              <Input
                placeholder="Enter your password"
                secureTextEntry={true}
                IconLeftComponent={Lock}
              ></Input>
              <HStack
                space={"$3"}
                width="$full"
                marginTop={"$2"}
                marginBottom={"$1"}
              >
                <Subhead flex={1}>
                  Send me exclusive offers, unique gift ideas, and personalized
                  tips for shopping
                </Subhead>

                <Switch></Switch>
              </HStack>
              <Button
                marginBottom={"$5"}
                onPress={() => router.replace("/sign-in")}
              >
                Sign up
              </Button>
              <HStack
                alignItems="center"
                justifyContent="center"
                marginBottom={bottom}
              >
                <Body>If you have an account, </Body>

                <Body
                  onPress={() => router.replace("sign-in")}
                  fontWeight="$bold"
                  cursor={"pointer"}
                  textDecorationLine="underline"
                >
                  Sign in
                </Body>
              </HStack>
            </VStack>
          </ScrollView>
        </VStack>
      </Container>
    </Box>
  );
};

export default SignUp;
