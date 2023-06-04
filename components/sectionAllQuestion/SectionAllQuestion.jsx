import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import mascot from "../../assets/images/mascot.png";
const SectionAllQuestion = () => {
  return (
    <>
      <Text style={styles.title}>Translate This Sentence</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "stretch",
          marginLeft: 15,
        }}
      >
        <Image source={mascot} style={styles.image} />
        <View style={styles.blocQuestion}>
          <Text style={styles.textBlocQuestion}>test test test</Text>
        </View>
      </View>
      <TextInput placeholder="Type in english" style={styles.textInput} />
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
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    flex: 1,
    width: "100%",
    borderRadius: 10,
    textAlign: "justify",
  },
});

export default SectionAllQuestion;
