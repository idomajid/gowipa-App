import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, TouchableOpacity, Pressable, Text } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishListScreen from "../screens/WishListScreen";
import SignInScreen from "../screens/profile/SignInScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import ItemScreen from "../screens/items/itemScreen";
import CartScreen from "../screens/items/cartScreen";

import HeartIcon from "../assets/tabIcons/heart.svg";
import HomeIcon from "../assets/tabIcons/home.svg";
import SearchIcon from "../assets/tabIcons/search.svg";
import UserIcon from "../assets/tabIcons/user.svg";
import ArrowBackIcon from "../assets/icons/arrowBack.svg";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeTabScreen = ({ navigation }) => {
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
        options={() => ({
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#0D1821",
                  borderRadius: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIcon width={25} height={25} fill={"#F6F9FF"} />
              </View>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="cartScreen"
        component={CartScreen}
        options={() => ({
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  width: 100,
                  height: 20,

                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                }}
              >
                <ArrowBackIcon width={30} height={30} fill={"#000"} />
                <Text
                  style={{
                    paddingLeft: 5,
                    fontFamily: "Josefin-Sans-Regular",
                    fontSize: 18,
                    lineHeight: 22,
                  }}
                >
                  Checkout
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
        // options={{ headerShown: false, title: `My Cart` }}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
        options={({ route }) => ({
          tabBarStyle: {
            display: tabBarVisibility(route),
            backgroundColor: "#0D1821",
            height: 60,
          },
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={30}
              height={30}
              fill={focused ? "#F6F9FF" : "#A9A9A9"}
            />
          ),
        })}
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
          headerShown: true,
          title: `My Wishlist`,
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
        name="SignInScreen"
        component={SignInScreen}
        options={({ route }) => ({
          tabBarStyle: {
            display: tabBarVisibility(route),
            backgroundColor: "#0D1821",
            height: 60,
          },
          tabBarIcon: ({ focused }) => (
            <UserIcon
              width={25}
              height={25}
              fill={focused ? "#F6F9FF" : "#A9A9A9"}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const tabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (routeName == "Items") {
    return "none";
  }
  if (routeName == "ProfileScreen") {
    return "none";
  }
  return "flex";
};
