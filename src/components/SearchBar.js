import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" size={30} color="black" />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "grey",
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 18,
    marginLeft: 22,
  },
});
