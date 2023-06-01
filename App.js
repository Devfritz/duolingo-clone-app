import { StatusBar } from "expo-status-bar";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import OptionCard from "./components/OptionCard";
import question from "./assets/data/imageMulatipleChoiceQuestions";
import { useEffect, useState } from "react";
import ButtonCheck from "./components/Button";
import ImageMultipleChoiceQuestion from "./components/imageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
export default function App() {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[questionIndex]
  );

  const winAlert = () => {
    if (questionIndex >= question.length) {
      Alert.alert("Win WIN WIN");
      setQuestionIndex(0);
    } else {
      setCurrentQuestion(question[questionIndex]);
    }
  };

  const checkAnswer = () => {
    if (selected.correct) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageMultipleChoiceQuestion
        selected={selected}
        setSelected={setSelected}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        checkAnswer={checkAnswer}
        winAlert={winAlert}
      />
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
});
