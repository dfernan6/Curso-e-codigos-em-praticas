import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
  cod: number;
}

export default function NextPage() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleSearch = async () => {
    setError(false);
    setWeather(null);

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

      setWeather(data);
      await AsyncStorage.setItem("city", city);

      // ✅ Navigate back to Home after saving city
      navigation.navigate("Home" as never);

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
        placeholder={t('search.placeholder')} // translated placeholder
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
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
          }}
          style={styles.image}
        />
      </View>
    )}

    {/* Resultado */}
    {error && (
      <Text style={styles.errorText}>
        {t('search.error', { city })} 
        {/* Example translation key: "Oppps! Desculpe cidade não encontrada: {{city}}" */}
      </Text>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 20 },
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
  errorText: {
    color: "#ff4444",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
