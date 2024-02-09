import { StyleSheet } from "react-native";
let content_left = 15;
export const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eff4",
    // marginTop: 25,
    overflow: "visible",
  },

  navbar: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    height: 100,
    paddingVertical: 8,
    // marginTop: 35,
  },

  location_navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    height: 80,
  },

  location_text: {
    fontSize: 15,
  },

  navbar_form: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
    borderRadius: 7,
    gap: 10,
    // marginTop: 5,
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
    height: 90,
  },
  first_slider: {
    // marginTop: 115,
    marginTop: 15,
    zIndex: 1,
  },

  shops_slider: {
    marginTop: 20,
  },
  shops_header: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "700",
  },

  shop_sliders_item: {
    marginTop: 15,
  },

  shops_card: {
    marginLeft: content_left,
    borderRadius: 10,
    overflow: "hidden",
  },

  shops_card_text: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  restaranlar: {
    marginTop: 30,
  },
  restor_heading: {
    fontSize: 35,
    fontWeight: "800",
    paddingLeft: 15,
  },

  tab_filters_item: {
    paddingLeft: content_left,
    marginTop: 15,
  },
  filter_tab: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  filter_text: {
    fontSize: 16,
  },
});
