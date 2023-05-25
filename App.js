import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which of these is "the glass" ?</Text>
      <View style={styles.optionContainer}>
        <View style={styles.optionsUsers}>
          <Image
            style={styles.image}
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
          />
          <Text style={styles.textOptions}>La taza</Text>
        </View>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c2c2c",
    alignSelf: "stretch",
    marginBottom: 40,
  },
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  optionsUsers: {
    width: "48%",
    height: "48%",
    borderRadius: 12,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "grey",
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-start",
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
  },
  textOptions: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
