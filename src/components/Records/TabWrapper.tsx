import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { windowWidth } from "../../utils/contstants";
import { Color, FontSize, Padding, Radius } from "../../utils/styleguide";
import { SmallText } from "../texts";
import TabButton from "./TabButton";
import { tabWrapperType } from "../../../types/components/Records";

const TabWrapper = ({ activeTab, setActiveTab }: tabWrapperType) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: Padding.sm,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: Color.homeBgGray,
          borderRadius: Radius.sm,
          flexDirection: "row"
        }}
      >
        <TabButton
          title="Inventory"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          title="Report"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    </View>
  );
};

export default TabWrapper;

const styles = StyleSheet.create({});
