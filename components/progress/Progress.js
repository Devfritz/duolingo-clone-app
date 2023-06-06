import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Progress = ({ progress, lives }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.containerProgress}>
        <View style={[styles.barProgress, { width: progress }]} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="heart" color="red" size={30} />
        <Text style={styles.nbrLives}>{lives}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerProgress: {
    backgroundColor: "#d9d9d9",
    height: 30,
    flex: 1,
    borderRadius: 10,
  },
  barProgress: {
    height: 30,
    borderRadius: 10,
    backgroundColor: "#77c801",
  },
  nbrLives: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
});

export default Progress;
