import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../../styles/components/Records/InventoryTab";
import SearchBar from "../SearchBar";
import { SmallText } from "../texts";
import { Color, Margin } from "../../utils/styleguide";
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
          }}
        >
          <SmallText title="Total:  " textStyle={{ color: Color.homeGray }} />
          <SmallText title="200" textStyle={{ color: Color.balanceColor }} />
        </View>

        {inventories.map((item, index) => {

          return <InventoryResult item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

export default InventoryTab;
