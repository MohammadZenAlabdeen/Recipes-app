import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./Styles";
import { FlatList } from "react-native-gesture-handler";
import recipesContext from "../../../recipesContext";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { Pressable } from "react-native";

const Search = ({ navigation }) => {
  const { recipes } = useContext(recipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [inputTyped, setInputTyped] = useState("");
  useEffect(() => {
    const fr = recipes?.filter((rec) =>
      rec?.name?.toLowerCase()?.includes(inputTyped?.toLowerCase())
    );
    setFilteredRecipes(fr);
  }, [inputTyped]);
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={filteredRecipes}
        ListHeaderComponent={
          <Input
            autoFocus
            onChangeText={(value) => {
              setInputTyped(value);
            }}
            placeholder={"Search recipe"}
            pressable={false}
          ></Input>
        }
        style={{ flexGrow: 1 }}
        ListHeaderComponentStyle={{ marginBottom: 80 }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        keyExtractor={(item) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipeCard
            onPress={() => {
              navigation.navigate("details", { item });
            }}
            style={[
              index % 2 === 0 ? { marginRight: 16 } : { marginRight: 0 },
              Styles.flatListContain,
            ]}
            name={item?.name}
            time={item?.cook_time_minutes}
            dish={item?.thumbnail_url}
          ></RecipeCard>
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Search);
