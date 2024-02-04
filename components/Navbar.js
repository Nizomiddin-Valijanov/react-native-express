import { StyleSheet, Text, TextInput, View } from "react-native";
import { css } from "../Styles/HomeCss";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
export default function Navbar() {
  return (
    <View style={css.navbar}>
      <View style={css.location_navbar}>
        <Text style={css.location_text}>
          United IT Clubs, Namangan, Uzbekistan
        </Text>
        <Entypo name="chevron-down" size={15} />
      </View>
      <View style={css.navbar_form}>
        <Fontisto name="search" size={15} />
        <TextInput placeholder="Search" style={css.navbar_input} />
      </View>
    </View>
  );
}
