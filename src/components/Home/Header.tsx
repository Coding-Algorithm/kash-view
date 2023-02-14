import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MediumText, SmallText } from "../texts";
import { Color, FontSize, Margin, Padding } from "../../utils/styleguide";
import Dashboard from "./Dashboard";

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: Padding.sm,
        position: "relative",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: Margin.xl,
        }}
      >
        <View
          style={{
            width: "55%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Profile Icon */}
          {/* <Text>Home</Text> */}
          <Image
            style={{
              width: 35,
              height: 35,
            }}
            source={require("../../assets/profileImg.png")}
          />

          {/* Name */}
          <MediumText title="Kashbuk..." />

          {/* Notificaiton */}
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={require("../../assets/expand-more.png")}
          />
        </View>

        <View>
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={require("../../assets/notifications.png")}
          />
        </View>
      </View>

      <View
        style={{
          marginBottom: Margin.sm,
        }}
      >
        <Image
          style={{
            width: 35,
            height: 35,
          }}
          source={require("../../assets/stats.png")}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "70%",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: Margin.sm,
        }}
      >
        <SmallText title="Daily summary" textStyle={{ fontWeight: "500" }} />

        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: Color.white,
            borderRadius: 50,
          }}
        ></View>

        <SmallText title="16 November 2022" textStyle={{ fontWeight: "500" }} />
      </View>

      <Dashboard />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
