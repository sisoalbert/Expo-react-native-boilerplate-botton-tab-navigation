import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

//import header
import Header from "../components/Header";

const Homescreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: 25 }}>
      <Header onPress={() => navigation.toggleDrawer()} />
      <Text>Homescreen</Text>
      <Button title="go to drawer" onPress={() => navigation.toggleDrawer()} />
      <View style={{ paddingTop: 20 }} />
      <Button
        title="go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
