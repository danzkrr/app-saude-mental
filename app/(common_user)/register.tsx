import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import {useState} from "react"

import Button from "@/components/Buttons";
import Input from "@/components/Inputs";
import { useUser } from "@/components/UserContext";

export default function Register() {
    const router = useRouter();
<<<<<<< HEAD
    const [username, setUsername] = useState('');
=======
    const { userName, setUserName } = useUser();
>>>>>>> 32432addcedcdf61c4247b84f7825da4150d6858

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image}/>

            <View>
                <Text style={styles.text}>Cadastrar-se</Text>

<<<<<<< HEAD
                <Input placeholder="Digite seu nome..." value = {username} onChangeText={setUsername}/>
                <Input placeholder="Digite seu email..." value = {''}/>
                <Input placeholder="Digite sua senha..."value ={''} />
=======
                <Input placeholder="Digite seu nome..." value={userName} onChangeText={setUserName} />
                <Input placeholder="Digite seu email..." />
                <Input placeholder="Digite sua senha..." />
>>>>>>> 32432addcedcdf61c4247b84f7825da4150d6858

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