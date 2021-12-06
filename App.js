import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeatherComponent from "./WeatherComponent";

export default function App() {
  return (
    <LinearGradient colors={["#74b9ff", "#48dbfb"]} style={styles.container}>
      <Text style={[styles.textStyle, { marginTop: 65 }]}>Welcome, Ahmed!</Text>
      <Text style={styles.textStyle}>Today's Weather: </Text>
      <WeatherComponent></WeatherComponent>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textStyle: { color: "white", fontSize: 28, marginLeft: 10 },
});
