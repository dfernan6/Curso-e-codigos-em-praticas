/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
type Weather = {
  cod: number;
  name: string;
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
  main: {
    temp: number;
    humidity: number;
    temp_min: number;   // ✅ add this
    temp_max: number;   // ✅ add this
  };
};


export default function NextPage() {
  const [city, setCity] = useState<string>("");
  const [locationInfo, setLocationInfo ] = useState<Weather | null>(null);
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    // auto-run localization when NextPage mounts
    handleLocalization();
  }, []);

  const handleSearch = async () => {
    setError(false);

    if (!city.trim()) {
      setError(true);
      return;
    }

    try {
      const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const data: Weather = await response.json();

      if (data.cod !== 200) {
        setError(true);
        return;
      }

      await AsyncStorage.setItem("city", city);
      // ✅ navigate to Home to load forecasts
      navigation.navigate("Home" as never);
    } catch {
      setError(true);
    }
  };

  const handleLocalization = async () => {
  try {
    setError(false);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError(true);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const apiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENWEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    const data: Weather = await response.json();

    if (data.cod !== 200) {
      setError(true);
      return;
    }

    setLocationInfo(data); // ✅ show card
    await AsyncStorage.setItem("city", data.name);
    // ❌ don’t navigate here
  } catch {
    setError(true);
  }
};


  return (
  <View style={styles.container}>
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.searchWrapper}>
        {/* Magnifying glass button first */}
        <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
          <MaterialCommunityIcons name="magnify" size={28} color="#FFD700" />
        </TouchableOpacity>

        {/* Search bar in the middle */}
        <TextInput
          style={[styles.input, { flex: 1, marginHorizontal: 12 }]} // flex makes it expand
          placeholder={t("search.placeholder")}
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />

        {/* GPS button last */}
        <TouchableOpacity style={styles.iconButton} onPress={handleLocalization}>
          <MaterialCommunityIcons name="map-marker" size={28} color="#FFD700" />
        </TouchableOpacity>
      </View>

      {/* Error block only */}
      {error && (
        <View style={styles.errorWrapper}>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={80}
            color="red"
            style={styles.errorIcon}
          />
          <Image
            source={require("../../assets/imagens/search.png")}
            style={styles.errorImage}
            resizeMode="contain"
          />
          <Text style={styles.errorText}>{t("search.error")}</Text>
        </View>
      )}

      {/* ✅ GPS location card in middle */}
      {locationInfo && !error && (
        <View style={{ alignItems: "center", marginVertical: 30 }}>
          <TouchableOpacity
            style={styles.forecastCard}
            onPress={() => {
              AsyncStorage.setItem("city", locationInfo.name);
              navigation.navigate("Home" as never);
            }}
          >
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${locationInfo.weather[0].icon}@4x.png`,
              }}
              style={styles.forecastIcon}
            />
            <Text style={styles.cardTitle}>{locationInfo.name}</Text>
            <Text style={styles.cardTemp}>
              {Math.round(locationInfo.main.temp)}°C
            </Text>
            <Text style={styles.cardMinMax}>
              Min {Math.round(locationInfo.main.temp_min)}°C / Max{" "}
              {Math.round(locationInfo.main.temp_max)}°C
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {t("developedBy")}{" "}
          <Text
            style={styles.footerLink}
            onPress={() =>
              Linking.openURL("https://dfernan6.github.io/")
            }
          >
            dfernan6
          </Text>
        </Text>
      </View>
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(27, 29, 34)", padding: 20 },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
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
  errorWrapper: {
  flexDirection: 'column',   // coluna para empilhar ícone e texto
  alignItems: 'center',      // centraliza horizontalmente
  justifyContent: 'center',  // centraliza verticalmente
  marginTop: 20,
},

errorIcon: {
  marginBottom: 12,          // espaço entre ícone e texto
},

errorText: {
  color: 'red',
  fontSize: 18,              // texto maior
  textAlign: 'center',       // centraliza o texto
  fontWeight: 'bold'
},
cardTemp: {
  color: "#fff",
  fontSize: 16,
  marginTop: 4,
  textAlign: "center",
},
headerWrapper: {
  flexDirection: "column",
  alignItems: "center",
  marginTop: 30,
  marginBottom: 20,
},
headerIcon: {
  marginVertical: 4,
  marginHorizontal: 10,
},
headerText: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#FFD700",
  textAlign: "center",
  marginTop: 8,
},
searchImageWrapper: {
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 20,
},
searchImage: {
  width: 150,
  height: 150,
},
footer: {
  alignItems: "center",
  paddingVertical: 10,
},

footerText: {
  color: "#ccc",
  fontSize: 14,
  fontStyle: "italic",
},

footerLink: {
  color: "#FFD700",
  textDecorationLine: "underline",
},
locationButton: {
  backgroundColor: "#FFD700",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
},
locationText: {
  color: "#000",
  fontSize: 16,
  fontWeight: "bold",
},
iconButton: {
  backgroundColor: "#222",
  padding: 10,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",

},
forecastCard: {
  backgroundColor: "#222",
  padding: 20,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 5,
  width: "80%",
},
forecastIcon: {
  width: 100,
  height: 100,
  marginBottom: 12,
},
cardTitle: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#FFD700",
  marginBottom: 6,
},
cardMinMax: {
  fontSize: 16,
  color: "#ccc",
  marginTop: 4,
},
errorImage: {
    width: 120,
    height: 120,
    marginVertical: 12,
    resizeMode: "contain",
  },
});
