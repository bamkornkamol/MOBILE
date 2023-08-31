import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.round}</Text>
      <Text>Correct Number was: {props.correct}</Text>
      <Button
        title="NEW GAME"
        onPress={() => {
          var num = Math.floor(Math.random() * 100)
          console.log(num)
          props.onReStartGame(num)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
