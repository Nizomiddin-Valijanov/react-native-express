import { SafeAreaView, View, FlatList, Image, Dimensions } from "react-native";
import { css } from "../../Styles/HomeCss";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
export default function HomeScreen({ navigation }) {
  let { firstSlider, shopsSlider } = useSelector((store) => store.HomeSlice);
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={css.container}>
      <Navbar />
      <View style={css.first_slider}>
        <FlatList
          data={firstSlider}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={css.slider_card}>
              <Image
                source={{ uri: item.img_url }}
                style={{ width: screenWidth / 2.3, height: 100 }}
              />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
