import { StyleSheet, View, TextInput, TextInputProps, KeyboardAvoidingView } from "react-native";

type Props = {
<<<<<<< HEAD
    placeholder: string,
    value: string,
}

export default function Input({ placeholder, value }: Props) {
=======
    placeholder: string;
} & TextInputProps;

export default function Input({ placeholder, ...rest }: Props) {
>>>>>>> 32432addcedcdf61c4247b84f7825da4150d6858
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder} 
                value={value}
                placeholderTextColor="#888"
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#ddd",
        color: "#333",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
});
