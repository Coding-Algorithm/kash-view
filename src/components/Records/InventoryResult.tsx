import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InventoryResult = ({ item }) => {
  const { name, picture, price, totalAvailable, brand } = item;
  return (
    <View
    >
      <Text>InventoryResult</Text>
    </View>
  );
};

export default InventoryResult;

const styles = StyleSheet.create({});
