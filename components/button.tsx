import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { colors } from "./colors";

const ButtonBottom = () => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "10%" }}
    >
      <TouchableOpacity style={styles.btn_style}>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontFamily: "Urbanist_700Bold",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBottom;

const styles = StyleSheet.create({
  btn_style: {
    width: "90%",
    backgroundColor: colors.blue,
    alignItems: "center",
    height: "70%",
    justifyContent: "center",
    borderRadius: 30,
  },
});
