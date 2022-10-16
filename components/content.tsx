import React from "react";
import { ScrollView } from "react-native";

//Import Custom Components
import Contact from "./contact";
import Summary from "./summary";
import Salary from "./salary";

const Content = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Contact />
      <Summary />
      <Salary />
    </ScrollView>
  );
};

export default Content;
