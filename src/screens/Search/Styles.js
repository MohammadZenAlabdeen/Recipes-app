import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  flatListContain: {
    marginVertical: 50,
    marginTop: 0,
  },
});
export default Styles;
