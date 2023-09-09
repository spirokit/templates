import { StackNavigationProp } from "@react-navigation/stack";

export type GlobalParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<GlobalParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GlobalParamList {}
  }
}
