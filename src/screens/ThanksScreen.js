import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import Header
import Header from "../components/Header";

const ThanksScreen = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Header onPress={() => navigation.toggleDrawer()} />

      <Text>ThanksScreen</Text>
    </View>
  );
};

export default ThanksScreen;

const styles = StyleSheet.create({});
