import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
