import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Styles from "./Styles";
import { ScrollView } from "react-native-gesture-handler";

const Details = ({ route }) => {
  const { item } = route?.params;
  const nutrition = item?.nutrition;
  const Instructions = item?.instructions;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={Styles.headContainer}>
          <Image
            style={Styles.thumbnail}
            source={{ uri: item?.thumbnail_url }}
          />
          <Text style={Styles.title}>{item?.name}</Text>
        </View>
        <View style={Styles.nutritionContainer}>
          {nutritionKeys?.map((key) => {
            return (
              <View style={Styles.nutrition}>
                <Text style={Styles.nutritionName}>{key}</Text>
                <Text style={Styles.nutritionValue}>{nutrition[key]}</Text>
              </View>
            );
          })}
        </View>
        <View style={Styles.instructionsBigContainer}>
          <Text style={Styles.instructionsTitle}>Instructions</Text>
          {Instructions?.map((instruction, index) => {
            return (
              <View style={Styles.instructionsContainer}>
                <Text style={Styles.instructionsIndex}>{index}</Text>
                <Text style={Styles.instruction}>
                  {instruction?.display_text}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Details);
