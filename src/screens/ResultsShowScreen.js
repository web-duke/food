import React from "react";
import { Text } from "react-native";

export const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  return <Text>{id}</Text>;
};
