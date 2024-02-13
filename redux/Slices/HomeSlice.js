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
    data: [
      {
        id: 1,
        img: "https://cdn.express24.uz/i/701/701/4Cia4-R8Oq7jolXbSRlRi.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/OArMPg83fSn96uNEQHptG.jpg",
        favorite: false,
        title: "Ploff&Kebab",
        filters: ["Узбекская", "Новинки", "Акции"],
        rating: "4.5",
        review: "130",
      },
      {
        id: 2,
        img: "https://cdn.express24.uz/i/701/701/RlqZOrbfhjeTqqA6Hkykt.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/_-n7HpXflyOfEihsznnRT.jpg",
        favorite: false,
        title: "ДОДО ПИЦЦА",
        filters: ["Пиццерия", "Акции"],
        rating: "4.7",
        review: "130",
      },
      {
        id: 3,
        img: "https://cdn.express24.uz/i/701/701/wfO8xJClMmeQLsSnvPfVW.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/lPuHf7dMikrMh1qFkyhdV.jpg",
        favorite: false,
        title: "Sushi Master",
        filters: ["Азиатская", "Акции"],
        rating: "4.6",
        review: "130",
      },
      {
        id: 4,
        img: "https://cdn.express24.uz/i/701/701/IWGfthM5Xwyl86aA332a2.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/anqOH3Uey7AzyzBDvHsvN.jpg",
        favorite: false,
        title: "Магазин у дома UzMag",
        filters: ["Узбекская", "Новинки", "Акции"],
        rating: "4.5",
        review: "130",
      },
      {
        id: 5,
        img: "https://cdn.express24.uz/i/701/701/pzTIXNImIqDzn6xjsiIlj.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/8R5oMCG_galEOiKjHaKH6.jpg",
        favorite: false,
        title: "Московская пицца Broadway",
        filters: ["Пиццерия"],
        rating: "4.6",
        review: "130",
      },
      {
        id: 6,
        img: "https://cdn.express24.uz/i/701/701/hvYnfIROtV2KwtTr8ZoJP.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/5GVyS1_2luPM8l47EhQp3.jpg",
        favorite: false,
        title: "Sushi Market Broadway",
        filters: ["Новинки", "Азиатская"],
        rating: "4.4",
        review: "130",
      },
      {
        id: 7,
        img: "https://cdn.express24.uz/i/701/701/bLeF4C_0imK1lB0Qn2yxX.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/OfgTzZj_1aNjBhDeKJwk7.jpg",
        favorite: false,
        title: "Ploff&Kebab",
        filters: ["Узбекская", "Новинки", "Акции"],
        rating: "4.4",
        review: "130",
      },
      {
        id: 8,
        img: "https://cdn.express24.uz/i/701/701/TAfNC83ibl_gCMxxmnEq-.jpg",
        company_logo: "",
        favorite: false,
        title: "BS cafe",
        filters: ["Европейская"],
        rating: "4.5",
        review: "130",
      },
      {
        id: 9,
        img: "https://cdn.express24.uz/i/701/701/zz5izexNtKBLSDIbPVGSa.jpg",
        company_logo:
          "https://cdn.express24.uz/i/301/301/3_9QgphGaC22YkjXV4q_Q.jpg",
        favorite: false,
        title: "TADAGO",
        filters: ["Fast Food", "Азиатская"],
        rating: "4.5",
        review: "130",
      },
      {
        id: 10,
        img: "https://cdn.express24.uz/i/701/701/Y3BD-gLQRI8iuJsl_2CaD.jpg",
        company_logo: "https://cdn.express24.uz/i/301/301/179ea3ae8d1.jpg",
        favorite: false,
        title: "Roni Pizza Napoletana",
        filters: ["Fast Food", "Пиццерия", "Европейская"],
        rating: "4.5",
        review: "130",
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
    favorite: (state, action) => {
      state = {
        ...state,
        data: state.data.map((el) =>
          el.id === action ? { ...el, favorite: true } : el
        ),
      };
    },
  },
});

export const { increament, decreament, favorite } = HomeSlice.actions;
export default HomeSlice.reducer;
