import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { css } from "../../Styles/HomeCss";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

export default function HomeScreen({ navigation }) {
  let { firstSlider, shopsSlider, filters, data } = useSelector(
    (store) => store.HomeSlice
  );
  const screenWidth = Dimensions.get("window").width;
  return (
    <>
      <Navbar />
      <SafeAreaView style={css.container}>
        <ScrollView>
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
              <View>
                <Text style={css.shops_header}>Магазины</Text>
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
            <FlatList
              style={css.cards_item}
              data={data}
              keyExtractor={(item) => item?.id.toString()}
              renderItem={({ item }) => <Card item={item} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
