import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import Styles from "./Styles";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
      <Image
        style={Styles.icon}
        source={require("./../../../assets/arrowRight.png")}
      ></Image>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
