import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Linking } from "react-native";
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
  const [currentForecast, setCurrentForecast] = useState<any | null>(null); // 👈 new
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const loadCityAndWeather = async () => {
    const savedCity = await AsyncStorage.getItem("city");
    setCity(savedCity);

    if (savedCity) {
      setLoading(true);
      try {
        const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();
        setWeather(data);
        setCurrentForecast(data); // 👈 initialize with today’s weather

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

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  if (date.toDateString() === today.toDateString()) {
    return capitalize(t("today") || "Today");
  }
  if (date.toDateString() === tomorrow.toDateString()) {
    return capitalize(t("tomorrow") || "Tomorrow");
  }
  return date.toLocaleDateString(i18n.language, { weekday: "short" });
};

// For selected forecast → full weekday
const formatDayNameFull = (dt: number) => {
  const date = new Date(dt * 1000);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  if (date.toDateString() === today.toDateString()) {
    return capitalize(t("today") || "Today");
  }
  if (date.toDateString() === tomorrow.toDateString()) {
    return capitalize(t("tomorrow") || "Tomorrow");
  }
  return date.toLocaleDateString(i18n.language, { weekday: "long" });
};

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  function capitalize(_arg0: string): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={[globalStyles.container, { backgroundColor: "rgb(27, 29, 34)" }]}>
    {!city ? (
      <View style={styles.emptyWrapper}>
        <Text style={styles.brandTitle}>
          Find<Text style={styles.brandBold}>Weather</Text>
        </Text>
        <Image
          source={require("../../assets/imagens/findWeather.png")}
          style={styles.emptyImage}
          resizeMode="contain"
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
        <Text style={[globalStyles.title, styles.title]}>{t("forecastFor", { city })}</Text>

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
  {currentForecast.dt
    ? formatDayNameFull(currentForecast.dt) +
      " – " +
      new Date(currentForecast.dt * 1000).toLocaleDateString(i18n.language)
    : capitalize(t("today") || "Today")}
</Text>

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
            </View>
          </>
        )}

        <Text style={styles.sectionTitle}>{t("next5Days")}</Text>

        {forecast.length > 0 && (
        <FlatList
          data={forecast}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          style={styles.forecastList}
          renderItem={({ item }) => {
            const isSelected = currentForecast && item.dt === currentForecast.dt;
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
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.cardDesc}>{t(item.weather[0].main.toLowerCase())}</Text>
                <Text style={styles.cardTemp}>{Math.round(item.main.temp)}°C</Text>
              </TouchableOpacity>
            );
          }}
        />
        )}
      </>
    )}
  </View>
);
}

const styles = StyleSheet.create({
  imageWrapper: { alignItems: "center", justifyContent: "center"},
  image: { width: 200, height: 200, resizeMode: "contain" },
  title: { color: "#fff", fontSize: 30, textAlign: "center", fontWeight: "bold" },
  linkText: { color: "#FFD700", fontSize: 18, textDecorationLine: "underline", textAlign: "center"},
  weatherText: { color: "#fff", fontSize: 22, textAlign: "center"},
  resultWrapper: { flexDirection: "row", justifyContent: "space-between"},
  column: { flex: 1, paddingHorizontal: 10 },
infoRow: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 6,
  backgroundColor: "#222",
  minHeight: 40,          // 👈 minimum height, but can grow
  borderRadius: 10,
  paddingHorizontal: 8,
  width: "100%",
},

info: {
  fontSize: 18,
  color: "#fff",
  marginLeft: 8,
  flex: 1,                // 👈 take remaining space
  flexWrap: "wrap",       // 👈 allow wrapping to next line
  flexShrink: 1,          // 👈 shrink if needed
},
  forecastList: { marginTop: 2,  },
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
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,  
  },
  cardDate: { color: "#FFD700", fontWeight: "bold", marginBottom: 6 },
  cardTemp: { color: "#fff", fontSize: 18, marginVertical: 4 },
  cardDesc: { color: "#aaa", fontSize: 14, textAlign: "center" },

  // ✅ Added empty state styles
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  brandTitle: {
    fontSize: 32,
    fontWeight: "300",
    color: "#FFD700",
  },
  brandBold: {
    fontWeight: "700",
    color: "#FFD700",
  },
  subtitle: {
    textAlign: "center",
    marginVertical: 10,
    color: "#ccc",
    fontSize: 16,
  },
  emptyImage: {
    width: 150,
  },
    selectedWrapper: {
    backgroundColor: "#222",   // slightly lighter than background
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,                 // Android shadow
  },
  tempText: {
  fontSize: 28,           // bigger than normal info
  fontWeight: "bold",     // stronger emphasis
  color: "#FFD700",       // golden highlight
  marginLeft: 8,
  textShadowColor: "#000", // subtle shadow for effect
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
  },
  cardSelected: {
    opacity: 0.5,           // reduce opacity when selected
    borderColor: "#FFD700", // optional: highlight border
    borderWidth: 2,
  },
  footer: {
  position: "absolute",   // fixed at bottom
  bottom: 10,
  left: 0,
  right: 0,
  alignItems: "center",
},

footerText: {
  color: "#ccc",
  fontSize: 14,
  fontStyle: "italic",
},

footerLink: {
  color: "#FFD700",
  textDecorationLine: "underline",
}
});

