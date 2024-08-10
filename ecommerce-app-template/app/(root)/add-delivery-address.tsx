import {
  Button,
  Container,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  TitleTwo,
  useColorModeValue,
  VStack,
} from "@spirokit/ui";
import React from "react";
import BackButton from "../../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddDeliveryAddress = () => {
  const styles = {
    bgColor: useColorModeValue("$primaryGray.100", "$primaryDark.0"),
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      backgroundColor={styles.bgColor}
      behavior={"position"}
    >
      <Container flex={1} width="$full" paddingTop={useSafeAreaInsets().top}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <VStack padding={"$4"} space={"$6"}>
            <HStack width="$full" space={"$4"} alignItems="center">
              <BackButton></BackButton>
              <TitleTwo fontWeight={"$bold"}>Add Delivery Address</TitleTwo>
            </HStack>
            <VStack space={"$4"}>
              <HStack space={"$4"}>
                <Input
                  returnKeyType="done"
                  _container={{ flex: 1 }}
                  placeholder="Name"
                ></Input>

                <Input
                  returnKeyType="done"
                  _container={{ flex: 1 }}
                  placeholder="Last Name"
                ></Input>
              </HStack>

              <Input returnKeyType="done" placeholder="Street"></Input>
              <Input returnKeyType="done" placeholder="City"></Input>
              <Input returnKeyType="done" placeholder="Mobile number"></Input>
              <Input
                returnKeyType="done"
                placeholder="House No / Flat No / Floor (Opt)"
              ></Input>
              <Input returnKeyType="done" placeholder="Gate code (Opt)"></Input>
            </VStack>
            <Button onPress={() => {}}>Confirm</Button>
          </VStack>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default AddDeliveryAddress;
