import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: colors.green,
    fontWeight: "bold",
    padding: 8,
    paddingHorizontal: 12,
    textTransform: "capitalize",
  },
  selectedCategory: {
    color: colors.white,
  },
  itemContainer: {
    marginVertical: 28,
    marginRight: 8,
  },
  selectedCategoryContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  FirstItem: {
    marginLeft: 24,
  },
});
export default Styles;
