import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    width: width - 132,
    paddingVertical: 20,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default Styles;
