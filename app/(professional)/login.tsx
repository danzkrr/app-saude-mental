import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";

import Animated from "react-native-reanimated";

import Input from "@/components/Inputs";
import Button from "@/components/Buttons";
import Modal from "@/components/Modal";

const { height: screenHeight } = Dimensions.get("window");

export default function Login() {
    const router = useRouter();
    const keyboard = useAnimatedKeyboard();

    const animatedStyle = useAnimatedStyle(() => {
        const keyboardOffset = Math.max(keyboard.height.value - screenHeight * 0.15, 0);
        return {
            transform: [{ translateY: -keyboardOffset }],
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image} />

                <View>
                    <Text style={styles.text}>Login</Text>

                    <Input placeholder="Digite seu código..." />
                    <Input placeholder="Digite sua senha..." />

                    <Button theme="primary" label="Entrar" onPress={() => router.navigate("/(tabs)/home")} />

                    <Modal title="Ajuda" content="Se você ainda não possui um código, será necessário entrar em contato com a equipe responsável pelo seu cadastro. Normalmente, o código é fornecido diretamente pelos desenvolvedores ou administradores do sistema.

Entre em contato com seu supervisor, gerente ou com o time de desenvolvimento para solicitar seu código de acesso. Eles irão validar suas informações e fornecer os dados necessários para ativação.

Este processo ajuda a garantir que apenas profissionais autorizados tenham acesso ao sistema." />
                </View>
            </Animated.View>
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
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 5
    },
    image: {
        width: 280,
        height: 280
    }
});