import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabBar, Caption, Box, useColorModeValue } from "@spirokit/core";
import { SvgProps } from "react-native-svg";
import {
  DotsHorizontalIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import { Platform } from "react-native";

const TabBarComponent: React.FC<BottomTabBarProps> = (props) => {
  const { navigation, state, descriptors } = props;
  const isWeb = Platform.OS === "web";

  const onTabPress = (
    isFocused: boolean,
    routeKey: string,
    routeName: string
  ) => {
    const event = navigation.emit({
      type: "tabPress",
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const getIcon = (routeName: string): ((props: SvgProps) => JSX.Element) => {
    switch (routeName) {
      case "ExploreTab":
        return HomeIcon;

      case "SearchTab":
        return SearchIcon;

      case "FavoritesTab":
        return HeartIcon;

      case "MoreTab":
        return DotsHorizontalIcon;

      default:
        return DotsHorizontalIcon;
    }
  };

  return (
    <Box
      width={"full"}
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.1")}
    >
      <Box
        maxWidth={isWeb ? "container.lg" : "full"}
        margin="auto"
        width={"full"}
      >
        <TabBar>
          {state.routes.map((route, index) => {
            const options = descriptors[route.key].options;
            return (
              <TabBar.Tab
                onPress={() =>
                  onTabPress(state.index === index, route.key, route.name)
                }
                key={route.key}
                IconComponent={getIcon(route.name)}
                LabelComponent={
                  typeof options.tabBarLabel === "string" ? (
                    <Caption>{options.tabBarLabel}</Caption>
                  ) : undefined
                }
                isFocused={state.index === index}
              />
            );
          })}
        </TabBar>
      </Box>
    </Box>
  );
};

export default TabBarComponent;
