import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const ButtonCheck = ({ onPress }) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textButton}>check</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#77c801",
    alignSelf: "stretch",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});

export default ButtonCheck;
