import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import {useState} from "react"

import Input from "@/components/Inputs";
import Button from "@/components/Buttons";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image}/>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Cadastrar-se</Text>

                <Input placeholder="Digite seu nome..." value = {username} onChangeText={setUsername}/>
                <Input placeholder="Digite seu email..." value = {''}/>
                <Input placeholder="Digite sua senha..."value ={''} />

                <Button theme="primary" label="Entrar" onPress={() => router.navigate("/(tabs)/home")} />
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