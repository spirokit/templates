import {
  Image,
  Box,
  useColorModeValue,
  VStack,
  ZStack,
  HStack,
  TitleTwo,
  Subhead,
} from "@spirokit/core";
import VisaDark from "../assets/visa-dark.png";
import VisaLight from "../assets/visa-light.png";
import MasterDark from "../assets/master-dark.png";
import MasterLight from "../assets/master-light.png";
import React, { memo, useMemo } from "react";

export type CreditCardProps = {
  cardNumber?: string;
  holderName?: string;
  expiresOn?: string;
};

const CreditCard = (props: CreditCardProps) => {
  const styles = {
    cardBgColor: useColorModeValue("primaryGray.200", "primaryDark.4"),
    cardBgFloatingShape: useColorModeValue("primaryGray.300", "primaryDark.2"),
    cardNumberBorderColor: useColorModeValue("primary.500", "primary.300"),
  };

  const MasterLogo = useColorModeValue(MasterLight, MasterDark);
  const VisaLogo = useColorModeValue(VisaLight, VisaDark);

  return (
    <ZStack minHeight={48} width={"full"} overflow="hidden" borderRadius={8}>
      <VStack
        overflow="hidden"
        width="full"
        height={48}
        backgroundColor={styles.cardBgColor}
      ></VStack>
      <Box
        width="2/3"
        top={-12}
        style={{ transform: [{ rotate: "35deg" }] }}
        height={48}
        left={"2/3"}
        borderRadius={8}
        backgroundColor={styles.cardBgFloatingShape}
      ></Box>
      <VStack width="full" space={4} height={48} padding={4}>
        <HStack width="full" justifyContent="flex-end">
          {!props.cardNumber || props.cardNumber[0] === "4" ? (
            <Image
              key={"visa-logo"}
              alt={"Provider logo"}
              source={VisaLogo}
            ></Image>
          ) : (
            <Image
              key={"master-logo"}
              alt={"Provider logo"}
              source={MasterLogo}
            ></Image>
          )}
        </HStack>
        <Box
          borderColor={styles.cardNumberBorderColor}
          paddingX={2}
          paddingY={1}
          borderWidth={1}
          borderRadius={4}
        >
          <TitleTwo textAlign="center">
            {(props.cardNumber || "XXXXXXXXXXXXXXXX")
              .match(/.{1,4}/g)
              ?.join("  ")}
          </TitleTwo>
        </Box>
        <HStack justifyContent="space-between">
          <VStack>
            <Subhead>CARD HOLDER NAME</Subhead>
            <Subhead>
              {props.holderName?.toUpperCase() || "HOLDER NAME"}
            </Subhead>
          </VStack>
          <VStack alignItems="flex-end">
            <Subhead>EXPIRES ON</Subhead>
            <Subhead>
              {props.expiresOn?.match(/.{1,2}/g)?.join("/") || "MM / YY"}
            </Subhead>
          </VStack>
        </HStack>
      </VStack>
    </ZStack>
  );
};

export default CreditCard;
