import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as Icon from "react-native-feather";
import { TweetType } from "../types";
import React from "react";

type IconButtunProb = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number;
};

const IconBottun = ({ icon, text }: IconButtunProb) => {
  return (
    <View style={styles.iconBox}>
      <EvilIcons name={icon} size={24} color="gray" />
      <Text style={styles.numberCounts}>{text}</Text>
    </View>
  );
};

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
            <Text style={styles.Name}>{tweet.user.name}</Text>
            <Text style={styles.userName}>@{tweet.user.username}</Text>
            <Text style={{ color: "darkgray" }}>. 2h</Text>
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
          <IconBottun icon="comment" text={tweet.numberOfComments} />
          <IconBottun icon="retweet" text={tweet.numberOfRetweets} />
          <IconBottun icon="heart" text={tweet.numberOfLikes} />
          <IconBottun icon="chart" text={tweet.impressions || 0} />
          <IconBottun icon="external-link" />
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
    gap: 1,
  },
  numberCounts: {
    color: "gray",
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userName: {
    color: "gray",
    fontSize: 13,
    paddingLeft: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
});
