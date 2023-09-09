import { useTheme } from "@spirokit/core";
import { Platform, ScrollView, StyleProp, ViewStyle } from "react-native";

type ContainerProps = {
  style?: ViewStyle;
  contentContainerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const isWeb = Platform.OS === "web";
  const { sizes } = useTheme();
  return (
    <ScrollView
      style={props.style}
      contentContainerStyle={[
        isWeb && {
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
          maxWidth: sizes.container.lg,
          alignSelf: "center",
        },
        props.contentContainerStyle,
      ]}
    >
      {props.children}
    </ScrollView>
  );
};

export default Container;
