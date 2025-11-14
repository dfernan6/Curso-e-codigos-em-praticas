import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

export default function NextPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    setError(false);
    setWeather(null);
    setForecast([]);

    try {
      const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;

      // Clima atual
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(true);
        return;
      }

      setWeather(data);
      await AsyncStorage.setItem("city", city);

      // Previsão 5 dias
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const forecastData = await forecastResponse.json();

      // Pega 1 previsão por dia (a API retorna de 3h em 3h)
      const daily = forecastData.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 5);
      setForecast(daily);

    } catch (err) {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Digite a cidade..."
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#FFD700" />
        </TouchableOpacity>
      </View>
      {/* Topo com imagem dinâmica do clima atual */}
      {weather && (
        
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
            style={styles.image}
          />
        </View>
      )}
      {/* Resultado */}
      {error && (
        <Text style={styles.errorText}>Cidade não encontrada. Tente novamente.</Text>
      )}

      {weather && (
        <View style={styles.resultWrapper}>
          <Text style={styles.cityName}>{weather.name}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 20 },
  imageWrapper: { alignItems: "center", justifyContent: "center", marginBottom: 20 },
  image: { width: 200, height: 200, resizeMode: "contain" },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#444",
  },
  input: { flex: 1, color: "#fff", fontSize: 18, paddingVertical: 10 },
  errorText: { color: "#ff4444", fontSize: 16, textAlign: "center", marginTop: 20 },
  resultWrapper: { marginTop: 30, alignItems: "flex-start" },
  cityName: { fontSize: 26, fontWeight: "bold", color: "#FFD700", marginBottom: 10 },
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
