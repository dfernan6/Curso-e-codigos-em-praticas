import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

      setWeather(data);
      await AsyncStorage.setItem("city", city);
      navigation.navigate("Home" as never);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <Text style={styles.headerText}>{t("search.startText")}</Text>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          placeholder={t("search.placeholder")}
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity onPress={handleSearch}>
          <MaterialCommunityIcons name="magnify" size={28} color="#FFD700" />
        </TouchableOpacity>
      </View>
      {/* Search Image */}
      <View style={styles.searchImageWrapper}>
        <Image
          source={require("../../assets/imagens/search.png")}
          style={styles.searchImage}
          resizeMode="contain"
        />
      </View>

      {/* If error → show ONLY error block */}
      {error ? (
        <View style={styles.errorWrapper}>
          <MaterialCommunityIcons name="alert-circle-outline" size={80} color="red" style={styles.errorIcon} />
          <Text style={styles.errorText}>{t("search.error")}</Text>
        </View>
      ) : (
        <>
          {/* Header icons */}
          <View style={styles.headerWrapper}>
          </View>
    
        </>
      )}
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
},
});
