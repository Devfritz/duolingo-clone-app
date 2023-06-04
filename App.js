import { StatusBar } from "expo-status-bar";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import OptionCard from "./components/OptionCard";
// import question from "./assets/data/imageMultipleChoiceQuestions";
import question from "./assets/data/allQuestions";
import { useEffect, useState } from "react";
import ButtonCheck from "./components/Button";
import ImageMultipleChoiceQuestion from "./components/imageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import SectionAllQuestion from "./components/sectionAllQueestion/SectionAllQuestion";
import OpenEndedQuestion from "./components/openEndedQuestion/OpenEndedQuestion";
export default function App() {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(1);
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
  useEffect(() => {
    winAlert();
  }, [questionIndex]);

  const checkAnswer = () => {
    // if (selected.correct) {
    setQuestionIndex(questionIndex + 1);
    // }
  };

  return (
    <View style={styles.container}>
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
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
      )}

      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          currentQuestion={currentQuestion}
          checkAnswer={checkAnswer}
        />
      )}

      {/* <SectionAllQuestion /> */}
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
