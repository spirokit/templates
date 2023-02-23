import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyAccount from "../screens/VerifyAccount";
import { GlobalParamList } from "./GlobalParamList";
import TabBarNavigation from "./TabBarNavigation";

const GlobalNavigation = () => {
  const Stack = createStackNavigator<GlobalParamList>();
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyAccount"
        component={VerifyAccount}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabBarNavigation"
        component={TabBarNavigation}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
