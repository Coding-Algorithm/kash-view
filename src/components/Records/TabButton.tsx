import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontSize, Radius } from "../../utils/styleguide";
import { SmallText } from "../texts";
import { tabButtonType } from "../../../types/components/Records";

const TabButton = ({ title, activeTab, setActiveTab }: tabButtonType) => {
  const activeWrapperStyle = {
    backgroundColor: Color.primary,
    borderRadius: Radius.sm,
  };

  const activeTextStyle = {
    color: Color.white,
  };

  return (
    <TouchableOpacity
        onPress={() => setActiveTab(title)}
      style={[
        {
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.homeBgGray,
          borderRadius: Radius.sm,
        },
        activeTab === title && activeWrapperStyle,
      ]}
    >
      <SmallText
        title={title}
        textStyle={[
          {
            fontWeight: "600",
            color: Color.balanceColor,
            fontSize: FontSize.md_text,
          },
          activeTab === title && activeTextStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({});
