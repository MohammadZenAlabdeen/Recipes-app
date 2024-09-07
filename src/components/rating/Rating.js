import { View, Text, Image } from "react-native";
import React from "react";
import Styles from "./Styles";
const arr = [1, 2, 3, 4, 5];

const Rating = ({ rating }) => {
  return (
    <View style={Styles.rating}>
      {arr.map((star) => {
        if (rating >= star) {
          return (
            <Image
              key={star}
              style={Styles.star}
              source={require("../../../assets/star.png")}
            ></Image>
          );
        } else {
          return (
            <Image
              key={star}
              style={Styles.star}
              source={require("../../../assets/starEmpty.png")}
            ></Image>
          );
        }
      })}
    </View>
  );
};

export default React.memo(Rating);
