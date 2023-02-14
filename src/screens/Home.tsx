import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Color, FontSize, Margin, Padding } from "../utils/styleguide";
import { MediumText, SmallText } from "../components/texts";
import { calcHeight } from "../actions/calcWidthHeight";
import { transactions } from "../data/transactions";
import Header from "../components/Home/Header";
import Dashboard from "../components/Home/Dashboard";
import TransactionItem from "../components/Home/TransactionItem";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Color.primary,
        paddingTop: Padding.xlg,
      }}
    >
      <Header />

      <View
        style={{
          width: "100%",
          height: calcHeight(0.55),
          backgroundColor: Color.homeBg,
          bottom: 0,
          zIndex: -1,
          position: "absolute",
          paddingTop: Padding.xxlg,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: Margin.sm,
            paddingHorizontal: Padding.sm,
          }}
        >
          <SmallText
            title="Recent Transactions"
            textStyle={{ color: Color.balanceColor, fontWeight: "700" }}
          />

          <SmallText
            title="View all"
            textStyle={{ color: Color.primary, fontWeight: "700" }}
          />
        </View>

        <ScrollView>
          <View
            style={{
              paddingHorizontal: Padding.sm,
              marginBottom: 6,
            }}
          >
            <SmallText title="Today" textStyle={{ color: Color.homeGray }} />
          </View>
          {transactions.map((transaction, index) => {
            const { platform, product, time, type, price } = transaction;
            return index < 2 && <TransactionItem transaction={transaction} />;
          })}

          <View
            style={{
              paddingHorizontal: Padding.sm,
              marginBottom: 6,
            }}
          >
            <SmallText
              title="Yesterday"
              textStyle={{ color: Color.homeGray, marginTop: 15 }}
            />
          </View>

          {transactions.map((transaction, index) => {
            const { platform, product, time, type, price } = transaction;
            return index > 1 && <TransactionItem transaction={transaction} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
