import {
  Box,
  Button,
  Footnote,
  HStack,
  Image,
  Pressable,
  Subhead,
  TitleThree,
  TitleTwo,
  useColorModeValue,
  useTheme,
  VStack,
  ZStack,
} from "@spirokit/core";
import React, { memo } from "react";
import { Alert, ScrollView } from "react-native";
import {
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  DeviceMobileIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";
import BackButton from "../components/BackButton";
import Score from "../components/Score";

const DetailScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(
          colors.primaryGray["100"],
          colors.primaryDark["1"]
        ),
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Box flex={1}>
        <ZStack height={48} width="full" alignItems="flex-start">
          <Image
            alt="details image"
            source={{ uri: "https://i.imgur.com/C1oYr4L.jpg" }}
            width="full"
            height={48}
          ></Image>
          <Box padding={4} safeArea>
            <BackButton></BackButton>
          </Box>
        </ZStack>
        <VStack
          marginTop={-2}
          borderTopRadius={16}
          padding={4}
          flex={1}
          space={4}
          width="full"
          backgroundColor={useColorModeValue("white", "primaryDark.1")}
        >
          <Box>
            <TitleTwo fontWeight={"bold"}>
              Reykjavik Food Walk - Local Foodie Adventure in Iceland
            </TitleTwo>
            <Subhead>By Wake Up Reykjavik</Subhead>
          </Box>

          <ReviewsSummary></ReviewsSummary>

          <Box width={"full"}>
            <Subhead
              color={useColorModeValue("primaryGray.600", "primaryGray.300")}
              flex={1}
            >
              Explore Reykjavik’s abundance of food spots, and expand your
              knowledge of Icelandic cuisine on this exciting food walk. No need
              to worry about stopping to pay at each...
            </Subhead>
            <Button
              size="sm"
              alignSelf={"flex-end"}
              variant="tertiary"
              textColor={useColorModeValue("primary.500", "primary.300")}
              width={"auto"}
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
    </ScrollView>
  );
};

const ReviewsSummary = () => {
  return (
    <HStack alignItems={"center"} space={2}>
      <Score value={5}></Score>
      <Footnote color={useColorModeValue("primaryGray.600", "primaryGray.300")}>
        745 reviews
      </Footnote>
    </HStack>
  );
};

