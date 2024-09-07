import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    backgroundColor: colors.gray,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    position: "relative",
    padding: 12,
    height: 220,
    borderRadius: 12,
    marginRight: 16,
  },

  name: {
    marginTop: 28,
    maxWidth: 100,
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 21,
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
  },
  timeUp: {
    fontSize: 14,
    color: colors.lightGray,
  },
  timeDown: {
    fontSize: 14,
    color: colors.black,
  },
  dish: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    top: -40,
    left: 50,
  },
});
export default Styles;
