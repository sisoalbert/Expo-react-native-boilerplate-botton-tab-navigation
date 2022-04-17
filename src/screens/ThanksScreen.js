import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
//import Header
import Header from "../components/Header";

const ThanksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: 25 }}>
      <Header onPress={() => navigation.toggleDrawer()} />

      <Text>ThanksScreen</Text>
    </SafeAreaView>
  );
};

export default ThanksScreen;

const styles = StyleSheet.create({});
