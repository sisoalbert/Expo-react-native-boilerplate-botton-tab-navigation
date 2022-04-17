import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "coral",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: 'red',
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={props.onPress}
        >
          <Image
            style={{ width: 35, height: 35, resizeMode: "stretch" }}
            source={require("../../assets/icon.png")}
          />
          <View style={{ paddingHorizontal: 10 }}>
            <Image
              style={{
                width: 52,
                height: 20,
                resizeMode: "contain",
              }}
              source={require("../../assets/icon.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => console.log("bookmarks")}>
        <Image
          style={{
            width: 52,
            height: 20,
            resizeMode: "contain",
          }}
          source={require("../../assets/icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
