import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import {
  Body,
  Box,
  FlatList,
  HStack,
  Pressable,
  useColorModeValue,
  useTheme,
  VStack,
  Image,
  Subhead,
  Button,
} from "@spirokit/core";
import React from "react";
import {
  ChevronRightIcon,
  CreditCardIcon,
  EyeOffIcon,
  HeartIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  LogoutIcon,
  ShoppingBagIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { SvgProps } from "react-native-svg";
import { GlobalParamList } from "../navigation/GlobalParamList";

type MoreProps = StackScreenProps<GlobalParamList, "More">;

const More = (props: MoreProps) => {
  const { navigation } = props;
  return (
    <VStack
      space={4}
      padding={4}
      flex={1}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
    >
      <AccountHeaderCard
        name="Mauro Garcia"
        email="mauro@spirokit.com"
      ></AccountHeaderCard>
      <AccountOptions navigation={navigation}></AccountOptions>
    </VStack>
  );
};

type AccountHeaderCardProps = {
  name: string;
  email: string;
};

const AccountHeaderCard = (props: AccountHeaderCardProps) => {
  const styles = {
    background: useColorModeValue("primaryGray.200", "primaryDark.4"),
    nameColor: useColorModeValue("black", "white"),
    emailColor: useColorModeValue("primaryGray.700", "primaryGray.300"),
  };
  return (
    <HStack
      space={4}
      alignItems="center"
      padding={4}
      width="full"
      borderRadius={8}
      backgroundColor={styles.background}
    >
      <Image
        borderRadius="full"
        alt="Avatar image"
        source={{ uri: "https://i.imgur.com/RYaa2v0.png" }}
        width={16}
        height={16}
      ></Image>
      <VStack flex={1}>
        <Body color={styles.nameColor} fontWeight="medium">
          {props.name}
        </Body>
        <Subhead color={styles.emailColor}>{props.email}</Subhead>
      </VStack>

      <Button
        width="auto"
        variant="tertiary"
        onPress={() => console.log("Logout tapped")}
        IconLeftComponent={LogoutIcon}
      ></Button>
    </HStack>
  );
};

type AccountOption = {
  IconComponent: (props: SvgProps) => JSX.Element;
  label: string;
  route: string;
  tab?: string;
};
const AccountOptions = (props: { navigation: StackNavigationProp<any> }) => {
  const navigation = props.navigation;
  const { colors } = useTheme();

  const styles = {
    iconColor: useColorModeValue(
      colors.primaryGray[900],
      colors.primaryGray[100]
    ),
    separatorColor: useColorModeValue("primaryGray.300", "primaryGray.500"),
  };

  const options: AccountOption[] = [
    {
      IconComponent: UserIcon,
      label: "Profile",
      route: "Profile",
    },
    {
      IconComponent: CreditCardIcon,
      label: "My Cards",
      route: "MyCards",
    },
    {
      IconComponent: ShoppingBagIcon,
      label: "My orders",
      route: "MyOrders",
    },
    {
      IconComponent: LocationMarkerIcon,
      label: "My Addresses",
      route: "MyAddresses",
    },
    {
      IconComponent: HeartIcon,
      label: "Favorites",
      route: "Favorites",
      tab: "FavoritesTab",
    },
    {
      IconComponent: EyeOffIcon,
      label: "Privacy Policy",
      route: "PrivacyPolicy",
    },
  ];

  return (
    <FlatList
      data={options}
      ListFooterComponent={() => <AccountHelpCard></AccountHelpCard>}
      ItemSeparatorComponent={() => (
        <Box
          marginY={4}
          width="full"
          height={0.5}
          backgroundColor={styles.separatorColor}
        ></Box>
      )}
      renderItem={({ item }) => (
        <HStack alignItems="center" space={4} paddingY={2}>
          {item.IconComponent({
            width: 24,
            height: 24,
            color: styles.iconColor,
          })}
          <Body fontWeight="medium" flex={1}>
            {item.label}
          </Body>
          <Pressable
            onPress={() => {
              return navigation.navigate(item.route);
            }}
          >
            {ChevronRightIcon({
              width: 24,
              height: 24,
              color: styles.iconColor,
            })}
          </Pressable>
        </HStack>
      )}
    ></FlatList>
  );
};

const AccountHelpCard = () => {
  const { colors } = useTheme();
  const styles = {
    background: useColorModeValue("primaryGray.200", "primaryDark.4"),
    iconColor: useColorModeValue(colors.primary[500], colors.primary[300]),
  };
  return (
    <HStack
      marginTop={4}
      space={4}
      alignItems="center"
      padding={4}
      justifyContent="center"
      width="full"
      borderRadius={8}
      backgroundColor={styles.background}
    >
      {InformationCircleIcon({
        width: 40,
        height: 40,
        color: styles.iconColor,
      })}
      <Body>How can we help you?</Body>
    </HStack>
  );
};

export default More;
