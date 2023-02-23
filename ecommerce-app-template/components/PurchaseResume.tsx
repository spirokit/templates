import {
  HStack,
  Subhead,
  VStack,
  useColorModeValue,
  Body,
} from "@spirokit/core";
import React from "react";

export const PurchaseResume = () => {
  const styles = {
    totalPriceColor: useColorModeValue("primary.700", "primary.300"),
  };
  return (
    <VStack borderTopColor={"primaryGray.700"}>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Subtotal:
        </Subhead>
        <Subhead>$101.97</Subhead>
      </HStack>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Delivery fee:
        </Subhead>

        <Subhead>$9.99</Subhead>
      </HStack>
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
          Discount
        </Subhead>

        <Subhead>-$15.99</Subhead>
      </HStack>
      <HStack alignItems={"center"} padding={2}>
        <Subhead
          color={useColorModeValue("primaryGray.600", "primaryGray.300")}
          flex={1}
        >
          Total
        </Subhead>
        <Body color={styles.totalPriceColor} fontWeight="bold">
          $95.97
        </Body>
      </HStack>
    </VStack>
  );
};
