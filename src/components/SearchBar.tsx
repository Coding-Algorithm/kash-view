import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { Styles } from "../styles/components/SearchBar";
import { Color } from "../utils/styleguide";

const SearchBar = ({styleProp}) => {

    

  return (
    <View style={[Styles.container, styleProp]}>
      <Image
        style={{
          width: 15,
          height: 15,
          marginRight: 10
        }}
        source={require("../assets/searchIcon.png")}
      />
      <TextInput 
      selectionColor={Color.searchBarCursor}
      style={Styles.textInput} />
    </View>
  );
};

export default SearchBar;
