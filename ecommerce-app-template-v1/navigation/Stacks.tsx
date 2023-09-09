import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import { GlobalParamList } from "./GlobalParamList";
import Favorites from "../screens/FavoritesScreen";
import SearchFilters from "../screens/SearchFiltersScreen";
import SectionScreen from "../screens/SectionScreen";
import More from "../screens/MoreScreen";
import Checkout from "../screens/CheckoutScreen";
import AddPaymentMethod from "../screens/AddPaymentMethodScreen";
import AddDeliveryAddress from "../screens/AddDeliveryAddressScreen";

const ExploreStack = createStackNavigator<GlobalParamList>();
const SearchStack = createStackNavigator<GlobalParamList>();
const FavoritesStack = createStackNavigator<GlobalParamList>();
const MoreStack = createStackNavigator<GlobalParamList>();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator initialRouteName={"Onboarding"}>
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
      <ExploreStack.Screen
        name="Section"
        component={SectionScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethod}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="AddDeliveryAddress"
        component={AddDeliveryAddress}
        options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName={"Search"}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="SearchFilters"
        component={SearchFilters}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethod}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="AddDeliveryAddress"
        component={AddDeliveryAddress}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator initialRouteName="Favorites">
      <FavoritesStack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <FavoritesStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <FavoritesStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <FavoritesStack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethod}
        options={{ headerShown: false }}
      />
      <FavoritesStack.Screen
        name="AddDeliveryAddress"
        component={AddDeliveryAddress}
        options={{ headerShown: false }}
      />
    </FavoritesStack.Navigator>
  );
};

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator initialRouteName="More">
      <MoreStack.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethod}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen
        name="AddDeliveryAddress"
        component={AddDeliveryAddress}
        options={{ headerShown: false }}
      />
    </MoreStack.Navigator>
  );
};

export {
  ExploreStackScreen,
  SearchStackScreen,
  FavoritesStackScreen,
  MoreStackScreen,
};
