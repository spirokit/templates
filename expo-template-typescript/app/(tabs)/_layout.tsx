import { Tabs } from 'expo-router';
import React from 'react';
import { TabBar, Tab } from "@spirokit/ui";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <TabBar>
          {props.state.routes.map((route, index) => {
            const { options } = props.descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = props.state.index === index;

            const onPress = () => {
              const event = props.navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                props.navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              props.navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Tab
                key={route.name}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Tab.Icon>
                  {options.tabBarIcon?.({
                    focused: isFocused,
                    color: "", // Color is handled by Tab component
                    size: 24,
                  })}
                </Tab.Icon>
                <Tab.Label>{label as string}</Tab.Label>
              </Tab>
            );
          })}
        </TabBar>
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
