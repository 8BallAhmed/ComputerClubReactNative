import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { render } from "react-dom";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const key = "eb902d8cfa049f1b95fba0d74b8ff6cc";
const URL = `api.openweathermap.org/data/2.5/weather?q=jeddah&appid=${key}`;

export default function WeatherComponent() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState("");

  function fetchWeather() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Jeddah&appid=eb902d8cfa049f1b95fba0d74b8ff6cc"
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setCity(data.name);
        setHumidity(data.main.humidity);
        setWeather(data.weather[0].main);
      });
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View style={styles.body}>
      <Image
        style={{ height: 64, width: 64, alignSelf: "center" }}
        source={require("./assets/sun.png")}
      ></Image>
      <Text style={styles.text}>Today's weather:</Text>
      <Text style={styles.weather}>City: {city}</Text>
      <Text style={styles.weather}>Weather: {weather}</Text>
      <Text style={styles.weather}>
        Temperature: {Math.round(temperature - 273.15)}C
      </Text>
      <Text style={styles.weather}>Humidity: {humidity}%</Text>
      <TouchableOpacity
        onPress={async () => {
          fetchWeather();
          Alert.alert("Weather Updated!");
        }}
        style={styles.button}
      >
        <Text style={{ color: "white", fontSize: 24 }}>Refresh</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "black",
          fontSize: 18,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Our courses are seriously awesome. Follow us on our Social media
        accounts @AtaaTech
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 20,
    width: 0.9 * windowWidth,
    height: 0.7 * windowHeight,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 30,
    alignSelf: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  weather: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    marginTop: 10,
    textAlign: "left",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: windowWidth * 0.5,
    height: 50,
    marginTop: 30,
    backgroundColor: "#2980b9",
    borderRadius: 30,
  },
});
