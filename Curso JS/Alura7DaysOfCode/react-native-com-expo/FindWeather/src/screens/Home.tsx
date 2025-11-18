/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Linking,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "../utils/i18n";

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
}

interface ForecastResponse {
  list: ForecastItem[];
  city: { name: string };
}

export default function Home({ navigation }: any) {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [currentForecast, setCurrentForecast] = useState<ForecastItem | null>(null);
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  // ✅ Define a working capitalize once
  const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // ✅ Helper: daily min/max with fallback temperature
  const getDailyMinMax = (
    dt: number,
    fd: ForecastResponse | null,
    fallbackTemp: number
  ) => {
    if (!fd) return { min: fallbackTemp, max: fallbackTemp };

    // Use the day indicated by dt
    const targetDate = new Date(dt * 1000).toDateString();

    const dayEntries = fd.list.filter(
      (item) => new Date(item.dt * 1000).toDateString() === targetDate
    );

    if (dayEntries.length === 0) {
      // Fallback when there are no slices for that day
      return { min: fallbackTemp, max: fallbackTemp };
    }

    const temps = dayEntries.map((item) => item.main.temp);
    return {
      min: Math.min(...temps),
      max: Math.max(...temps),
    };
  };

  const loadCityAndWeather = async () => {
    const savedCity = await AsyncStorage.getItem("city");
    setCity(savedCity);

    if (savedCity) {
      setLoading(true);
      try {
        const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;

        // Current weather (today)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();
        setWeather(data);

        // Forecast (future days)
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${savedCity}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const forecastDataJson: ForecastResponse = await forecastResponse.json();
        setForecastData(forecastDataJson);

        const daily = forecastDataJson.list
          .filter((_: any, index: number) => index % 8 === 0)
          .slice(0, 5); // next 5 days

        // ✅ Compute today's min/max from forecastData with fallback to current temp
        const { min, max } = getDailyMinMax(
          data.dt,
          forecastDataJson,
          data.main.temp
        );

        // ✅ Combine today + next 4 days
        const todayForecast: ForecastItem = {
          dt: data.dt,
          main: {
            ...data.main,
            temp_min: min ?? data.main.temp,
            temp_max: max ?? data.main.temp,
          },
          weather: data.weather,
          wind: data.wind,
        };

        const combined = [todayForecast, ...daily];
        setForecast(combined);

        // ✅ Select today’s card by default
        setForecast(daily); // only future days
        setCurrentForecast(todayForecast);
      } catch (err) {
        console.log("Erro ao buscar clima:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadCityAndWeather();
    }, [])
  );

  // For cards → abbreviated weekday
  const formatDayNameShort = (dt: number) => {
    const date = new Date(dt * 1000);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return capitalize(t("today") || "Today");
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return capitalize(t("tomorrow") || "Tomorrow");
    }
    return date.toLocaleDateString(i18n.language, { weekday: "short" });
  };

  const formatDayNameFull = (dt: number) => {
    const date = new Date(dt * 1000);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return capitalize(t("today") || "Today");
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return capitalize(t("tomorrow") || "Tomorrow");
    }
    return date.toLocaleDateString(i18n.language, { weekday: "long" });
  };

  // ✅ derive min/max for currently selected card (safe guards)
  const dailyMinMax =
    currentForecast && forecastData
      ? getDailyMinMax(
          currentForecast.dt,
          forecastData,
          currentForecast.main.temp // fallback temp
        )
      : { min: null, max: null };

