import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Icon from "react-native-feather";
import { TweetType } from "../types";
import React from "react";

type TweetProb = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProb) => {
  return (
    <View style={styles.tweetWrapper}>
      <Image source={{ uri: tweet.user.image }} style={styles.image} />
      <View style={styles.main}>
        <View style={styles.user}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            <Text>. 2h</Text>
          </View>
          <TouchableOpacity>
            <Icon.MoreHorizontal
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
        <Text>{tweet.content}</Text>
        {tweet.image && (
          <Image
            source={{ uri: tweet.image }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 20,
              marginVertical: 10,
            }}
          />
        )}

        <View style={styles.iconWrapper}>
          <View style={styles.iconBox}>
            <Icon.MessageCircle
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
            <Text style={styles.numberCounts}>{tweet.numberOfComments}</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon.Repeat
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
            <Text style={styles.numberCounts}>{tweet.numberOfRetweets}</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon.Heart
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
            <Text style={styles.numberCounts}>{tweet.numberOfLikes}</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon.BarChart2
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
            <Text style={styles.numberCounts}>{tweet.impressions}</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon.Upload
              strokeWidth={2.5}
              height={20}
              width={20}
              color={"gray"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  tweetWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  main: {
    flex: 1,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  numberCounts: {
    color: "gray",
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
});
