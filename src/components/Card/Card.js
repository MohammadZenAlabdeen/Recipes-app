import { View, Text, Image } from "react-native";
import React from "react";
import Styles from "./Styles";
import Rating from "../rating/Rating";

const Card = ({ img, name, style, rating, author, pfp, time }) => {
  return (
    <View style={[Styles.container, style]}>
      <View style={Styles.row}>
        <Text numberOfLines={1} style={Styles.title}>
          {name}
        </Text>
        <Image style={Styles.dish} source={{ uri: img }}></Image>
      </View>

      <Rating rating={rating}></Rating>
      <View style={Styles.bottom}>
        <View style={Styles.authorContainer}>
          <Image style={Styles.pfp} source={{ uri: pfp }}></Image>
          <Text style={Styles.author}>{author}</Text>
        </View>
        <View style={Styles.timeContainer}>
          <Image
            style={Styles.timeIcon}
            source={require("../../../assets/timer.png")}
          ></Image>
          <Text style={Styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Card);
