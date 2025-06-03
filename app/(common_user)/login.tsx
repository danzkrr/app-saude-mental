import { View, Text, StyleSheet, Alert, Image } from "react-native";
import { Link, useRouter } from "expo-router";

import Input from "@/components/Inputs";
import Button from "@/components/Buttons";

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image}/>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Login</Text>

                <Input placeholder="Digite seu email..." />
                <Input placeholder="Digite sua senha..." />

                <Button theme="primary" label="Entrar" onPress={() => router.navigate("/(tabs)/home")} />

                <Link href="/register" style={styles.link}>
                    Não possuo login
                </Link>
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
    },
    image: {
        width: 280,
        height: 280
    }
});