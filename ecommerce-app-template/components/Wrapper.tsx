import { Box, useColorModeValue } from "@spirokit/ui";
import { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper: React.FC<
  PropsWithChildren & {
    top?: boolean;
    bottom?: boolean;
  }
> = (props) => {
  const { top: topEnabled = true, bottom: bottomEnabled = false } = props;

  const { top, bottom } = useSafeAreaInsets();
  const backgroundColor = useColorModeValue("$white", "$primaryDark.24");
  return (
    <Box
      flex={1}
      style={{ overflowX: "hidden" }}
      backgroundColor={backgroundColor}
      position="absolute"
      paddingTop={topEnabled ? top : 0}
      top={0}
      left={0}
      right={0}
      bottom={0}
      paddingBottom={bottomEnabled ? bottom : 0}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
