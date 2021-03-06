import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";

import store from "./store";
import Counter from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
