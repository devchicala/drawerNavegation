import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  function handleNAvigateMain() {
    navigation.navigate('Menu')
  }

  return (
    <ImageBackground
      source={require("../../assets/luanda.jpg")}
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={require("../../assets/angola.png")} />
        <Text style={styles.title}>Conheça Angola o País grande e belo!</Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNAvigateMain}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleNAvigateMain}>
          <Text style={styles.buttonText}>Sing Up</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 30,
  },

  description: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  separator: {
    marginTop: 20,
  },

  centro: {
    alignItems: "center",
  },

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonn: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 20,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});
export default Home;
