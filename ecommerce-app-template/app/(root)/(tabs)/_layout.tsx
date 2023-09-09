import NavBar from "components/NavBar";
import TabBar from "components/TabBar";
import Wrapper from "components/Wrapper";
import { Tabs } from "expo-router";

let RootApp = () => {
  return (
    <Wrapper bottom={true}>
      <Tabs
        initialRouteName="Explore"
        tabBar={(tabBarProps) => {
          return <TabBar {...tabBarProps}></TabBar>;
        }}
        screenOptions={{
          header: () => <NavBar></NavBar>,
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
          name="favorites"
          options={{
            title: "Favorites",
            tabBarLabel: "Favorites",
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarLabel: "Search",
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarLabel: "More",
          }}
        />
      </Tabs>
    </Wrapper>
  );
};

export default RootApp;
