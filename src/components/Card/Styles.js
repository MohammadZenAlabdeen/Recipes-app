import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    marginRight: 16,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 9,
    marginTop: 56,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.426,
    elevation: 9,
    marginBottom: 40,
  },
  title: {
    color: "#484848",
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
  },
  authorContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pfp: {
    width: 35,
    height: 35,
    borderRadius: 17,
  },
  author: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: "400",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  timeIcon: {
    width: 25,
    height: 25,
  },
  time: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  dish: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
  },
});
export default Styles;
