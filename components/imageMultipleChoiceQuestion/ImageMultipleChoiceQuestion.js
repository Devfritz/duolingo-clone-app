import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonCheck from "../Button";
import OptionCard from "../OptionCard";

const ImageMultipleChoiceQuestion = ({
  selected,
  setSelected,
  currentQuestion,
  checkAnswer,
}) => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
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

export default ImageMultipleChoiceQuestion;
