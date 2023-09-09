import { Button, ButtonProps } from "@spirokit/ui";
import { ChevronLeft } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import React, { memo } from "react";

const BackButton = (props: ButtonProps) => {
  return (
    <Button
      onPress={() => router.back()}
      IconLeftComponent={ChevronLeft}
      textColor="$primaryGray.900"
      {...props}
    ></Button>
  );
};

export default memo(BackButton);
