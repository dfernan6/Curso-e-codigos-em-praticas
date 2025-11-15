import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import "./src/utils/i18n";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag"; // ✅ use flag library
import Home from "./src/screens/Home";
import NextPage from "./src/screens/NextPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      id="MainTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === t("Home")) {
            iconName = "home";
          } else if (route.name === t("Search")) {
            iconName = "search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#888",
        headerShown: false,
      })}
    >
      <Tab.Screen 
  name="Home" 
  component={Home} 
  options={{ title: t("home") }} 
/>
<Tab.Screen 
  name="Search" 
  component={NextPage} 
  options={{ title: t("search") }} 
/>
    </Tab.Navigator>
  );
}

export default function App() {
  const { i18n, t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator id="MainStack" initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerTitle: t("language"), // ✅ dynamic translation
            headerRight: () => (
              <View style={styles.flagsRow}>
                <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
                  <CountryFlag isoCode="gb" size={24} style={styles.flag} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => i18n.changeLanguage("pt")}>
                  <CountryFlag isoCode="br" size={24} style={styles.flag} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => i18n.changeLanguage("de")}>
                  <CountryFlag isoCode="de" size={24} style={styles.flag} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flagsRow: {
    flexDirection: "row",
    marginRight: 10,
  },
  flag: {
    marginHorizontal: 6, // ✅ adds spacing between flags
  }
});
