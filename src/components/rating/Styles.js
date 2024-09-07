import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  star: {
    width: 16,
    height: 16,
  },
});
export default Styles;
