import "react-native-gesture-handler";
import Splash from "./src/screens/Splash/Splash";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
import { Image, Pressable } from "react-native";
import Search from "./src/screens/Search/Search";
import React, { useEffect, useState } from "react";
import recipesContext from "./recipesContext";
import { getRecipes } from "./http";
import Details from "./src/screens/Details/Details";
const Stack = createStackNavigator();
const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image
        style={{ width: 24, height: 24, margin: 16 }}
        source={require("./assets/backButton.png")}
      />
    </Pressable>
  );
};
const appTheme = {
  ...DefaultTheme,
  colors: {
    background: "#ffffff",
  },
};
export default function App() {
  const [recipes, setRecipes] = useState({});
  const [healthy, setHealthy] = useState({});
  useEffect(() => {
    handleGet("healthy", "5");
  }, []);
  const handleGet = async (tags, size) => {
    const healthyApi = await getRecipes(tags, size);
    const recipesApi = await getRecipes();
    setRecipes(recipesApi?.data?.results);
    console.log(recipes);
    setHealthy(healthyApi?.data?.results);
  };
  return (
    <recipesContext.Provider value={{ recipes, healthy }}>
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              title: "Home",
              headerLeft: null,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{
              headerLeft: (props) => <BackButton {...props} />,
            }}
          />
          <Stack.Screen
            name="details"
            component={Details}
            options={{
              headerLeft: (props) => <BackButton {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </recipesContext.Provider>
  );
}
