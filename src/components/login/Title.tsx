import { StyleSheet, Text } from "react-native";

export default function Title() {
    return (
        <Text style={styles.title}>Vawn Toan App</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
    },
})