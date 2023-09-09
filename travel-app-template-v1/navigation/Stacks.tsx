import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import FoodSearchScreen from "../screens/FoodSearchScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FoodFiltersScreen from "../screens/FoodFiltersScreen";
import { GlobalParamList } from "./GlobalParamList";

const ExploreStack = createStackNavigator<GlobalParamList>();
const BrowseStack = createStackNavigator<GlobalParamList>();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator initialRouteName={"Home"}>
      <ExploreStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  );
};

const BrowseStackScreen = () => {
  return (
    <BrowseStack.Navigator initialRouteName={"Search"}>
      <BrowseStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <BrowseStack.Screen
        name="FoodSearch"
        component={FoodSearchScreen}
        options={{ headerShown: false }}
      />
      <BrowseStack.Screen
        name="FoodFilters"
        component={FoodFiltersScreen}
        options={{ headerShown: false }}
      />
      <BrowseStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </BrowseStack.Navigator>
  );
};

export { ExploreStackScreen, BrowseStackScreen };
