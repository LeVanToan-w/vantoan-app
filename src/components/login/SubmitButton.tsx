import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
}

export default function SubmitButton({ title, onPress }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bttn} onPress={onPress}>
                <Text style={styles.titlebttn}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: 90,
    },
    bttn: {
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        borderColor: "#000",
        borderWidth: 1,
    },
    titlebttn: {
        color: "#000",
        fontSize: 16,
        fontWeight: '600',
    },
});