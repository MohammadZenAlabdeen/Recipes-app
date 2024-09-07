import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Styles from "./Styles";
import colors from "../../constants/colors";

const Input = ({
  showSearchIcon,
  placeholder,
  pressable,
  onPress,
  ...props
}) => {
  if (pressable) {
    return (
      <View style={Styles.inputContainer}>
        <Image
          style={Styles.searchIcon}
          source={require("../../../assets/searchIcon.png")}
        ></Image>
        <Pressable style={Styles.input} onPress={onPress}>
          <Text style={{ color: colors.gray }}>{placeholder}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={Styles.inputContainer}>
      <Image
        style={Styles.searchIcon}
        source={require("../../../assets/searchIcon.png")}
      ></Image>
      <TextInput
        {...props}
        placeholderTextColor={colors.gray}
        style={Styles.input}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

export default React.memo(Input);
