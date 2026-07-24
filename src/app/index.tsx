import { StyleSheet, View } from "react-native";

import Title from "../components/login/Title";
import InputKey from "../components/login/InputKey";
import SubmitButton from "../components/login/SubmitButton";
import React, { useState } from "react";

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
    <View style={styles.screen}>
      <View style={styles.container}>
        <Title />
        <InputKey value={key} onChangeText={setKey}/>
        <SubmitButton title="Submit" onPress={handlePress} />
      </View>
    </View>
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
    height: 300,
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
  },
})