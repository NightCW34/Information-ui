import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "./colors";

import { FontAwesome } from "@expo/vector-icons";

const ProfilePhoto = () => {
  return (
    <View style={styles.profile_elements}>
      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/Rias.jpg")}
        />
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={styles.text_container}>
            <Text style={styles.main_text}>Rias Gremory</Text>
            <Text style={styles.secondary_text}>
              UI/UX Designer at Paypal Inc
            </Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="pencil" size={24} color="#236CFC" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  profile_elements: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 15,
  },
  text_container: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  main_text: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
  },
  secondary_text: {
    fontFamily: "Urbanist_500Medium",
    color: colors.gray,
    fontSize: 15,
    paddingTop: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  line: {
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
  },
});
