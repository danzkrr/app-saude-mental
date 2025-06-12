import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";

import Animated from "react-native-reanimated";

import Button from "@/components/Buttons";
import Input from "@/components/Inputs";
import { useUser } from "@/components/UserContext";

const { height: screenHeight } = Dimensions.get("window");

export default function Register() {
    const router = useRouter();
    const { userName, setUserName } = useUser();
    const keyboard = useAnimatedKeyboard();

    const animatedStyle = useAnimatedStyle(() => {
        const keyboardOffset = Math.max(keyboard.height.value - screenHeight * 0.15, 0);
        return {
            transform: [{ translateY: -keyboardOffset }],
        };
    });

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image} />

                <View>
                    <Text style={styles.text}>Cadastrar-se</Text>

                    <Input placeholder="Digite seu nome..." value={userName} onChangeText={setUserName} />
                    <Input placeholder="Digite seu email..." />
                    <Input placeholder="Digite sua senha..." />

                    <Button theme="primary" label="Entrar" onPress={() => router.navigate("/(tabs)/home")} />
                </View>

            </Animated.View >
        </TouchableWithoutFeedback>
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