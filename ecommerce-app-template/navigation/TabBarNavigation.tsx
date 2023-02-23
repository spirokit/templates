import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { memo } from "react";
import NavBar from "./NavBar";
import {
  SearchStackScreen,
  ExploreStackScreen,
  FavoritesStackScreen,
  MoreStackScreen,
} from "./Stacks";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

const TabBarNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ header: () => <NavBar></NavBar> }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="ExploreTab"
        options={{ tabBarLabel: "Explore" }}
        component={ExploreStackScreen}
      />
      <Tab.Screen
        name="SearchTab"
        options={{ tabBarLabel: "Search" }}
        component={SearchStackScreen}
      />
      <Tab.Screen
        name="FavoritesTab"
        options={{ tabBarLabel: "Favorites" }}
        component={FavoritesStackScreen}
      />
      <Tab.Screen
        name="MoreTab"
        options={{ tabBarLabel: "More" }}
        component={MoreStackScreen}
      />
    </Tab.Navigator>
  );
};

export default memo(TabBarNavigation);