return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
  >
    {!city ? (
      <View style={styles.emptyWrapper}>
        <Text style={styles.brandTitle}>
          Find<Text style={styles.brandBold}>Weather</Text>
        </Text>
        <Image
          source={require("../../assets/imagens/findWeather.png")}
          style={styles.emptyImage}
        />
        <Text style={[globalStyles.subtitle, styles.subtitle]}>{t("subtitle")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={styles.linkText}>{t("selectCity")}</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {t("developedBy")}{" "}
            <Text
              style={styles.footerLink}
              onPress={() => Linking.openURL("https://dfernan6.github.io/")}
            >
              dfernan6
            </Text>
          </Text>
        </View>
      </View>
    ) : loading ? (
      <Text style={styles.weatherText}>{t("loading")}</Text>
    ) : (
      <>
        {/* City name with map-marker icon */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
          <MaterialCommunityIcons name="map-marker" size={28} color="#FFD700" />
          <Text style={[globalStyles.title, styles.title, { marginLeft: 6 }]}>
            {t("forecastFor", { city })}
          </Text>
        </View>

        {currentForecast && (
          <>
            {/* Forecast image */}
            <View style={styles.imageWrapper}>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@4x.png`,
                }}
                style={styles.image}
              />
            </View>

            {/* Forecast details */}
            <View style={styles.selectedWrapper}>
              <Text style={styles.sectionTitle}>
                {currentForecast?.dt
                  ? formatDayNameFull(currentForecast.dt) +
                    " – " +
                    new Date(currentForecast.dt * 1000).toLocaleDateString(i18n.language)
                  : capitalize(t("today") || "Today")}
              </Text>
            </View>
            
            

              <View style={styles.resultWrapper}>
                {weather && (
                  <Text style={styles.weatherText}>
                    {t("", { value: Math.round(weather.main.temp) })}
                  </Text>
                )}
                <View style={styles.column}>
                  <View style={styles.infoRow}>
                    <Ionicons name="thermometer" size={26} color="#FFD700" />
                    <Text style={styles.tempText}>
                      {Math.round(currentForecast.main.temp)}°C
                    </Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Ionicons name="water" size={22} color="#00BFFF" />
                    <Text style={styles.info}>
                      {t("humidity", { value: currentForecast.main.humidity })}
                    </Text>
                  </View>
                </View>
                <View style={styles.column}>
                  <View style={styles.infoRow}>
                    <Ionicons name="rainy" size={22} color="#1E90FF" />
                    <Text style={styles.info}>
                      {t(currentForecast.weather[0].main.toLowerCase())}
                    </Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Ionicons name="leaf" size={22} color="#32CD32" />
                    <Text style={styles.info}>
                      {t("wind", { value: currentForecast.wind.speed })}
                    </Text>
                  </View>
                </View>
              </View>

              {/* ✅ Max/Min temperatures */}
              <View style={[styles.infoRow, { marginTop: 10 }]}>
                <Ionicons name="arrow-up" size={20} color="#FF4500" />
                <Text style={styles.info}>
                  {dailyMinMax.max !== null
                    ? t("maxTemp", { value: Math.round(dailyMinMax.max) })
                    : ""}
                </Text>
                <Ionicons name="arrow-down" size={20} color="#1E90FF" style={{ marginLeft: 12 }} />
                <Text style={styles.info}>
                  {dailyMinMax.min !== null
                    ? t("minTemp", { value: Math.round(dailyMinMax.min) })
                    : ""}
                </Text>
              </View>            

            {/* ✅ Hourly temperatures for the selected day */}
            <Text style={styles.sectionTitle}>{t("dayDetails")}</Text>
            <FlatList
              data={
                forecastData?.list.filter(
                  (item: any) =>
                    new Date(item.dt * 1000).toDateString() ===
                    new Date(currentForecast.dt * 1000).toDateString()
                ) || []
              }
              horizontal
              keyExtractor={(item, index) => index.toString()}
              style={styles.hourlyList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.hourlyCard}>
                  <Text style={styles.hourlyTime}>
                    {new Date(item.dt * 1000).toLocaleTimeString(i18n.language, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    }}
                    style={styles.hourlyIcon}
                  />
                  <Text style={styles.hourlyTemp}>{Math.round(item.main.temp)}°C</Text>
                </View>
              )}
            />

          </>
        )}

        <Text style={styles.sectionTitle}>{t("next5Days")}</Text>

        {forecast.length > 0 && (
          <FlatList
            data={forecast}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            style={styles.forecastList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const isSelected =
                currentForecast && item.dt === currentForecast.dt;
              return (
                <TouchableOpacity
                  style={[styles.card, isSelected && styles.cardSelected]}
                  onPress={() => setCurrentForecast(item)}
                >
                  <Text style={styles.cardDate}>{formatDayNameShort(item.dt)}</Text>
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    }}
                    style={styles.forecastIcon}
                  />
                  <Text style={styles.cardDesc}>
                    {t(item.weather[0].main.toLowerCase())}
                  </Text>
                  <Text style={styles.cardTemp}>
                    {Math.round(item.main.temp)}°C
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </>
    )}
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(27, 29, 34)",
    padding: 16,                  // 4/5 of 20
  },

  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,              // 4/5 of 20
  },

  image: {
    width: 120,                    // 4/5 of 150
    height: 120,                   // 4/5 of 150
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 14,                  // 4/5 of 18
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,              // 4/5 of 10
  },

  linkText: {
    color: "#FFD700",
    fontSize: 13,                  // 4/5 of 16
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: 5,              // 4/5 of 6
  },

  weatherText: {
    color: "#fff",
    fontSize: 13,                  // 4/5 of 16
    textAlign: "center",
    marginVertical: 3,              // 4/5 of 4
  },

  resultWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,                   // 4/5 of 10
  },

  column: {
    flex: 1,
    paddingHorizontal: 8,           // 4/5 of 10
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,              // 4/5 of 6
    backgroundColor: "#222",
    minHeight: 32,                  // 4/5 of 40
    borderRadius: 8,                // 4/5 of 10
    paddingHorizontal: 10,          // 4/5 of 12
    width: "100%",
    borderWidth: 1,
    borderColor: "#444",
  },

  info: {
    fontSize: 13,                   // 4/5 of 16
    color: "#fff",
    marginLeft: 6,                  // 4/5 of 8
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1,
  },

  forecastList: { marginTop: 2 },

  sectionTitle: {
    fontSize: 14,                   // 4/5 of 18
    fontWeight: "bold",
    marginVertical: 10,              // 4/5 of 12
    textAlign: "center",
    color: "#FFD700",
  },

  card: {
    width: 96,                      // 4/5 of 120
    aspectRatio: 3 / 4,
    borderRadius: 8,                // 4/5 of 10
    backgroundColor: "#222",
    marginRight: 10,                // 4/5 of 12
    padding: 10,                    // 4/5 of 12
    alignItems: "center",
    marginBottom: 20,              
  },

  cardDate: { color: "#FFD700", fontWeight: "bold", marginBottom: 5 }, // 4/5 of 6
  cardTemp: { color: "#fff", fontSize: 13, marginVertical: 3, textAlign: "center" }, // 4/5 of 16
  cardDesc: { color: "#aaa", fontSize: 11, textAlign: "center" }, // 4/5 of 14

  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,          // 4/5 of 20
  },

  brandTitle: {
    fontSize: 18,                   // 4/5 of 22
    fontWeight: "300",
    color: "#FFD700",
    textAlign: "center",
  },

  brandBold: {
    fontWeight: "700",
    color: "#FFD700",
  },

  subtitle: {
    textAlign: "center",
    marginVertical: 8,              // 4/5 of 10
    color: "#ccc",
    fontSize: 11,                   // 4/5 of 14
  },

  emptyImage: {
    width: 120,                     // 4/5 of 150
    height: 120,                    // 4/5 of 150
    resizeMode: "contain",
  },

  selectedWrapper: {
    backgroundColor: "#222",
    borderRadius: 10,               // 4/5 of 12
    padding: 13,                    // 4/5 of 16
    borderWidth: 1,
    borderColor: "#444",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  tempText: {
    fontSize: 14,                   // 4/5 of 18
    fontWeight: "bold",
    color: "#FFD700",
    marginLeft: 6,                   // 4/5 of 8
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  cardSelected: {
    opacity: 0.5,
    borderColor: "#FFD700",
    borderWidth: 2,
  },

  footer: {
    position: "absolute",
    bottom: 8,                       // 4/5 of 10
    left: 0,
    right: 0,
    alignItems: "center",
  },

  footerText: {
    color: "#ccc",
    fontSize: 11,                    // 4/5 of 14
    fontStyle: "italic",
  },

  footerLink: {
    color: "#FFD700",
    textDecorationLine: "underline",
  },

  forecastIcon: {
    width: 32,                       // 4/5 of 40
    height: 32,                      // 4/5 of 40
    resizeMode: "contain",
  },
  hourlyList: {
    marginVertical: 12,
  },
  hourlyCard: {
    backgroundColor: "#2A2D34",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    width: 80,
  },
  hourlyTime: {
    fontSize: 14,
    color: "#FFD700",
    marginBottom: 4,
  },
  hourlyIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  hourlyTemp: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});




