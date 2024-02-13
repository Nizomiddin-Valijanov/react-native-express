import { Text, View, Image, FlatList, Pressable } from "react-native";
import { css } from "../Styles/HomeCss";
import { memo } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { favorite } from "../redux/Slices/HomeSlice";
function Card({ item }) {
  let rating = null;
  const dispatch = useDispatch();
  switch (item?.rating) {
    case "new":
      rating = <Text>Новый</Text>;
      break;
    default:
      rating = <Text>{item.rating}</Text>;
  }

  let filters = item?.filters;
  if (filters && filters.length > 1) {
    filters = filters.join(" \u2022 ");
    filters = filters.split(" ");
  }
  return (
    <View style={css.company_card}>
      <Image source={{ uri: item?.img }} style={css.card_img} />
      <View style={css.text_company_card}>
        <Pressable
          style={css.like_card}
          onPress={() => dispatch(favorite(item.id))}
        >
          <AntDesign name={item.favorite ? "heart" : "hearto"} size={24} />
        </Pressable>
        <Text style={css.card_header_company}>{item?.title}</Text>
        <FlatList
          style={css.about_company}
          renderItem={({ item, index }) => (
            <Text
              style={{
                ...css.filters_of_company,
                marginLeft: index !== 0 ? 10 : 0,
              }}
            >
              {item}
            </Text>
          )}
          data={filters != undefined ? filters : []}
          horizontal={true}
        />

        <View style={css.rating}>
          <AntDesign name="staro" size={20} />
          <Text>{rating}</Text>
          <Text>({item?.review})</Text>
        </View>
      </View>
    </View>
  );
}

export default memo(Card);
