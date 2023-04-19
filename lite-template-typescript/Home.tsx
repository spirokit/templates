import {
  AccentColor,
  Alert,
  Button,
  Footnote,
  HStack,
  Image,
  Input,
  Subhead,
  TitleThree,
  TitleTwo,
  useColorMode,
  useColorModeValue,
  useTheme,
  VStack,
} from "@spirokit/lite";
import { useState } from "react";
import {
  LockClosedIcon,
  MapIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";

type HomeProps = {
  onUpdateAccentColor: (accentColor: AccentColor) => void;
};

const Home = (props: HomeProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colors } = useTheme();

  const bgColor = useColorModeValue("white", colors.primaryDark[0], colorMode);

  const onRandomizeThemeTapped = () => {
    const accentColors: AccentColor[] = [
      "indigo",
      "red",
      "blue",
      "orange",
      "emerald",
    ];
    const randomAccentColor =
      accentColors[Math.floor(Math.random() * accentColors.length)];
    props.onUpdateAccentColor(randomAccentColor);
  };

  return (
    <ScrollView
      style={{ backgroundColor: bgColor }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack space={4} safeArea flex={1} padding={4}>
        <HStack alignItems={"center"} space={4}>
          <Image
            alt="SpiroKit logo"
            size={"40px"}
            resizeMode="contain"
            source={{ uri: "https://i.imgur.com/TvHaA0H.png" }}
          ></Image>
          <TitleTwo>Welcome to SpiroKit</TitleTwo>
        </HStack>
        <HStack space={4}>
          <Button size="sm" onPress={() => toggleColorMode()}>
            Light/Dark mode
          </Button>
          <Button size="sm" onPress={() => onRandomizeThemeTapped()}>
            Randomize theme
          </Button>
        </HStack>
        <Inputs></Inputs>
        <Buttons></Buttons>
        <Alerts></Alerts>
      </VStack>
    </ScrollView>
  );
};

const Inputs = () => {
  const subtitleColor = useColorModeValue("primary.700", "primary.300");
  return (
    <>
      <TitleThree paddingY={4}>Inputs</TitleThree>
      <VStack space={4}>
        <VStack>
          <Footnote color={subtitleColor}>Basic example</Footnote>
          <Input
            placeholder="Enter your username..."
            IconLeftComponent={UserIcon}
          ></Input>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Icon left</Footnote>
          <Input
            placeholder="Enter your username..."
            IconRightComponent={UserIcon}
          ></Input>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Icon right</Footnote>
          <Input
            IconLeftComponent={LockClosedIcon}
            placeholder="Enter your password..."
            secureTextEntry={true}
          ></Input>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>With action button</Footnote>
          <Input
            IconLeftComponent={UserIcon}
            placeholder="Pick your username..."
            ButtonComponent={
              <Button onPress={() => console.log("action button pressed")}>
                Check
              </Button>
            }
          ></Input>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>With label</Footnote>
          <Input
            IconLeftComponent={MapIcon}
            placeholder="Enter your adress..."
            LabelComponent={<Subhead>Adress</Subhead>}
          ></Input>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Disabled</Footnote>
          <Input placeholder="Enter your adress..." isDisabled></Input>
        </VStack>
      </VStack>
    </>
  );
};

const Buttons = () => {
  const subtitleColor = useColorModeValue("primary.700", "primary.300");
  return (
    <>
      <TitleThree paddingY={4}>Buttons</TitleThree>
      <VStack space={4}>
        <VStack>
          <Footnote color={subtitleColor}>Basic example</Footnote>
          <Button>Press me</Button>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Small & Extra Small buttons</Footnote>
          <HStack alignItems={"center"} space={2}>
            <Button size="sm" flex={1}>
              Press me
            </Button>
            <Button size="xs" flex={1}>
              Press me
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>With icons</Footnote>
          <HStack alignItems={"center"} space={2}>
            <Button IconLeftComponent={MapIcon} size="sm" flex={1}>
              Press me
            </Button>
            <Button IconRightComponent={MapIcon} size="sm" flex={1}>
              Press me
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Secondary and tertiary</Footnote>
          <HStack alignItems={"center"} space={2}>
            <Button variant="secondary" size="sm" flex={1}>
              Press me
            </Button>
            <Button variant="tertiary" size="sm" flex={1}>
              Press me
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Disabled</Footnote>
          <Button isDisabled size="sm" flex={1}>
            Press me
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

const Alerts = () => {
  const subtitleColor = useColorModeValue("primary.700", "primary.300");
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showTypeOfAlertModal, setShowTypeOfAlertModal] = useState(false);
  const [typeOfAlert, setTypeOfAlert] = useState<"warning" | "error" | "info">(
    "info"
  );

  return (
    <>
      <TitleThree paddingY={4}>Alerts</TitleThree>
      <VStack space={4}>
        <VStack>
          <Footnote color={subtitleColor}>Basic example</Footnote>
          <Button size="sm" onPress={() => setShowBasicModal(true)}>
            Open alert
          </Button>
          <Alert
            onClose={() => setShowBasicModal(false)}
            TitleComponent={<TitleTwo>Confirm action</TitleTwo>}
            isVisible={showBasicModal}
            ConfirmButtonComponent={
              <Button size="sm" onPress={() => setShowBasicModal(false)}>
                Confirm
              </Button>
            }
          ></Alert>
        </VStack>
        <VStack>
          <Footnote color={subtitleColor}>Types of alerts</Footnote>
          <HStack alignItems={"center"} space={2}>
            <Button
              size="xs"
              flex={1}
              onPress={() => {
                setTypeOfAlert("info");
                setShowTypeOfAlertModal(true);
              }}
            >
              Info alert
            </Button>
            <Button
              size="xs"
              flex={1}
              onPress={() => {
                setTypeOfAlert("warning");
                setShowTypeOfAlertModal(true);
              }}
            >
              Warning alert
            </Button>
            <Button
              size="xs"
              flex={1}
              onPress={() => {
                setTypeOfAlert("error");
                setShowTypeOfAlertModal(true);
              }}
            >
              Error alert
            </Button>
          </HStack>

          <Alert
            onClose={() => setShowTypeOfAlertModal(false)}
            TitleComponent={<TitleTwo>Confirm action</TitleTwo>}
            isVisible={showTypeOfAlertModal}
            type={typeOfAlert}
            ConfirmButtonComponent={
              <Button size="sm" onPress={() => setShowTypeOfAlertModal(false)}>
                Confirm
              </Button>
            }
          ></Alert>
        </VStack>
      </VStack>
    </>
  );
};

export default Home;
