import { Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const OptionCard = ({ name, image, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.optionsUsers, isSelected ? styles.selectedConatiner : {}]}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={[styles.textOptions, isSelected ? styles.selectedText : {}]}>
        {name}
      </Text>
    </Pressable>
  );
};
OptionCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
OptionCard.defaultProps = {
  name: "Devfritz",
  onPress: () => {},
};

const styles = StyleSheet.create({
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
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  textOptions: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedConatiner: {
    backgroundColor: "#ddf3fe",
    borderColor: "#81d4fe6c",
    borderBottomColor: "#368ab4d5",
  },
  selectedText: {
    color: "#212121",
  },
});

export default OptionCard;
