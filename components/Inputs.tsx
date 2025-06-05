import { StyleSheet, View, TextInput } from "react-native";

type Props = {
    placeholder: string,
    value: string,
}

export default function Input({ placeholder, value }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder} 
                value={value}
                placeholderTextColor="#888"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        alignItems: 'center',
    },
    input: {
        height: 48,
        width: 300,
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1.5,
        borderColor: "#ccc",
        color: "#333",
    },
});
