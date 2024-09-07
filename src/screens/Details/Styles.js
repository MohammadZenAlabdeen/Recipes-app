import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  headContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 20,
  },
  thumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  nutritionContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 30,
  },
  nutrition: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  nutritionName: {
    fontSize: 14,
    fontWeight: "400",
  },
  nutritionValue: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.lightGray,
  },

  instructionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    maxWidth: width - 75,
  },
  instructionsIndex: {
    fontSize: 20,
    color: "#797979",
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 21,
    marginBottom: 20,
  },
  instructionsBigContainer: {
    marginTop: 40,
  },
});
export default Styles;
