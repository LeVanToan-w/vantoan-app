import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

interface Props {
    title: string;
    onPress: () => void;
}

export default function InputFile({title, onPress}: Props) {
    const UpFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ 
            type: 'ini',
         });
        
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.bttn} onPress={UpFile}>
                <Text style={styles.titlebttn}>{title}</Text>
            </TouchableOpacity>
        </View>       
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: 150,
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
})