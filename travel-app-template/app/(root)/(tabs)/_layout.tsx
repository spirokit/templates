import TabBar from "components/TabBar";
import Wrapper from "components/Wrapper";
import { Tabs } from "expo-router";

let RootApp = () => {
  return (
    <Wrapper top={false} bottom={true}>
      <Tabs
        initialRouteName="Explore"
        tabBar={(tabBarProps) => {
          return <TabBar {...tabBarProps}></TabBar>;
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarLabel: "Explore",
          }}
        />

        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarLabel: "Browse",
          }}
        />
      </Tabs>
    </Wrapper>
  );
};

export default RootApp;
