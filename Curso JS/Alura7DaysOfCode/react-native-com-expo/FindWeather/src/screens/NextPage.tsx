import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function NextPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Topo */}
      <Text style={styles.title}>
        Find<Text style={styles.bold}>Weather</Text>
      </Text>

      {/* Imagem central */}
      <Image
        source={{ uri: "https://openweathermap.org/img/wn/10d@4x.png" }}
        style={styles.image}
      />

      {/* Texto explicativo */}
      <Text style={styles.subtitle}>
        Selecione aqui um local e encontre o clima em tempo real
      </Text>

      {/* Botões no rodapé */}
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonLight}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonTextDark}>Home</Text>
        </Pressable>

        <Pressable
          style={styles.buttonLight}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonTextDark}>Buscar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", // fundo escuro
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#fff" },
  bold: { fontWeight: "bold", color: "#FFD700" }, // destaque em dourado
  image: { width: 200, height: 200, resizeMode: "contain", marginBottom: 20 },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#ddd", // texto claro
  },
  footer: { flexDirection: "row", justifyContent: "space-between", width: "80%" },
  buttonLight: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#fff", // botão claro
    alignItems: "center",
  },
  buttonTextDark: { color: "#111", fontSize: 16, fontWeight: "bold" }, // texto escuro
});
