import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { memo } from "react";
import TabBar from "../components/TabBar";
import { BrowseStackScreen, ExploreStackScreen } from "./Stacks";

const Tab = createBottomTabNavigator();

const TabBarNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="ExploreTab"
        options={{ tabBarLabel: "Explore" }}
        component={ExploreStackScreen}
      />
      <Tab.Screen
        name="BrowseTab"
        options={{ tabBarLabel: "Browse" }}
        component={BrowseStackScreen}
      />
    </Tab.Navigator>
  );
};

export default memo(TabBarNavigation);
