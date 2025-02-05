import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.constainer}>
      <Image style={styles.image} source={{ uri: result.image_url }} />

      <Text style={styles.name}>{result.name}</Text>

      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
