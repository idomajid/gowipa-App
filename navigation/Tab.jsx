import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishListScreen from "../screens/WishListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ItemScreen from "../screens/items/itemScreen";

import HeartIcon from "../assets/tabIcons/heart.svg";
import HomeIcon from "../assets/tabIcons/home.svg";
import SearchIcon from "../assets/tabIcons/search.svg";
import UserIcon from "../assets/tabIcons/user.svg";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeTabScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Items"
        component={ItemScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#0D1821",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={MyHomeTabScreen}
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
