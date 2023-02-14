import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MediumText } from '../texts'
import { Margin } from '../../utils/styleguide'

const Profile = () => {
  return (
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
  )
}

export default Profile

const styles = StyleSheet.create({})