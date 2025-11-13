import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://openweathermap.org/img/wn/11d@4x.png" }}
        style={styles.image}
      />
      <Text style={styles.title}>Descubra o Clima de sua Cidade</Text>
      <Text style={styles.subtitle}>
        Com o <Text style={styles.bold}>FindWeather</Text> nunca ficou tão fácil
        ter a previsão do tempo na palma da sua mão
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#A9A9A9" : "#333333" }, // cinza claro no hover, cinza escuro normal
        ]}
        onPress={() => navigation.navigate("NextPage")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  image: { width: 200, height: 200, resizeMode: "contain" },
  title: { fontFamily: "sans-serif", fontSize: 24, marginVertical: 10, textAlign: "center" },
  subtitle: { fontFamily: "sans-serif", fontSize: 16, textAlign: "center", marginBottom: 20 },
  bold: { fontFamily: "sans-serif", fontWeight: "bold" },
  button: {
    width: 328,
    height: 54,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});