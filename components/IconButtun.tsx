import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type IconButtunProb = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number;
};


const IconButtun = ({ icon, text }: IconButtunProb) => {
  return (
    <View style={styles.iconBox}>
      <EvilIcons name={icon} size={24} color="gray" />
      <Text style={styles.numberCounts}>{text}</Text>
    </View>
  );
};

export default IconButtun;

const styles = StyleSheet.create({
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  numberCounts: {
    color: "gray",
  },
});
