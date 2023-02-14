import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dashboard from "../Home/Dashboard";
import { Color, Padding } from "../../utils/styleguide";
import { Styles } from "../../styles/components/Records/ReportTab";

const ReportTab = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: Padding.sm,
      }}
    >
      <Dashboard wrapperStyle={Styles.wrapperStyle} />
    </View>
  );
};

export default ReportTab;

// const styles = StyleSheet.create({})
