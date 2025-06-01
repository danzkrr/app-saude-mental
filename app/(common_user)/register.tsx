import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Input from "@/components/Inputs";
import Button from "@/components/Buttons";
import ImageViewer from "@/components/imageViwer";

const PlaceholderImage = require("@/assets/images/leelel_logo.png");

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={PlaceholderImage} />

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Cadastrar-se</Text>

                <Input placeholder="Digite seu nome..." />
                <Input placeholder="Digite seu email..." />
                <Input placeholder="Digite sua senha..." />

                <Button theme="primary" label="Entrar" onPress={() => router.back()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 249, 250)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    },
    inputContainer: {
        flex: 1
    },
    text: {
        color: "rgb(0, 0, 0)",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    link: {
        color: "rgb(0, 0, 0)",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline'
    }
});