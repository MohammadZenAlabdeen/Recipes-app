import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function Categories({
  categories,
  selectedCategory,
  onCategoryPress,
}) {
  return (
    <FlatList
      data={categories}
      style={{ marginHorizontal: -24 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onCategoryPress(item);
            }}
            style={[
              Styles.itemContainer,
              selectedCategory === item ? Styles.selectedCategoryContainer : {},
              index === 0 ? Styles.FirstItem : {},
            ]}
          >
            <Text
              style={[
                Styles.item,
                selectedCategory === item ? Styles.selectedCategory : {},
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
}
