import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//Icons
import UserLogo from "../assets/icons/user_icon.svg";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Contact = () => {
  return (
    <View style={{ margin: 14 }}>
      <View style={styles.box}>
        <View style={styles.title_container}>
          <UserLogo width={24} height={24} />
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
          <View style={{ marginTop: 14, flexDirection: "row" }}>
            <SimpleLineIcons name="location-pin" size={20} color="black" />
            <Text style={styles.second_text}>New York, United States</Text>
          </View>
          <View style={{ marginTop: 14, flexDirection: "row" }}>
            <Feather name="phone" size={20} color="black" />
            <Text style={styles.second_text}>+1 111 456 879</Text>
          </View>
          <View style={{ marginTop: 14, flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="black"
              style={{ marginBottom: 15 }}
            />
            <Text style={styles.second_text}>
              andrew_ainsley@yourdomain.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contact;

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
    flex: 1,
  },
});