const ReviewsComplete = () => {
  return (
    <VStack space={1}>
      <HStack alignItems={"center"} space={2}>
        <Subhead minWidth={24} lineHeight={"sm"}>
          Excellent
        </Subhead>
        <Box
          width={32}
          height={2}
          backgroundColor={useColorModeValue("primary.500", "primary.300")}
          borderRadius={"full"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <Subhead minWidth={24} lineHeight={"sm"}>
          Very good
        </Subhead>
        <Box
          width={8}
          height={2}
          backgroundColor={useColorModeValue("primary.500", "primary.300")}
          borderRadius={"full"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <Subhead minWidth={24} lineHeight={"sm"}>
          Average
        </Subhead>
        <Box
          width={6}
          height={2}
          backgroundColor={useColorModeValue("primary.500", "primary.300")}
          borderRadius={"full"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <Subhead minWidth={24} lineHeight={"sm"}>
          Poor
        </Subhead>
        <Box
          width={3}
          height={2}
          backgroundColor={useColorModeValue("primary.500", "primary.300")}
          borderRadius={"full"}
        ></Box>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <Subhead minWidth={24} lineHeight={"sm"}>
          Terrible
        </Subhead>
        <Box
          width={2}
          height={2}
          backgroundColor={useColorModeValue("primary.500", "primary.300")}
          borderRadius={"full"}
        ></Box>
      </HStack>
    </VStack>
  );
};

const Features = () => {
  const { colors } = useTheme();

  return (
    <VStack
      borderWidth={1}
      borderColor={useColorModeValue("primary.500", "primary.300")}
      padding={2}
      space={2}
      borderRadius={8}
    >
      <HStack alignItems={"center"} space={2}>
        <CheckIcon
          color={useColorModeValue(
            colors.primaryGray[600],
            colors.primary[300]
          )}
        ></CheckIcon>
        <Subhead color={useColorModeValue("primaryGray.600", "primary.300")}>
          Free cancelation
        </Subhead>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <UserGroupIcon
          color={useColorModeValue(
            colors.primaryGray[600],
            colors.primary[300]
          )}
        ></UserGroupIcon>
        <Subhead color={useColorModeValue("primaryGray.600", "primary.300")}>
          All ages. max of 15 per group
        </Subhead>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <ClockIcon
          color={useColorModeValue(
            colors.primaryGray[600],
            colors.primary[300]
          )}
        ></ClockIcon>
        <Subhead color={useColorModeValue("primaryGray.600", "primary.300")}>
          Duration: 1h 30m
        </Subhead>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <DeviceMobileIcon
          color={useColorModeValue(
            colors.primaryGray[600],
            colors.primary[300]
          )}
        ></DeviceMobileIcon>
        <Subhead color={useColorModeValue("primaryGray.600", "primary.300")}>
          Mobile ticket
        </Subhead>
      </HStack>
    </VStack>
  );
};

const Highlights = () => {
  return (
    <Box>
      <TitleThree marginBottom={2}>Highlights</TitleThree>
      <VStack space={2}>
        <HStack alignItems={"center"} space={2}>
          <CheckIcon color={useColorModeValue("black", "white")}></CheckIcon>
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          >
            Free cancelation
          </Subhead>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <CheckIcon color={useColorModeValue("black", "white")}></CheckIcon>
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          >
            All ages. max of 15 per group
          </Subhead>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <CheckIcon color={useColorModeValue("black", "white")}></CheckIcon>
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          >
            Duration: 1h 30m
          </Subhead>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <CheckIcon color={useColorModeValue("black", "white")}></CheckIcon>
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          >
            Mobile ticket
          </Subhead>
        </HStack>
      </VStack>
    </Box>
  );
};

const AdditionalLinks = () => {
  return (
    <VStack
      borderTopColor={"primaryGray.700"}
      borderTopWidth={1}
      borderBottomColor={useColorModeValue(
        "primaryGray.500",
        "primaryGray.700"
      )}
      borderBottomWidth={1}
    >
      <Pressable onPress={() => Alert.alert("What’s included? tapped")}>
        <HStack
          alignItems={"center"}
          padding={2}
          borderBottomColor={useColorModeValue(
            "primaryGray.500",
            "primaryGray.700"
          )}
          borderBottomWidth={1}
        >
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
            flex={1}
          >
            What’s included?
          </Subhead>
          <ChevronRightIcon
            color={useColorModeValue("black", "white")}
          ></ChevronRightIcon>
        </HStack>
      </Pressable>
      <Pressable onPress={() => Alert.alert("Departure and return tapped")}>
        <HStack
          alignItems={"center"}
          padding={2}
          borderBottomColor={useColorModeValue(
            "primaryGray.500",
            "primaryGray.700"
          )}
          borderBottomWidth={1}
        >
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
            flex={1}
          >
            Departure and return
          </Subhead>
          <ChevronRightIcon
            color={useColorModeValue("black", "white")}
          ></ChevronRightIcon>
        </HStack>
      </Pressable>
      <Pressable onPress={() => Alert.alert("Accessibility tapped")}>
        <HStack
          alignItems={"center"}
          padding={2}
          borderBottomColor={useColorModeValue(
            "primaryGray.500",
            "primaryGray.700"
          )}
          borderBottomWidth={1}
        >
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
            flex={1}
          >
            Accessibility
          </Subhead>
          <ChevronRightIcon
            color={useColorModeValue("black", "white")}
          ></ChevronRightIcon>
        </HStack>
      </Pressable>
      <Pressable onPress={() => Alert.alert("Additional information tapped")}>
        <HStack alignItems={"center"} padding={2}>
          <Subhead
            color={useColorModeValue("primaryGray.600", "primaryGray.300")}
            flex={1}
          >
            Additional information
          </Subhead>
          <ChevronRightIcon
            color={useColorModeValue("black", "white")}
          ></ChevronRightIcon>
        </HStack>
      </Pressable>
    </VStack>
  );
};

const CallToAction = () => {
  return (
    <HStack paddingY={4} alignItems={"center"} space={4}>
      <VStack flex={1}>
        <TitleTwo fontWeight={"bold"}>$119.00</TitleTwo>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
        >
          per adult
        </Subhead>
      </VStack>
      <Button width={"auto"}>Check availability</Button>
    </HStack>
  );
};

export default memo(DetailScreen);
