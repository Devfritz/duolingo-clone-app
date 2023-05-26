import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import OptionCard from "./components/OptionCard";
import question from "./assets/data/oneQuestionWithOption";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question.question}</Text>
      <View style={styles.optionContainer}>
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            name={option.text}
            image={option.image}
            isSelected={selected === option.id}
            onPress={() => setSelected(option.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    padding: 6,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c2c2c",
    alignSelf: "stretch",
    marginBottom: 10,
  },

  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
  },
});
