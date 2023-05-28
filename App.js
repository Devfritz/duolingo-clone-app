import { StatusBar } from "expo-status-bar";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import OptionCard from "./components/OptionCard";
import question from "./assets/data/imageMulatipleChoiceQuestions";
import { useEffect, useState } from "react";
import ButtonCheck from "./components/Button";
export default function App() {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, seCurrentQuestion] = useState(
    question[questionIndex]
  );

  useEffect(() => {
    console.log(currentQuestion);
    if (questionIndex >= question.length) {
      Alert.alert("Win WIN WIN");
      setQuestionIndex(0);
    } else {
      seCurrentQuestion(question[questionIndex]);
    }
  }, [questionIndex]);

  const checkAnswer = () => {
    if (selected.correct) {
      setQuestionIndex(questionIndex + 1);
    } else {
      Alert.alert("Not correct");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentQuestion.question}</Text>
      <View style={styles.optionContainer}>
        {currentQuestion.options.map((option) => (
          <OptionCard
            key={option.id}
            name={option.text}
            image={option.image}
            onPress={() => setSelected(option)}
            isSelected={selected?.id === option.id}
          />
        ))}
      </View>
      <ButtonCheck onPress={() => checkAnswer()} />
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
