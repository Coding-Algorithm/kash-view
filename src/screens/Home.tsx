import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, Padding } from "../utils/styleguide";
import { SmallText } from "../components/texts";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: Padding.xlg,
        paddingHorizontal: Padding.sm,
        backgroundColor: Color.primary,
      }}
    >
      <View>
        {/* Profile Icon */}
        {/* <Text>Home</Text> */}
        <Image
          style={{
            width: 35,
            height: 35,
          }}
          source={require("../assets/profileImg.png")}
        />

        {/* Name */}
        <SmallText title="Kashbuk..." />

        {/* Notificaiton */}
        <Image
          style={{
            width: 35,
            height: 35,
          }}
          source={require("../assets/expand-more.png")}
        />

      </View>

      <View></View>

      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
