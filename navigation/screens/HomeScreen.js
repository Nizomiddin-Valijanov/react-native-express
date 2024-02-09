import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { css } from "../../Styles/HomeCss";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
export default function HomeScreen({ navigation }) {
  let { firstSlider, shopsSlider, filters } = useSelector(
    (store) => store.HomeSlice
  );
  const screenWidth = Dimensions.get("window").width;
  let test = {
    id: 1,
    img: "https://cdn.express24.uz/i/701/701/4Cia4-R8Oq7jolXbSRlRi.jpg",
    company_logo:
      "https://cdn.express24.uz/i/301/301/OArMPg83fSn96uNEQHptG.jpg",
    like: false,
    title: "Ploff&Kebab",
    filters: ["Узбекская", "Новинки", "Акции"],
    rating: "new",
  };
  return (
    <>
      <Navbar />
      <SafeAreaView style={css.container}>
        <View style={css.first_slider}>
          <FlatList
            data={firstSlider}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={css.slider_card}>
                <Image
                  source={{ uri: item.img_url }}
                  style={{ width: screenWidth / 2.4, height: 100 }}
                />
              </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={css.shops_slider}>
          <View style={css.shops_flex}>
            <View style={css.shops_header}>
              <View>
                <Text style={css.shops_header}>Магазины</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={shopsSlider}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={css.shop_sliders_item}
            renderItem={({ item }) => (
              <View style={css.shops_card}>
                <Image
                  source={{ uri: item.img_url }}
                  style={{ width: screenWidth / 2.4, height: 110 }}
                />

                <Text style={css.shops_card_text}>{item?.title}</Text>
              </View>
            )}
          />
        </View>

        <View style={css.restaranlar}>
          <Text style={css.restor_heading}>Рестораны</Text>

          <FlatList
            data={filters}
            keyExtractor={(item) => item?.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={css.tab_filters_item}
            renderItem={({ item }) => (
              <Pressable style={css.filter_tab}>
                <Text style={css.filter_text}>{item?.title}</Text>
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
