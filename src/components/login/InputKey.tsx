import { StyleSheet, TextInput, View } from "react-native";

interface InputKeyProps {
    value: string;
    onChangeText: (text: string) => void;
}

export default function InputPassword({value, onChangeText }: InputKeyProps) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.key} placeholder="Input Your Key" secureTextEntry={true} value={value} onChangeText={onChangeText}></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
    },
    key: {
        width: 200,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
})