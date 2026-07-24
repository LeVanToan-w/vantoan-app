import { StyleSheet, View, Image } from "react-native";

import Title from "../components/login/Title";
import InputKey from "../components/login/InputKey";
import SubmitButton from "../components/login/SubmitButton";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";


const logo = require('../assets/logo.png');

export default function LoginScreen() {
  const [key, setKey] = useState('');

  const handlePress = () => {
    if (key == "vantoan") {
      console.log("True");
    } else {
      console.log("False");
    };
  };
  return (
    <LinearGradient 
      colors={['rgba(156,252,248,1)', 'rgba(110,123,251,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
      }}
    >
    <View style={styles.screen}>
      <Animated.View 
      entering={FadeInDown.duration(800).springify()}
      exiting={FadeInUp.duration(400)}
      >
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Title />
        <InputKey value={key} onChangeText={setKey}/>
        <SubmitButton title="Submit" onPress={handlePress} />
      </View>
      </Animated.View>
    </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 250,
    height: 320,
    alignItems: 'center',
    backgroundColor: '#FFFACD',
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    paddingTop: 0,
  }
})