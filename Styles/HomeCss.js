import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eff4",
    // marginTop: 25,
  },
  navbar: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    paddingVertical: 8,
  },

  location_navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  location_text: {
    fontSize: 15,
  },

  navbar_form: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
    borderRadius: 7,
    gap: 10,
  },

  navbar_input: {
    width: "100%",
    height: 35,
    fontSize: 16,
  },
  slider_card: {
    marginLeft: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  first_slider: {
    marginTop: 85,
    zIndex: 1,
  },
});
