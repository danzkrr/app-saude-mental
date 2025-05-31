import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Buttons";
import ImageViewer from "@/components/imageViwer";

const PlaceholderImage = require("../assets/images/leelel_logo.png");

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={PlaceholderImage} />
            <Text style={styles.text}>Você é um profissional da saúde mental?</Text>
            
            <Button theme="primary" label="SIM" onPress={() => router.navigate("/(professional)/login")} />

            <View style={styles.buttonContainer}>
                <Button theme="secondary" label="Não, sou um paciente" onPress={() => router.navigate("/(tabs)/home")} />
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
    }
});