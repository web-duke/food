import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import { SearchBar } from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "montreal",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(`something went wrong, ${err}`);
    }
  };

  useEffect(() => {
    searchApi("pasta");
    return;
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <Text>Found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
