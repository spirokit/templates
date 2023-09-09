import {
  Body,
  Box,
  FlatList,
  HStack,
  useColorModeValue,
  VStack,
  Image,
  Subhead,
  Button,
  ScrollView,
  IconProps,
  getTokens,
  ZStack,
  Container,
} from "@spirokit/ui";
import React from "react";
import {
  ChevronRight,
  CreditCard,
  EyeOff,
  Heart,
  Info,
  MapPin,
  LogOut,
  ShoppingBag,
  User,
  Camera,
} from "@tamagui/lucide-icons";

const More = () => {
  const styles = {
    bgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      backgroundColor={styles.bgColor}
    >
      <Container flex={1} width="$full">
        <VStack width={"$full"} space={"$4"} padding={"$4"} flex={1}>
          <AccountHeaderCard
            name="Mauro Garcia"
            email="mauro@spirokit.com"
          ></AccountHeaderCard>
          <AccountOptions></AccountOptions>
        </VStack>
      </Container>
    </ScrollView>
  );
};

type AccountHeaderCardProps = {
  name: string;
  email: string;
};

const AccountHeaderCard = (props: AccountHeaderCardProps) => {
  const styles = {
    background: useColorModeValue("$primaryGray.200", "$primaryDark.4"),
    nameColor: useColorModeValue("$black", "$white"),
    emailColor: useColorModeValue("$primaryGray.700", "$primaryGray.300"),
  };
  return (
    <HStack
      space={"$4"}
      alignItems="center"
      padding={"$4"}
      width="$full"
      borderRadius={8}
      backgroundColor={styles.background}
    >
      <ZStack width={16 * 4} height={16 * 4}>
        <Image
          borderRadius="$12"
          alt="Avatar image"
          source={{ uri: "https://i.imgur.com/RYaa2v0.png" }}
          width={16 * 4}
          height={16 * 4}
        ></Image>
        <Box
          width={16 * 4}
          height={16 * 4}
          justifyContent="center"
          alignItems="center"
          onPress={() => console.log("Camera tapped")}
        >
          <Camera width={24} height={24} color="white"></Camera>
        </Box>
      </ZStack>
      <VStack flex={1}>
        <Body color={styles.nameColor} fontWeight="$medium">
          {props.name}
        </Body>
        <Subhead color={styles.emailColor}>{props.email}</Subhead>
      </VStack>

      <Button
        variant="tertiary"
        onPress={() => console.log("Logout tapped")}
        IconLeftComponent={LogOut}
      ></Button>
    </HStack>
  );
};

type AccountOption = {
  IconComponent: React.NamedExoticComponent<IconProps>;
  label: string;
  route: string;
  tab?: string;
};
const AccountOptions = () => {
  const { color } = getTokens();
  const styles = {
    iconColor: useColorModeValue(
      color["$primary.600"].val,
      color["$primary.300"].val
    ),
    separatorColor: useColorModeValue("$primaryGray.300", "$primaryGray.500"),
  };

  const options: AccountOption[] = [
    {
      IconComponent: User,
      label: "Profile",
      route: "Profile",
    },
    {
      IconComponent: CreditCard,
      label: "My Cards",
      route: "MyCards",
    },
    {
      IconComponent: ShoppingBag,
      label: "My orders",
      route: "MyOrders",
    },
    {
      IconComponent: MapPin,
      label: "My Addresses",
      route: "MyAddresses",
    },
    {
      IconComponent: Heart,
      label: "Favorites",
      route: "Favorites",
      tab: "FavoritesTab",
    },
    {
      IconComponent: EyeOff,
      label: "Privacy Policy",
      route: "PrivacyPolicy",
    },
  ];

  return (
    <FlatList
      data={options}
      estimatedItemSize={70}
      ListFooterComponent={() => <AccountHelpCard></AccountHelpCard>}
      ItemSeparatorComponent={() => (
        <Box
          marginVertical={"$4"}
          width="$full"
          height={"$0.5"}
          backgroundColor={styles.separatorColor}
        ></Box>
      )}
      renderItem={({ item }) => {
        const ItemComponent = item.IconComponent;

        return (
          <HStack
            alignItems="center"
            space={"$4"}
            paddingVertical={"$2"}
            onPress={() => {
              console.log(`navigate to ${item.route}`);
            }}
          >
            <ItemComponent
              width={24}
              height={24}
              color={styles.iconColor}
            ></ItemComponent>

            <Body fontWeight="$medium" flex={1}>
              {item.label}
            </Body>

            <ChevronRight
              width={24}
              height={24}
              color={styles.iconColor}
            ></ChevronRight>
          </HStack>
        );
      }}
    ></FlatList>
  );
};

const AccountHelpCard = () => {
  const { color } = getTokens();
  const styles = {
    background: useColorModeValue("$primaryGray.200", "$primaryDark.4"),
    iconColor: useColorModeValue(
      color["$primary.500"].val,
      color["$primary.300"].val
    ),
  };
  return (
    <HStack
      marginTop={"$4"}
      space={"$4"}
      alignItems="center"
      padding={"$4"}
      justifyContent="center"
      width="$full"
      borderRadius={8}
      backgroundColor={styles.background}
    >
      <Info width={40} height={40} color={styles.iconColor}></Info>
      <Body>How can we help you?</Body>
    </HStack>
  );
};

export default More;
