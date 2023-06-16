import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const NewTweet = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Cancel</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.twettButtun}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.main}>
          <Image
            source={require("../assets/images/testimonials-1.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View>
            <TextInput
              value={text}
              placeholder="tweet ..."
              onChangeText={(value) => setText(value)}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  twettButtun: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 35,
    color: "white",
    fontWeight: "bold",
  },
});
