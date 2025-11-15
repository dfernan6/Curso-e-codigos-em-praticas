import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "../utils/i18n";

export default function Home({ navigation }: any) {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

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
        {t("discoverWeather")}
      </Text>

      <Text style={[globalStyles.subtitle]}>
        {t("subtitle")}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Buscar")}>
        <Text style={styles.linkText}>
          {t("selectCity")}
        </Text>
      </TouchableOpacity>
    </>
  ) : loading ? (
    <Text style={styles.weatherText}>{t("loading")}</Text>
  ) : (
    <>
      <Text style={[globalStyles.title, styles.title]}>
        {t("forecastFor", { city })}
      </Text>

      {weather && (
  <View style={styles.resultWrapper}>
    <View style={styles.column}>
      <View style={styles.infoRow}>
        <Ionicons name="thermometer" size={22} color="#FFD700" />
        <Text style={styles.info}>
          {Math.round(weather.main.temp)}°C
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="water" size={22} color="#00BFFF" />
        <Text style={styles.info}>
          {t("humidity", { value: weather.main.humidity })}
        </Text>
      </View>
    </View>

    <View style={styles.column}>
      <View style={styles.infoRow}>
        <Ionicons name="rainy" size={22} color="#1E90FF" />
        <Text style={styles.info}>
          {t(weather.weather[0].main.toLowerCase())}
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="leaf" size={22} color="#32CD32" />
        <Text style={styles.info}>
          {t("wind", { value: weather.wind.speed })}
        </Text>
      </View>
    </View>
  </View>
)}


      <Text style={styles.sectionTitle}>{t("next5Days")}</Text>

          {/* Cards de previsão 5 dias */}
          {forecast.length > 0 && (
            <FlatList
  data={forecast}
  horizontal
  keyExtractor={(item, index) => index.toString()}
  style={styles.forecastList}
  renderItem={({ item }) => (
 <View style={styles.card}>
  {/* Weekday translated by locale */}
  <Text style={styles.cardDate}>
    {new Date(item.dt * 1000).toLocaleDateString(i18n.language, { weekday: "short" })}
  </Text>

  <Image
    source={{ uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
    style={{ width: 50, height: 50 }}
  />

  {/* Description mapped to translation keys */}
  <Text style={styles.cardDesc}>
    {t(item.weather[0].main.toLowerCase())}
  </Text>

  {/* Temperature */}
  <Text style={styles.cardTemp}>
    {Math.round(item.main.temp)}°C
  </Text>
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
    image: { width: 200, height: 200, resizeMode: "contain" },
    title: { color: "#fff", fontSize: 30, marginBottom: 10, textAlign: "center", fontWeight: "bold" },
    linkText: { color: "#FFD700", fontSize: 18, textDecorationLine: "underline", textAlign: "center", marginTop: 20 },
    weatherText: { color: "#fff", fontSize: 22, textAlign: "center", marginTop: 20 },
    resultWrapper: {
    flexDirection: "row",       // coloca lado a lado
    justifyContent: "space-between",
    marginTop: 20,
  },
    column: {
    flex: 1,                     // cada coluna ocupa metade
    paddingHorizontal: 10,
    marginLeft: -20,
  },
    infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#222",
    height: 40,
    width: 200,
    margin: 4,
    borderRadius: 10,
  },
    info: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 8,
  },
  forecastList: { marginTop: 20 },
  sectionTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginVertical: 10,
  textAlign: "center",
  color: "#FFD700",
  marginTop: 20,
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    width: 120,
    height: 150,
  },
  cardDate: { color: "#FFD700", fontWeight: "bold", marginBottom: 6 },
  cardTemp: { color: "#fff", fontSize: 18, marginVertical: 4 },
  cardDesc: { color: "#aaa", fontSize: 14, textAlign: "center" },
});
