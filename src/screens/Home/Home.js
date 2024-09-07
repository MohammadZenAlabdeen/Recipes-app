import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Styles from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card/Card";
import { FlatList, Text, View } from "react-native";
import Title from "./../../components/Title/Title";
import Categories from "./../../components/Categories/Categories";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import recipesContext from "../../../recipesContext";

const Home = ({ navigation }) => {
  const [cat, setCat] = useState("All");
  const { recipes, healthy } = useContext(recipesContext);
  const [recipesFilter, setRecipesFilter] = useState(recipes);
  const tagList = [];

  recipes?.forEach((recipe) => {
    if (!tagList.includes(recipe?.tags[0]?.name)) {
      tagList.push(recipe?.tags[0]?.name);
    }
  });

  useEffect(() => {
    if (cat === "All") {
      setRecipesFilter(recipes);
    } else {
      const filtered = recipes?.filter((recipe) =>
        recipe?.tags?.some((tag) => tag.name === cat)
      );

      setRecipesFilter(filtered);
    }
  }, [cat]);
  return (
    <SafeAreaView style={Styles.container}>
      <Input
        placeholder={"Search recipe"}
        pressable={true}
        onPress={() => {
          navigation.navigate("search");
        }}
      ></Input>
      <View>
        <Title text={"Featured Recipes"}></Title>
        <FlatList
          data={healthy}
          horizontal={true}
          style={{ marginHorizontal: -24 }}
          keyExtractor={(item) => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card
              style={index === 0 ? { marginLeft: 24 } : {}}
              name={item?.name}
              rating={item?.user_ratings?.score * 5}
              author={item?.credits[0]?.name}
              time={item?.cook_time_minutes + " minutes"}
              img={item?.thumbnail_url}
              pfp={item?.thumbnail_url}
            ></Card>
          )}
        ></FlatList>
      </View>
      <Categories
        categories={["All", ...tagList]}
        selectedCategory={cat}
        onCategoryPress={setCat}
      ></Categories>
      <FlatList
        data={recipesFilter}
        horizontal={true}
        style={{ marginHorizontal: -24 }}
        keyExtractor={(item) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            onPress={() => {
              navigation.navigate("details", { item });
            }}
            name={item?.name}
            time={item?.cook_time_minutes}
            dish={item?.thumbnail_url}
          ></RecipeCard>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default React.memo(Home);
