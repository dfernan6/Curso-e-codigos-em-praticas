// src/screens/Modal.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CountryFlag from "react-native-country-flag";
import { useTranslation } from "react-i18next";

export default function ModalScreen({ navigation }: any) {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const bootstrap = async () => {
      const savedLang = await AsyncStorage.getItem("appLanguage");
      if (savedLang) {
        i18n.changeLanguage(savedLang);
        navigation.replace("Tabs");
      } else {
        setIsReady(true);
      }
    };
    bootstrap();
  }, []);

  const handleSelectLang = async (lang: string) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    await AsyncStorage.setItem("appLanguage", lang);
  };

  const handleStart = () => {
    navigation.replace("Tabs");
  };

  if (!isReady) return null;

  return (
    <View style={styles.container}>
      <View style={styles.flagsWrapper}>
        <TouchableOpacity
          style={[
            styles.flagBtn,
            selectedLang === "pt" ? styles.flagSelected : styles.flagUnselected,
          ]}
          onPress={() => handleSelectLang("pt")}
        >
          <CountryFlag isoCode="br" size={45} style={styles.flag} />
          <Text style={styles.flagLabel}>Português</Text>
          <Text style={styles.flagSubLabel}>Escolha seu idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.flagBtn,
            selectedLang === "en" ? styles.flagSelected : styles.flagUnselected,
          ]}
          onPress={() => handleSelectLang("en")}
        >
          <CountryFlag isoCode="gb" size={45} style={styles.flag} />
          <Text style={styles.flagLabel}>English</Text>
          <Text style={styles.flagSubLabel}>Choose your language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.flagBtn,
            selectedLang === "de" ? styles.flagSelected : styles.flagUnselected,
          ]}
          onPress={() => handleSelectLang("de")}
        >
          <CountryFlag isoCode="de" size={45} style={styles.flag} />
          <Text style={styles.flagLabel}>Deutsch</Text>
          <Text style={styles.flagSubLabel}>Wähle deine Sprache</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/imagens/mainSearch.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {selectedLang && (
        <>
          <Text style={styles.subtitle}>{t("introText")}</Text>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startText}>{t("start")}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center",
    backgroundColor: "#1B1D22", paddingHorizontal: 24,
  },
  flagsWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  flagBtn: {
    alignItems: "center",
    marginVertical: 12,
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 16,
    width: "66%", // ✅ reduzido para 2/3 da tela
  },
  flagSelected: {
    borderWidth: 3,
    borderColor: "#FFD700", // ✅ amarelo quando selecionado
  },
  flagUnselected: {
    borderWidth: 3,
    borderColor: "#000", // ✅ preto quando não selecionado
  },
  flag: {
    borderRadius: 8,
    overflow: "hidden",
  },
  flagLabel: {
    marginTop: 10,
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  flagSubLabel: {
    marginTop: 6,
    color: "#ccc",
    fontSize: 16,
    fontStyle: "italic",
  },
  image: {
    width: 110, // ✅ metade do tamanho anterior
    height: 110,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 6, // ✅ metade do tamanho
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startText: {
    fontSize: 9, // ✅ metade do tamanho anterior
    fontWeight: "bold",
    color: "#1B1D22",
  },
});
