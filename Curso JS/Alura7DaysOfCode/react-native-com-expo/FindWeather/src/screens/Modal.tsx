// src/screens/Modal.tsx
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
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
    <ScrollView
      style={styles.container}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
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
            <Text style={styles.startButtonText}>{t("start")}</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1D22",
    paddingHorizontal: 19,          // 4/5 of 24
  },

  flagsWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,                // 4/5 of 10
  },

  flagBtn: {
    alignItems: "center",
    marginVertical: 10,             // 4/5 of 12
    backgroundColor: "#222",
    padding: 16,                    // 4/5 of 20
    borderRadius: 13,               // 4/5 of 16
    width: "66%",                   // keep proportional width
  },

  flagSelected: {
    borderWidth: 3,
    borderColor: "#FFD700",
  },

  flagUnselected: {
    borderWidth: 3,
    borderColor: "#000",
  },

  flag: {
    borderRadius: 6,                // 4/5 of 8
    overflow: "hidden",
  },

  flagLabel: {
    marginTop: 8,                    // 4/5 of 10
    color: "#FFD700",
    fontSize: 18,                    // 4/5 of 22
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  flagSubLabel: {
    marginTop: 5,                    // 4/5 of 6
    color: "#ccc",
    fontSize: 13,                    // 4/5 of 16
    fontStyle: "italic",
  },

  image: {
    width: 88,                       // 4/5 of 110
    height: 88,                      // 4/5 of 110
    marginBottom: 8,                  // 4/5 of 10
    resizeMode: "contain",
  },

  subtitle: {
    fontSize: 13,                    // 4/5 of 16
    color: "#ccc",
    textAlign: "center",
    marginBottom: 8,                  // 4/5 of 10
  },

  startButton: {
  backgroundColor: "#FFD700",   // keep your color
  paddingVertical: 16,          // increase vertical padding
  paddingHorizontal: 32,        // increase horizontal padding
  borderRadius: 12,             // rounded corners
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  width: "80%",                 // make it wider
  alignSelf: "center",          // center horizontally
},
startButtonText: {
  fontSize: 20,                 // bigger text
  fontWeight: "bold",
  color: "#000",
},
});
