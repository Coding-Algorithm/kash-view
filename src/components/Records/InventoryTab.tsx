import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../../styles/components/Records/InventoryTab";
import SearchBar from "../SearchBar";
import { SmallText } from "../texts";
import { Color, Margin, Padding } from "../../utils/styleguide";
import InventoryResult from "./InventoryResult";
import { inventories } from "../../data/inventory";

const InventoryTab = () => {
  return (
    <View style={Styles.container}>
      <SearchBar styleProp={{ marginBottom: Margin.xmd }} />

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: Margin.sm,
          }}
        >
          <SmallText title="Total:  " textStyle={{ color: Color.homeGray }} />
          <SmallText title="200" textStyle={{ color: Color.balanceColor }} />
        </View>

        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
            // flex: 1,
            paddingBottom: Padding.lg,
            marginBottom: 100
        }}
        >
          {inventories.map((item, index) => {
            return <InventoryResult item={item} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default InventoryTab;
