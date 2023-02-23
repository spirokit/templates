import { StackNavigationProp } from "@react-navigation/stack";

export type GlobalParamList = {
  Detail: {};
  Home: {};
  Search: {};
  FoodSearch: {};
  FoodFilters: {};
};

export type ScreenNavigationProp = StackNavigationProp<GlobalParamList>;
