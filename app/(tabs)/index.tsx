import { StyleSheet, FlatList, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import tweets from "../../assets/data/tweets";
import { View } from "../../components/Themed";
import Tweet from "../../components/Tweet";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Link href={"/new-tweet"} asChild>
        <Pressable style={styles.newMessage}>
          <Entypo name="new-message" size={30} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  newMessage: {
    position: "absolute",
    padding: 15,
    backgroundColor: "#1c9bf0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 5,
    bottom: 5,
  },
});
