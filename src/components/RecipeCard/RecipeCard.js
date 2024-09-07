import { View, Text, Image } from "react-native";
import React from "react";
import Styles from "./Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeCard = ({ onPress, dish, name, time, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.container, style]}>
      <Image source={{ uri: dish }} style={Styles.dish}></Image>
      <Text numberOfLines={3} style={Styles.name}>
        {name}
      </Text>
      <View style={Styles.bottomContainer}>
        <Text style={Styles.timeUp}>Time</Text>
        <Text style={Styles.timeDown}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RecipeCard);
