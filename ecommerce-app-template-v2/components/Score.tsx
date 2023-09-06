import { Box, HStack, useColorModeValue } from "@spirokit/ui";
import React, { memo } from "react";

const Score = ({ value }: { value: number }) => {
  return (
    <HStack space={"$1"}>
      {[1, 2, 3, 4, 5].map((_, index) => {
        if (value > index + 0.5) {
          return (
            <Box
              borderRadius={"$12"}
              height={"$4"}
              width={"$4"}
              key={index}
              backgroundColor={useColorModeValue(
                "$primary.500",
                "$primary.300"
              )}
            ></Box>
          );
        }

        return (
          <Box
            key={index}
            borderRadius={"$12"}
            height={"$4"}
            width={"$4"}
            borderWidth={1}
            borderColor={"$primary.300"}
            backgroundColor="transparent"
            overflow={"hidden"}
          >
            <Box
              width={"$2"}
              height={"$4"}
              backgroundColor={useColorModeValue(
                "$primary.500",
                "$primary.300"
              )}
            ></Box>
          </Box>
        );
      })}
    </HStack>
  );
};

export default memo(Score);
