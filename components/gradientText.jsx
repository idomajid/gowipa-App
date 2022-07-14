import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function GradientText(props) {
  return (
    <MaskedView
      maskElement={
        <Text style={[props.styleFont, { backgroundColor: "transparent" }]}>
          {props.children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#E28075", "#F06483"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
      >
        <Text style={[props.styleFont, { opacity: 0 }]}> {props.children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
