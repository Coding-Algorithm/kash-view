import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { Color, Margin, Padding } from "../utils/styleguide";
import { MediumText } from "../components/texts";
import TabWrapper from "../components/Records/TabWrapper";
import ReportTab from "../components/Records/ReportTab";
import InventoryTab from "../components/Records/InventoryTab";

const Record = () => {
  const [activeTab, setActiveTab] = useState("Inventory");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Color.homeBg,
        paddingTop: Padding.xlg,
      }}
    >
      <View
        style={{
          paddingHorizontal: Padding.sm,
          marginBottom: Margin.md,
        }}
      >
        <MediumText
          title="Records"
          textStyle={{ color: Color.primary, fontWeight: "700" }}
        />
      </View>

      <View
        style={{
          marginBottom: Margin.md,
        }}
      >
        <TabWrapper activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>

      {activeTab === "Report" && <ReportTab />}
      {activeTab === "Inventory" && <InventoryTab />}
    </SafeAreaView>
  );
};

export default Record;

const styles = StyleSheet.create({});
