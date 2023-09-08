import {
  Box,
  Button,
  HStack,
  ScrollView,
  Subhead,
  useColorModeValue,
  VStack,
  ZStack,
  Image,
  getTokens,
  Footnote,
  TitleTwo,
  Container,
  TitleThree,
} from "@spirokit/ui";
import {
  Check,
  ChevronRight,
  Clock,
  Phone,
  Users,
} from "@tamagui/lucide-icons";
import BackButton from "components/BackButton";
import Score from "components/Score";
import React from "react";
import { Alert, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const isWeb = Platform.OS === "web";

const Detail = () => {
  const { top } = useSafeAreaInsets();

  const styles = {
    descriptionColor: useColorModeValue("$primaryGray.700", "$primaryGray.300"),
    backgroundColor: useColorModeValue("$primaryGray.100", "$primaryDark.24"),
    header: {
      backgroundColor: useColorModeValue("white", "$primaryDark.1"),
    },
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
    buttonTextColor: useColorModeValue("$primary.500", "$primary.300"),
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      backgroundColor={styles.backgroundColor}
    >
      <Container width={"$full"} flex={1}>
        <Box flex={1} width="$full">
          <ZStack height={"$48"} width="$full">
            <Image
              alt="details image"
              source={{ uri: "https://i.imgur.com/C1oYr4L.jpg" }}
              width={"$full"}
              height={48 * 4}
            ></Image>
            {!isWeb ? (
              <Box padding={"$4"} paddingTop={top}>
                <BackButton></BackButton>
              </Box>
            ) : null}
          </ZStack>
          <VStack
            marginTop={-8}
            borderTopLeftRadius={16}
            borderTopRightRadius={16}
            padding={"$4"}
            flex={1}
            space={"$6"}
            width="$full"
          >
            <TitleTwo fontWeight={"$bold"}>
              Reykjavik Food Walk - Local Foodie Adventure in Iceland
            </TitleTwo>
            <Subhead>By Wake Up Reykjavik</Subhead>

            <ReviewsSummary></ReviewsSummary>

            <Box width={"$full"}>
              <Subhead color={styles.textColor} flex={1}>
                Explore Reykjavik’s abundance of food spots, and expand your
                knowledge of Icelandic cuisine on this exciting food walk. No
                need to worry about stopping to pay at each...
              </Subhead>
              <Button
                alignSelf={"flex-end"}
                variant="tertiary"
                textColor={styles.buttonTextColor}
              >
                Read more...
              </Button>
            </Box>
            <Features></Features>
            <Highlights></Highlights>
            <AdditionalLinks></AdditionalLinks>
            <ReviewsSummary></ReviewsSummary>
            <ReviewsComplete></ReviewsComplete>
            <CallToAction></CallToAction>
          </VStack>
        </Box>
      </Container>
    </ScrollView>
  );
};

export default Detail;

const ReviewsSummary = () => {
  const styles = {
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
  };

  return (
    <HStack alignItems={"center"} space={"$2"}>
      <Score value={5}></Score>
      <Footnote color={styles.textColor}>745 reviews</Footnote>
    </HStack>
  );
};

const ReviewsComplete = () => {
  const styles = {
    backgroundColor: useColorModeValue("$primary.500", "$primary.300"),
  };
  return (
    <VStack space={"$1"}>
      <HStack alignItems={"center"} space={"$2"}>
        <Subhead minWidth={"$24"} lineHeight={"$sm"}>
          Excellent
        </Subhead>
        <Box
          width={"$32"}
          height={"$2"}
          backgroundColor={styles.backgroundColor}
          borderRadius={"$12"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Subhead minWidth={"$24"} lineHeight={"$sm"}>
          Very good
        </Subhead>
        <Box
          width={"$8"}
          height={"$2"}
          backgroundColor={styles.backgroundColor}
          borderRadius={"$12"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Subhead minWidth={"$24"} lineHeight={"$sm"}>
          Average
        </Subhead>
        <Box
          width={"$6"}
          height={"$2"}
          backgroundColor={styles.backgroundColor}
          borderRadius={"$12"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Subhead minWidth={"$24"} lineHeight={"$sm"}>
          Poor
        </Subhead>
        <Box
          width={"$3"}
          height={"$2"}
          backgroundColor={styles.backgroundColor}
          borderRadius={"$12"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Subhead minWidth={"$24"} lineHeight={"$sm"}>
          Terrible
        </Subhead>
        <Box
          width={"$2"}
          height={"$2"}
          backgroundColor={styles.backgroundColor}
          borderRadius={"$12"}
        ></Box>
      </HStack>
    </VStack>
  );
};

const Features = () => {
  const { color } = getTokens();
  const styles = {
    backgroundColor: useColorModeValue("$primary.500", "$primary.300"),
    textColor: useColorModeValue("$primaryGray.600", "$primary.300"),
  };
  return (
    <VStack
      borderWidth={1}
      borderColor={styles.backgroundColor}
      padding={"$2"}
      space={"$2"}
      borderRadius={8}
    >
      <HStack alignItems={"center"} space={"$2"}>
        <Check
          color={useColorModeValue(
            color["$primaryGray.600"].val,
            color["$primary.300"].val
          )}
        ></Check>
        <Subhead color={styles.textColor}>Free cancelation</Subhead>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Users
          color={useColorModeValue(
            color["$primaryGray.600"].val,
            color["$primary.300"].val
          )}
        ></Users>
        <Subhead color={styles.textColor}>
          All ages. max of 15 per group
        </Subhead>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Clock
          color={useColorModeValue(
            color["$primaryGray.600"].val,
            color["$primary.300"].val
          )}
        ></Clock>
        <Subhead color={styles.textColor}>Duration: 1h 30m</Subhead>
      </HStack>
      <HStack alignItems={"center"} space={"$2"}>
        <Phone
          color={useColorModeValue(
            color["$primaryGray.600"].val,
            color["$primary.300"].val
          )}
        ></Phone>
        <Subhead color={styles.textColor}>Mobile ticket</Subhead>
      </HStack>
    </VStack>
  );
};

const Highlights = () => {
  const styles = {
    iconColor: useColorModeValue("$black", "$white"),
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
  };
  return (
    <Box>
      <TitleThree marginBottom={"$2"}>Highlights</TitleThree>
      <VStack space={"$2"}>
        <HStack alignItems={"center"} space={"$2"}>
          <Check color={styles.iconColor}></Check>
          <Subhead color={styles.textColor}>Free cancelation</Subhead>
        </HStack>
        <HStack alignItems={"center"} space={"$2"}>
          <Check color={styles.iconColor}></Check>
          <Subhead color={styles.textColor}>
            All ages. max of 15 per group
          </Subhead>
        </HStack>
        <HStack alignItems={"center"} space={"$2"}>
          <Check color={styles.iconColor}></Check>
          <Subhead color={styles.textColor}>Duration: 1h 30m</Subhead>
        </HStack>
        <HStack alignItems={"center"} space={"$2"}>
          <Check color={styles.iconColor}></Check>
          <Subhead color={styles.textColor}>Mobile ticket</Subhead>
        </HStack>
      </VStack>
    </Box>
  );
};

const AdditionalLinks = () => {
  const styles = {
    borderColor: useColorModeValue("$primaryGray.500", "$primaryGray.500"),
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
    iconColor: useColorModeValue("$black", "$white"),
  };

  return (
    <VStack
      borderTopColor={"$primaryGray.700"}
      borderTopWidth={1}
      borderBottomColor={styles.borderColor}
      borderBottomWidth={1}
    >
      <HStack
        onPress={() => Alert.alert("What’s included? tapped")}
        alignItems={"center"}
        padding={"$2"}
        borderBottomColor={styles.borderColor}
        borderBottomWidth={1}
      >
        <Subhead color={styles.textColor} flex={1}>
          What’s included?
        </Subhead>
        <ChevronRight color={styles.iconColor}></ChevronRight>
      </HStack>

      <HStack
        onPress={() => Alert.alert("Departure and return tapped")}
        alignItems={"center"}
        padding={"$2"}
        borderBottomColor={styles.borderColor}
        borderBottomWidth={1}
      >
        <Subhead color={styles.textColor} flex={1}>
          Departure and return
        </Subhead>
        <ChevronRight color={styles.iconColor}></ChevronRight>
      </HStack>

      <HStack
        onPress={() => Alert.alert("Accessibility tapped")}
        alignItems={"center"}
        padding={"$2"}
        borderBottomColor={styles.borderColor}
        borderBottomWidth={1}
      >
        <Subhead color={styles.textColor} flex={1}>
          Accessibility
        </Subhead>
        <ChevronRight color={styles.iconColor}></ChevronRight>
      </HStack>
      <HStack
        onPress={() => Alert.alert("Additional information tapped")}
        alignItems={"center"}
        padding={"$2"}
      >
        <Subhead color={styles.textColor} flex={1}>
          Additional information
        </Subhead>
        <ChevronRight color={styles.iconColor}></ChevronRight>
      </HStack>
    </VStack>
  );
};

const CallToAction = () => {
  const styles = {
    textColor: useColorModeValue("$primaryGray.600", "$primaryGray.300"),
  };
  return (
    <HStack paddingVertical={"$4"} alignItems={"center"} space={"$4"}>
      <VStack flex={1}>
        <TitleTwo fontWeight={"$bold"}>$119.00</TitleTwo>
        <Subhead color={styles.textColor}>per adult</Subhead>
      </VStack>
      <Button>Check availability</Button>
    </HStack>
  );
};
