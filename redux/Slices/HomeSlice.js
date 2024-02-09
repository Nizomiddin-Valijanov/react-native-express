import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    firstSlider: [
      {
        id: 1,
        img_url:
          "https://media.express24.uz/r/567/385/dE2GmbDL3M8AHntUqNmKa.jpg",
      },

      {
        id: 2,
        img_url:
          "https://media.express24.uz/r/567/385/VIt276YnA9eOFgi80FXIn.jpg",
      },

      {
        id: 3,
        img_url:
          "https://media.express24.uz/r/567/385/aQJcVUL3jz-inUdl5c2AS.jpg",
      },

      {
        id: 4,
        img_url:
          "https://media.express24.uz/r/567/385/Rkl-Yn0MK18H55uf4sLHx.jpg",
      },

      {
        id: 5,
        img_url:
          "https://media.express24.uz/r/567/385/5VBQgygb_dwLKQtW6tZpo.jpg",
      },

      {
        id: 6,
        img_url:
          "https://media.express24.uz/r/567/385/2wdbvJkzP5DLY7kLdIvJI.jpg",
      },

      {
        id: 7,
        img_url:
          "https://media.express24.uz/r/567/385/NFLyRIdrdzprl7o1gFQ4Y.jpg",
      },

      {
        id: 8,
        img_url:
          "https://media.express24.uz/r/567/385/aqmM9c796GvkNlbInI2rP.jpg",
      },
    ],
    shopsSlider: [
      {
        id: 1,
        img_url: "https://cdn.express24.uz/i/700/700/JmZBmsVQb8kLrzWiJmMy5.jpg",
        title: "Eco Market",
        products_type: "Продукты",
      },

      {
        id: 2,
        img_url: "https://cdn.express24.uz/i/700/700/c9abrgnIJeWPfduaRtMO0.jpg",
        title: "The Loaf",
        products_type: "Продукты",
      },

      {
        id: 3,
        img_url: "https://cdn.express24.uz/i/700/700/u50aVhxUk801WFjcOdzse.jpg",
        title: "Клубника в шоколаде",
        products_type: "Продукты",
      },

      {
        id: 4,
        img_url: "https://cdn.express24.uz/i/700/700/Joto_aWltsUPtpbXGMMon.jpg",
        title: "Full Cart",
        products_type: "Продукты",
      },

      {
        id: 5,
        img_url: "https://cdn.express24.uz/i/700/700/44S2v_20p68wzz-csPLVq.jpg",
        title: "The Mart",
        products_type: "Продукты",
      },

      {
        id: 6,
        img_url: "https://cdn.express24.uz/i/700/700/lGTHgLvhUY537fiJRXyBx.jpg",
        title: "ЦВЕТОЧНЫЙ РАЙ",
        products_type: "Цветы",
      },

      {
        id: 7,
        img_url: "https://cdn.express24.uz/i/700/700/8cYoOtTt5FJ-rU6ymSoJE.jpg",
        title: "Молочная кухня",
        products_type: "Продукты",
      },

      {
        id: 8,
        img_url: "https://cdn.express24.uz/i/700/700/sWp5jqcyIt0lJGwfV47aQ.jpg",
        title: "Organic Food",
        products_type: "Здоровье",
      },
    ],
    filters: [
      {
        id: 1,
        title: "❤️ Избранные",
      },
      {
        id: 2,
        title: "Акции",
      },

      {
        id: 3,
        title: "Новинки",
      },

      {
        id: 4,
        title: "Fast Food",
      },

      {
        id: 5,
        title: "Азиатская",
      },

      {
        id: 6,
        title: "Кофейня",
      },

      {
        id: 7,
        title: "Пиццерия",
      },
      {
        id: 8,
        title: "Бургерная",
      },
    ],
  },
  reducers: {
    increament: (state, action) => {
      state.data += 1;
    },
    decreament: (state, action) => {
      state.data -= 1;
    },
  },
});

export const { increament, decreament } = HomeSlice.actions;
export default HomeSlice.reducer;
