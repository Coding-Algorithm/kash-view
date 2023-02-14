import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MediumText, SmallText } from "../texts";
import { Color, FontSize, Margin, Padding } from "../../utils/styleguide";

const Dashboard = ({ wrapperStyle = {} }: DashboardPropType) => {
  return (
    <View
      style={[
        {
          width: "100%",
          padding: Padding.sm,
          borderRadius: 7,
          backgroundColor: Color.white,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 20,
        },
        wrapperStyle,
      ]}
    >
      <View
        style={{
          marginBottom: Margin.md,
        }}
      >
        <MediumText
          title="₦1,540,500.00"
          textStyle={{
            color: Color.balanceColor,
            fontWeight: "600",
            fontSize: FontSize.lg_text,
          }}
        />

        <SmallText
          title="Current balance"
          textStyle={{ color: Color.homeGray, fontSize: FontSize.sm_text }}
        />
      </View>

      <View
        style={{
          width: "85%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <MediumText
            title="₦15,455.00"
            textStyle={{
              color: Color.income,
              fontWeight: "600",
              fontSize: FontSize.homeProfileName,
            }}
          />

          <SmallText
            title="Income"
            textStyle={{
              color: Color.homeGray,
              fontSize: FontSize.sm_text,
            }}
          />
        </View>

        <View>
          <MediumText
            title="₦50,300.00"
            textStyle={{
              color: Color.expenses,
              fontWeight: "600",
              fontSize: FontSize.homeProfileName,
            }}
          />

          <SmallText
            title="Expenses"
            textStyle={{
              color: Color.homeGray,
              fontSize: FontSize.sm_text,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
