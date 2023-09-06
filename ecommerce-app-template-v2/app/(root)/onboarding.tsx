import {
  Image,
  Box,
  TitleOne,
  useColorModeValue,
  ZStack,
  useTheme,
  ScrollView,
  HStack,
  VStack,
  Body,
  Button,
} from "@spirokit/ui";
import { router } from "expo-router";
import { Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "assets/logo-white.png";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const isWeb = Platform.OS === "web";
const imageSize = isWeb ? 64 : screenWidth * 0.65;

const OnboardingScreen = () => {
  const { colorMode } = useTheme();
  const { bottom } = useSafeAreaInsets();

  const styles = {
    backgroundColor: useColorModeValue(
      "$primaryGray.100",
      "$primaryDark.0",
      colorMode
    ),
  };

  return (
    <ZStack
      flex={1}
      alignItems="center"
      style={{
        backgroundColor: styles.backgroundColor,
      }}
    >
      <Image
        source={{ uri: "https://i.imgur.com/CKBrViE.png" }}
        width={screenWidth}
        height={screenHeight}
        resizeMode="cover"
        alt="clothing background"
      ></Image>
      <Box
        padding={"$4"}
        height={"$full"}
        width="$full"
        alignItems="center"
        justifyContent="center"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Box
            alignItems="center"
            width="$full"
            justifyContent="center"
            flex={1}
          >
            <Image
              alt="Logo"
              marginBottom={"$6"}
              width={imageSize}
              height={imageSize / 2}
              resizeMode="contain"
              source={Logo}
            ></Image>
            <TitleOne
              fontSize="$4xl"
              textAlign="center"
              width="$3/5"
              color="$white"
              numberOfLines={2}
            >
              Trends at your fingertips
            </TitleOne>
          </Box>
          <VStack
            width="$full"
            alignItems="center"
            space={"$4"}
            padding={"$4"}
            bottom={bottom}
          >
            <Button width="$full" onPress={() => router.replace("/sign-up")}>
              Join us!
            </Button>
            <HStack alignItems="center">
              <Body color="white">If you have an account, </Body>
              <Body
                onPress={() => router.replace("/sign-in")}
                fontWeight="$bold"
                color="$white"
                textDecorationLine="underline"
              >
                Sign in
              </Body>
            </HStack>
          </VStack>
        </ScrollView>
      </Box>
    </ZStack>
  );
};

export default OnboardingScreen;
