import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Home, ChartLine, Heart, User } from "lucide-react-native";

const TabIcon = React.memo(({ Icon, focused }) => (
  <View className="flex items-center justify-center  mt-10 h-full w-full">
    <Icon
      size={28}
      color={focused ? "#161622" : "#9CA3AF"}
      strokeWidth={focused ? 2.5 : 2}
    />
  </View>
));

const tabs = [
  { name: "home", title: "Home", Icon: Home },
  { name: "statistics", title: "Statistics", Icon: ChartLine },
  { name: "applications", title: "Saved", Icon: Heart },
  { name: "profile", title: "Profile", Icon: User },
];
const tabBarStyle = {
  backgroundColor: "white",
  height: 80,
  borderTopWidth: 1,
  borderTopColor: "#D1D5DB",
  position: "absolute",
  bottom: 0,
};
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle,
        headerShown: false,
      }}
    >
      {tabs.map(({ name, title, Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused }) => (
              <TabIcon Icon={Icon} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
