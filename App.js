import { StatusBar } from "expo-status-bar";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import OptionCard from "./components/OptionCard";
// import question from "./assets/data/imageMultipleChoiceQuestions";
import question from "./assets/data/allQuestions";
import { useEffect, useState } from "react";
import ButtonCheck from "./components/Button";
import ImageMultipleChoiceQuestion from "./components/imageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import SectionAllQuestion from "./components/sectionAllQuestion/SectionAllQuestion";
import OpenEndedQuestion from "./components/openEndedQuestion/OpenEndedQuestion";
import Progress from "./components/progress/Progress";
export default function App() {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[questionIndex]
  );
  const [lives, setLives] = useState(5);

  const winAlert = () => {
    if (questionIndex >= question.length) {
      Alert.alert("Win WIN WIN");
      setQuestionIndex(0);
      setLives(5);
    } else {
      setCurrentQuestion(question[questionIndex]);
    }
  };
  useEffect(() => {
    winAlert();
  }, [questionIndex]);

  const restart = () => {
    setQuestionIndex(0);
    setLives(5);
  };
  const onWrong = () => {
    setLives(Math.max(0, lives - 1));

    Alert.alert("Wrong", `Restart or try again`, [
      {
        text: "Restart",
        onPress: restart,
      },
      {
        text: "Try Again",
      },
    ]);

    if (lives === 0) {
      Alert.alert("GAME OVER", "THE GAME WILL BE RESTARTED");
      restart();
    }
  };

  const onCorrect = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <View style={styles.container}>
      <Progress
        progress={`${(questionIndex / question.length) * 100}%`}
        lives={lives}
      />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          selected={selected}
          setSelected={setSelected}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          onCorrect={onCorrect}
          onWrong={onWrong}
          winAlert={winAlert}
        />
      )}

      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
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
