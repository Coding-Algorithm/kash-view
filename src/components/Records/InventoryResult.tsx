import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../../styles/components/Records/InventoryResult";
import { Color, FontSize, Margin } from "../../utils/styleguide";
import { SmallText } from "../texts";

const InventoryResult = ({ item }) => {
  const { name, picture, price, totalAvailable, brand } = item;

  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: Margin.sm,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../../assets/bag.png")}
        />

        <View
          style={{
            width: 18,
            height: 18,
            borderWidth: 2,
            borderRadius: 3,
            borderColor: Color.homeGray,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: Margin.sm,
        }}
      >
        <SmallText
          title={name}
          textStyle={{ color: Color.balanceColor, fontWeight: "600" }}
        />

        <SmallText
          title={price}
          textStyle={{
            color: Color.balanceColor,
            fontWeight: "600",
            fontSize: FontSize.xmd_text,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: Margin.sm,
        }}
      >
        <SmallText
          title={brand}
          textStyle={{
            color: Color.homeGray,
            fontWeight: "400",
          }}
        />

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <SmallText
            title={`${totalAvailable} `}
            textStyle={{
              color: Color.balanceColor,
              fontWeight: "600",
            }}
          />

          <SmallText
            title={`in stock`}
            textStyle={{
              color: Color.homeGray,
              fontWeight: "450",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default InventoryResult;

const styles = StyleSheet.create({});
