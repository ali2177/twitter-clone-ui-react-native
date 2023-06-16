import { View, Text } from "react-native";
import React from "react";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";

const TweetScreen = () => {
  const { id } = useSearchParams();
  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) return <Text>Tweet {id} Not Found !!</Text>;
  return <Tweet tweet={tweet} />;
};

export default TweetScreen;
