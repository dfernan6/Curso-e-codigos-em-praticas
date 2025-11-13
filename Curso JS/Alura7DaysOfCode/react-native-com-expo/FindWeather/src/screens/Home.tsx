import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button/styles";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }: any) {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#111" }]}>
      {/* Imagem centralizada */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://openweathermap.org/img/wn/11d@4x.png" }}
          style={styles.image}
        />
      </View>

      <Text style={[globalStyles.title, styles.title]}>
        Descubra o Clima de sua Cidade
      </Text>

      <Text style={[globalStyles.subtitle, styles.subtitle]}>
        Com o <Text style={{ fontWeight: "bold", color: "#FFD700" }}>FindWeather</Text> nunca foi tão fácil
        ter a previsão do tempo na palma da sua mão
      </Text>

      {/* Botão centralizado com marginRight */}
      <View style={styles.buttonWrapper}>
        <Button
          backgroundColor="#fff"
          borderColor="#fff"
          borderRadius={18}
          height={64}
          onPress={() => navigation.navigate("NextPage")}
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 20,
    marginBottom: 60,
    textAlign: "center",
  },
  buttonWrapper: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  buttonText: {
    color: "#111",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
