import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SmallText } from "../texts";
import { Color, FontSize, Padding } from "../../utils/styleguide";

const TransactionItem = ({ transaction }) => {
  const { platform, product, time, type, price } = transaction;

  return (
    <View
      style={{
        paddingVertical: Padding.md,
        marginBottom: 1,
        paddingHorizontal: Padding.sm,
        backgroundColor: Color.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <SmallText
          title={`${product}`}
          textStyle={{
            color: Color.balanceColor,
            fontSize: FontSize.md_text,
          }}
        />

        <SmallText
          title={`${price}`}
          textStyle={{
            color: type === "income" ? Color.income : Color.expenses,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SmallText title={`${time}`} textStyle={{ color: Color.homeGray }} />

        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: Color.homeBgGray,
            borderRadius: 5,
          }}
        >
          <SmallText
            title={`${platform}`}
            textStyle={{ color: Color.homeGray }}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;
