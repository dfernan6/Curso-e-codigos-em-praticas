import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ navigation }: any) {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadCityAndWeather = async () => {
    const savedCity = await AsyncStorage.getItem("city");
    setCity(savedCity);

    if (savedCity) {
      setLoading(true);
      try {
        const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;

        // Clima atual
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();
        setWeather(data);

        // Previsão 5 dias
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${savedCity}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const forecastData = await forecastResponse.json();
        const daily = forecastData.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 5);
        setForecast(daily);
      } catch (err) {
        console.log("Erro ao buscar clima:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Atualiza sempre que a Home volta ao foco
  useFocusEffect(
    useCallback(() => {
      loadCityAndWeather();
    }, [])
  );

  return (
    <View style={[globalStyles.container, { backgroundColor: "#111" }]}>
      {/* Topo com imagem dinâmica do clima atual */}
      {weather && (
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
            style={styles.image}
          />
        </View>
      )}

      {!city ? (
        <>
          <Text style={[globalStyles.title, styles.title]}>
            Descubra o Clima de sua Cidade
          </Text>

          <Text style={[globalStyles.subtitle]}>
            Com o{" "}
            <Text style={{ fontWeight: "bold", color: "#FFD700" }}>
              FindWeather
            </Text>{" "}
            nunca foi tão fácil ter a previsão do tempo na palma da sua mão
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Buscar")}>
            <Text style={styles.linkText}>
              Selecione sua cidade aqui para começar
            </Text>
          </TouchableOpacity>
        </>
      ) : loading ? (
        <Text style={styles.weatherText}>Carregando previsão...</Text>
      ) : (
        <>
          <Text style={[globalStyles.title, styles.title]}>
            Previsão para {city}
          </Text>

          {weather && (
            <View style={styles.resultWrapper}>
              <View style={styles.infoRow}>
                <Ionicons name="thermometer" size={22} color="#FFD700" />
                <Text style={styles.info}> {weather.main.temp}°C</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="water" size={22} color="#00BFFF" />
                <Text style={styles.info}> Umidade: {weather.main.humidity}%</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="rainy" size={22} color="#1E90FF" />
                <Text style={styles.info}> {weather.weather[0].description}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="leaf" size={22} color="#32CD32" />
                <Text style={styles.info}> Vento: {weather.wind.speed} m/s</Text>
              </View>
            </View>
          )}

          {/* Cards de previsão 5 dias */}
          {forecast.length > 0 && (
            <FlatList
              data={forecast}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              style={styles.forecastList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.cardDate}>
                    {new Date(item.dt * 1000).toLocaleDateString("pt-BR", { weekday: "short" })}
                  </Text>
                  <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={styles.cardTemp}>{item.main.temp}°C</Text>
                  <Text style={styles.cardDesc}>{item.weather[0].description}</Text>
                </View>
              )}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: { alignItems: "center", justifyContent: "center", marginBottom: 40 },
  image: { width: 200, height: 200, resizeMode: "contain", marginTop: 40 },
  title: { color: "#fff", fontSize: 30, marginBottom: 30, textAlign: "center", fontWeight: "bold" },
  linkText: { color: "#FFD700", fontSize: 18, textDecorationLine: "underline", textAlign: "center", marginTop: 20 },
  weatherText: { color: "#fff", fontSize: 22, textAlign: "center", marginTop: 20 },
  resultWrapper: { marginTop: 20 },
  infoRow: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  info: { fontSize: 18, color: "#fff", marginLeft: 8 },
  forecastList: { marginTop: 30 },
  card: {
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    width: 120,
  },
  cardDate: { color: "#FFD700", fontWeight: "bold", marginBottom: 6 },
  cardTemp: { color: "#fff", fontSize: 18, marginVertical: 4 },
  cardDesc: { color: "#aaa", fontSize: 14, textAlign: "center" },
});
