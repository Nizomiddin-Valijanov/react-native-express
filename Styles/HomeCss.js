import { StyleSheet } from "react-native";
let content_left = 15;
export const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eff4",
    overflow: "visible",
    width: "100%",
  },

  navbar: {
    position: "relative",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    height: 100,
    paddingVertical: 8,
    paddingTop: 30,
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

  cards_item: {
    paddingBottom: 20,
  },

  company_card: {
    marginHorizontal: 15,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 9,
    marginTop: 15,
  },

  card_img: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },

  text_company_card: {
    paddingHorizontal: 15,
    paddingTop: 10,
    position: "relative",
  },
  card_header_company: {
    fontSize: 25,
    fontWeight: "700",
  },
  about_company: {
    paddingTop: 4,
  },
  filters_of_company: {
    color: "#7b7b7b",
    fontSize: 14,
  },

  rating: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },

  like_card: {
    position: "absolute",
    right: 15,
    top: 14,
  },
});
