import { useNavigation } from "@react-navigation/native";
import {
  ZStack,
  Image,
  Box,
  TitleOne,
  Button,
  HStack,
  Body,
  VStack,
  Pressable,
  useTheme,
  useColorModeValue,
} from "@spirokit/core";
import { Dimensions, Platform } from "react-native";
import Logo from "../assets/logo-white.png";
import Container from "../components/Container";

const isWeb = Platform.OS === "web";
const imageSize = isWeb ? 64 : Dimensions.get("screen").width * 0.65;

const Onboarding = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <ZStack
      flex={1}
      alignItems="center"
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["0"]
        ),
      }}
    >
      <Image
        source={{ uri: "https://i.imgur.com/CKBrViE.png" }}
        width="full"
        height="full"
        resizeMode="cover"
        alt="clothing background"
      ></Image>
      <Box
        safeArea
        padding={4}
        height="full"
        width="full"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Box
            alignItems="center"
            width="full"
            justifyContent="center"
            flex={1}
          >
            <Image
              alt="Logo"
              marginBottom={6}
              width={imageSize}
              height={imageSize / 2}
              resizeMode="contain"
              source={Logo}
            ></Image>
            <TitleOne
              fontSize="4xl"
              textAlign="center"
              width="3/5"
              color="white"
              numberOfLines={2}
            >
              Trends at your fingertips
            </TitleOne>
          </Box>
          <VStack width="full" alignItems="center" space={4} padding={4}>
            <Button width="full" onPress={() => navigation.navigate("SignUp")}>
              Join us!
            </Button>
            <HStack alignItems="center">
              <Body color="white">If you have an account, </Body>
              <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Body
                  fontWeight="bold"
                  color="white"
                  textDecorationLine="underline"
                >
                  Sign in
                </Body>
              </Pressable>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </ZStack>
  );
};

export default Onboarding;
