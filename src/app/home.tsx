import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Title from "../components/home/Tiltle_home";
import UpFile from "../components/home/InputFile";
import Run from "../components/home/RunButton";

export default function HomeScreen() {
    const run = () => {}

    return (
        <View style={styles.container}>
            <Title />
            <UpFile title="Upload File" onPress={() => {}} />
            <Run title="Run" onPress={run} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
    }
})