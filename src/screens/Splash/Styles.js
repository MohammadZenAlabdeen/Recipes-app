import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
    color: colors.white,
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  logo: {
    width: 80,
    height: 80,
  },
  bottomContainer: {
    flexDirection: "column",
    gap: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  bottomText: {
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: colors.white,
    fontSize: 50,
    fontWeight: "900",
    maxWidth: 200,
    textAlign: "center",
    lineHeight: 75,
  },
  secText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});
export default Styles;
