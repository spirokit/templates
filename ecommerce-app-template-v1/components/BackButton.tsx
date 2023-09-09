import { useNavigation } from "@react-navigation/native";
import { Button } from "@spirokit/core";
import React, { memo } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.goBack()}
      IconLeftComponent={ChevronLeftIcon}
      size="sm"
      textColor="primaryGray.900"
      width={"auto"}
    ></Button>
  );
};

export default memo(BackButton);
