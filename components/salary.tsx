import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "./colors";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Salary = () => {
  return (
    <View style={{ margin: 14 }}>
      <View style={styles.box}>
        <View style={styles.title_container}>
          <Foundation name="graph-pie" size={24} color="#236CFC" />
          <Text style={styles.title}>Contact Information</Text>
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
          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.second_text}>$10,000 - 25,000 /month</Text>
            <Text style={styles.mini_text}>(only you can see this)</Text>
          </View>
          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.second_text}>$15,000 - 30,000 /month</Text>
            <Text style={styles.mini_text}>(only you can see this)</Text>
          </View>
          <View
            style={{
              marginTop: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.second_text}>$30,000 - 45,000 /month</Text>
            <Text style={styles.mini_text}>(only you can see this)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Salary;

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
    paddingLeft: 9,
  },
  second_text: {
    fontFamily: "Urbanist_500Medium",
    fontSize: 18,
    paddingHorizontal: 15,
  },
  title_container: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "flex-start",
    paddingLeft: 15,
  },
  mini_text: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 10,
    color: colors.gray,
  },
});
