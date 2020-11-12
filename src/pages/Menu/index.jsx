import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

const Menu = () => {
  const navigation = useNavigation();

  function handleNAvigationBack() {
    navigation.goBack();
  }

  const renderDrawer = () => {
    return (
      <View>
        <Text>I am in the drawer!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNAvigationBack}>
        <Icon name="arrow-left" size={20} color="" />
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});

export default Menu;
