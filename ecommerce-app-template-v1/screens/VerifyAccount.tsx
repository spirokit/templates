import {
  Body,
  Box,
  Button,
  Image,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
  ZStack,
} from "@spirokit/core";
import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { MailIcon } from "react-native-heroicons/outline";
import Bg from "../assets/verify-account-bg.png";

const imageHeight = Dimensions.get("screen").height;

const VerifyAccount = () => {
  const { colors } = useTheme();

  const styles = {
    bg: useColorModeValue("primaryGray.100", "primaryDark.0"),
    iconColor: useColorModeValue(colors.primaryGray[900], "white"),
    resendEmailTextColor: useColorModeValue("primaryGray.900", "primary.300"),
  };

  return (
    <Box flex={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ZStack flex={1} justifyContent="flex-end">
          <Image
            alt="Coat rack with clothes of various colors"
            source={Bg}
            width={"full"}
            height={imageHeight}
          ></Image>
          <VStack width="full">
            <VStack
              safeAreaBottom
              space={8}
              backgroundColor={styles.bg}
              width="full"
            >
              <VStack space={4} padding={5}>
                <MailIcon size={64} color={styles.iconColor}></MailIcon>
                <TitleTwo fontWeight="medium">Check your email</TitleTwo>
                <Body>
                  Tap the button in the email we’ve sent you to verify your
                  account
                </Body>
              </VStack>
              <VStack space={4} paddingX={5}>
                <Button textColor="black">Sign in</Button>
                <Button
                  variant="tertiary"
                  textColor={styles.resendEmailTextColor}
                >
                  Resend email
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </ZStack>
      </ScrollView>
    </Box>
  );
};

export default VerifyAccount;
