import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "./colors";

//Icons

import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Summary = () => {
  return (
    <View style={{ margin: 14 }}>
      <View style={styles.box}>
        <View style={styles.title_container}>
          <Octicons name="checklist" size={24} color="#236CFC" />
          <Text style={styles.title}>Summary</Text>
          <View
            style={{
              alignItems: "flex-end",
              flex: 1,
              paddingRight: 10,
            }}
          >
            <FontAwesome name="pencil" size={24} color="#236CFC" />
          </View>
        </View>
        <View style={styles.box_content}>
          <View style={{ marginTop: 14, flexDirection: "row" }}>
            <Text style={styles.second_text}>
              Hello, I'm Rias Gremory, I am a designer with more than 5 years
              experience. My main fields are UI/UX desing, Ilustration and
              Graphic Design. You can check the portfolio on my profile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderRadius: 20,
  },
  title: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    paddingHorizontal: 15,
  },
  box_content: {
    borderTopColor: "#EFEFEF",
    borderTopWidth: 1,
    marginTop: 15,
    flexDirection: "column",
    width: "97%",
    alignSelf: "center",
    paddingLeft: 10,
  },
  second_text: {
    fontFamily: "Urbanist_500Medium",
    fontSize: 18,
    color: colors.gray,
    marginBottom: 15,
  },
  title_container: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "flex-start",
    paddingLeft: 15,
    flex: 1,
  },
});
