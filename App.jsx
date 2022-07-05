import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Tab from "./navigation/Tab";
import Apploading from "expo-app-loading";

export default function App() {
  const [fontLoaded] = useFonts({
    "Josefin-Sans-Light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "Josefin-Sans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "Josefin-Sans-Bold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <Apploading />;
  }
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}
