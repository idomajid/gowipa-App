import { View, Text } from "react-native";
import { useState, useCallback } from "react";

const MoreOrLessText = (props) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  return (
    <View style={props.stylesMe}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}
        style={[{ lineHeight: 21 }]}
      >
        {props.children}
      </Text>

      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={{ lineHeight: 21, marginTop: 10 }}
        >
          {textShown ? "Read less..." : "Read more..."}
        </Text>
      ) : null}
    </View>
  );
};

export default MoreOrLessText;

// https://stackoverflow.com/questions/55805233/how-to-show-for-text-more-less-in-react-naitve-javascript
