import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishListScreen from "../screens/WishListScreen";
import ProfileScreen from "../screens/ProfileScreen";

import HeartIcon from "../assets/tabIcons/heart.svg";
import HomeIcon from "../assets/tabIcons/home.svg";
import SearchIcon from "../assets/tabIcons/search.svg";
import UserIcon from "../assets/tabIcons/user.svg";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#0D1821",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={30}
              height={30}
              fill={focused ? "#F6F9FF" : "#A9A9A9"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              width={30}
              height={30}
              fill={focused ? "#F6F9FF" : "#A9A9A9"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishListTab"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HeartIcon
                width={25}
                height={25}
                fill={focused ? "#F6F9FF" : "#A9A9A9"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              width={25}
              height={25}
              fill={focused ? "#F6F9FF" : "#A9A9A9"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
