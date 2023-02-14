import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Record from "../screens/Record";
import { Color } from "../utils/styleguide";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Color.primary,
            height: 50,
            alignItems: "center",
            // paddingBottom: 10,
          },
        }}
        // sceneContainerStyle ={{
        //     backgroundColor: "orange"
        // }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 5,
            },
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
                source={
                  focused
                    ? require("../assets/home.png")
                    : require("../assets/inactiveHome.png")
                }
              />
            ),
            tabBarActiveTintColor: Color.white,
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
          }}
        />
        <Tab.Screen
          name="record"
          component={Record}
          options={{
            tabBarLabel: "Record",
            tabBarLabelStyle: {
              //   color: "white",
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 5,
            },
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
                source={
                  focused
                    ? require("../assets/activeRecord.png")
                    : require("../assets/records.png")
                }
              />
            ),
            tabBarActiveTintColor: Color.white,
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
