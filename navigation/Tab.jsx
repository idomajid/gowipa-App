import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishListScreen from "../screens/WishListScreen";
import ProfileScreen from "../screens/ProfileScreen";

import HeartIcon from "../assets/tabIcons/heart.svg";
import HomeIcon from "../assets/tabIcons/home.svg";
import SearchIcon from "../assets/tabIcons/search.svg";
import UserIcon from "../assets/tabIcons/user.svg";
import { View } from "react-native";

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
          tabBarIcon: () => (
            <HomeIcon width={30} height={30} fill={"#C7C9D9"} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <SearchIcon width={30} height={30} fill={"#C7C9D9"} />
          ),
        }}
      />
      <Tab.Screen
        name="WishListTab"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HeartIcon width={25} height={25} fill={"#C7C9D9"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <UserIcon width={25} height={25} fill={"#C7C9D9"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
