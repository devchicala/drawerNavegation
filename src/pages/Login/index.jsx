import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


const Login = () => {
    const navigation = useNavigation();

    function handleNavigationBack() {
      navigation.goBack();
    }
  
      return (
          <View style={styles.container}>
              <RectButton onPress={handleNavigationBack}>
                  <Text>Voltar</Text>
              </RectButton>
          </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    }
});

export default Login;