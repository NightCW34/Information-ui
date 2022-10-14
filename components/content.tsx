import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

//Import Custom Components
import Contact from "./contact";
import Summary from "./summary";
import Salary from "./salary";

const Content = () => {
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <Contact />
      <Summary />
      <Salary />
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "100%",
  },
});
