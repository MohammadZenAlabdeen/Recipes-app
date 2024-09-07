import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  input: {
    color: colors.black,
    fontSize: 14,
    flex: 1,
  },
});
export default Styles;
