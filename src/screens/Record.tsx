import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Color, Margin, Padding } from "../utils/styleguide";
import { MediumText } from "../components/texts";
import TabWrapper from "../components/Records/TabWrapper";
import Dashboard from "../components/Home/Dashboard";

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

      {activeTab === "Report" && (
        <View
          style={{
            width: "100%",
            paddingHorizontal: Padding.sm,
          }}
        >
          <Dashboard
            wrapperStyle={{
              position: "relative",
              elevation: 0,
              borderWidth: 0.5,
              borderColor: Color.homeGray,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Record;

const styles = StyleSheet.create({});
