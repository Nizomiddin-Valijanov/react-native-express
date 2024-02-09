import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
      <StatusBar style="dark" />
    </Provider>
  );
}
