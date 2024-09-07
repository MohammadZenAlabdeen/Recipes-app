import { View, Text, ImageBackground, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Styles from "./Styles";
import { getRecipes } from "../../../http";
import recipesContext from "../../../recipesContext";

const Splash = ({ navigation }) => {
  const { recipes, setRecipes } = useContext(recipesContext);
  return (
    <ImageBackground
      style={[{ width: "100%", height: "100%" }, Styles.container]}
      source={require("./../../../assets/splash.png")}
    >
      {recipes.length > 0 ? (
        <>
          <View style={Styles.titleContainer}>
            <Image
              style={Styles.logo}
              source={require("./../../../assets/logo.png")}
            />
            <Text style={Styles.title}>100K+ Premium Recipe</Text>
          </View>
          <View style={Styles.bottomContainer}>
            <View style={Styles.bottomText}>
              <Text style={Styles.mainText}>Get Cooking</Text>
              <Text style={Styles.secText}>
                Simple way to find Tasty Recipe
              </Text>
            </View>
            <Button
              text={"Start Cooking"}
              onPress={() => {
                navigation.navigate("home");
              }}
            ></Button>
          </View>
        </>
      ) : null}
    </ImageBackground>
  );
};

export default React.memo(Splash);
