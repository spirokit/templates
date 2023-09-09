import { StackNavigationProp } from "@react-navigation/stack";
import { Filter } from "../screens/SearchFiltersScreen";

export type GlobalParamList = {
  Detail: undefined;
  Onboarding: undefined;
  Home: undefined;
  Section: {
    title?: string;
  };
  Search: {
    activeFilters?: Filter[];
  };
  SearchFilters: {
    activeFilters?: Filter[];
  };
  SignIn: undefined;
  SignUp: undefined;
  VerifyAccount: undefined;
  More: undefined;
  Favorites: undefined;
  Checkout: undefined;
  AddPaymentMethod: undefined;
  AddDeliveryAddress: undefined;
  TabBarNavigation: undefined;
  ExploreTab: {
    screen: string;
  };
};

export type ScreenNavigationProp = StackNavigationProp<GlobalParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GlobalParamList {}
  }
}
