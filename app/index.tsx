import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image}/>
            <Text style={styles.text}>Você é um profissional da saúde mental?</Text>
            
            <Button theme="primary" label="SIM" onPress={() => router.navigate("/(professional)/login")} />

            <View style={styles.buttonContainer}>
                <Button theme="secondary" label="Não, sou um paciente" onPress={() => router.navigate("/(common_user)/login")} />
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
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 5
    },
    text: {
        color: "rgb(0, 0, 0)",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    image: {
        width: 280,
        height: 280
    }
});