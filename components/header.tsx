import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//Icons
import { AntDesign } from "@expo/vector-icons";

//Custom Components
import ProfilePhoto from "./profilephoto";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.items_container}>
        <TouchableOpacity style={{ paddingLeft: 20 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header_text}>Apply Job</Text>
      </View>
      <ProfilePhoto />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  items_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  header_text: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    paddingLeft: 20,
  },
});
