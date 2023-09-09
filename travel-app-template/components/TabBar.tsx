import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabBar as TabBarSK, Caption, Box } from "@spirokit/ui";

import { Home, MoreHorizontal, Search } from "@tamagui/lucide-icons";

const TabBar: React.FC<BottomTabBarProps> = (props) => {
  const { navigation, state, descriptors } = props;

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

  const getIcon = (routeName: string) => {
    switch (routeName) {
      case "explore":
        return Home;

      case "browse":
        return Search;

      default:
        return MoreHorizontal;
    }
  };

  const isValidTab = (routeName: string) => {
    switch (routeName) {
      case "explore":
      case "browse":
        return true;
      default:
        return false;
    }
  };

  return (
    <Box width={"$full"}>
      <TabBarSK>
        {state.routes.map((route, index) => {
          const options = descriptors[route.key].options;
          if (!isValidTab(route.name)) return null;

          return (
            <TabBarSK.Tab
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
      </TabBarSK>
    </Box>
  );
};

export default TabBar;
