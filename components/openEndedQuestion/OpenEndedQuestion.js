import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";
import mascot from "../../assets/images/mascot.png";
import ButtonCheck from "../Button";
import { useState } from "react";

const OpenEndedQuestion = ({ currentQuestion, checkAnswer }) => {
  const [answerInput, setAnswerInput] = useState(null);

  const handleChangeText = (text) => {
    setAnswerInput(text);
  };

  const CheckAnswer = () => {
    if (
      answerInput.toLowerCase().trim() ===
      currentQuestion.answer.toLowerCase().trim()
    ) {
      checkAnswer();
    }
    setAnswerInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate This Sentence</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "stretch",
          marginLeft: 15,
          marginBottom: 0,
        }}
      >
        <Image source={mascot} style={styles.image} />
        <View style={styles.blocQuestion}>
          <Text style={styles.textBlocQuestion}>{currentQuestion.text}</Text>
        </View>
      </View>
      <View style={styles.blocInput}>
        <TextInput
          value={answerInput}
          placeholder="Type in english"
          style={styles.textInput}
          onChangeText={handleChangeText}
          multiline
          textAlignVertical="top"
        />
      </View>
      <ButtonCheck onPress={() => CheckAnswer()} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 900,
    alignSelf: "stretch",
  },
  image: {
    width: "35%",
    aspectRatio: 2 / 3,
    resizeMode: "contain",
  },
  blocQuestion: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
  },

  textBlocQuestion: {
    fontWeight: 700,
  },
  blocInput: {
    borderWidth: 1,
    borderColor: "grey",
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
});
export default OpenEndedQuestion;