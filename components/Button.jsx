import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const ButtonCheck = ({ onPress, disabled }) => {
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        disabled
          ? { backgroundColor: "#c9c9c9" }
          : { backgroundColor: "#77c801" },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.textButton}>check</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
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
