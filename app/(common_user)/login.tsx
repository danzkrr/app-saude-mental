import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";

import Animated from "react-native-reanimated";

import Input from "@/components/Inputs";
import Button from "@/components/Buttons";

export default function Login() {
    const router = useRouter();
    const keyboard = useAnimatedKeyboard();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -keyboard.height.value }],
    }));

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <View style={styles.container}>
                    <Image source={require("@/assets/images/leelel_logo.png")} style={styles.image} />

                    <View>
                        <Text style={styles.text}>Login</Text>

                        <Input placeholder="Digite seu email..." />
                        <Input placeholder="Digite sua senha..." />

                        <Button theme="primary" label="Entrar" onPress={() => router.navigate("/(tabs)/home")} />
                        <Button theme="tertiary" label="Cadastrar-se" onPress={() => router.navigate("/register")} />
                    </View>
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
    image: {
        width: 280,
        height: 280,
        resizeMode: 'contain'
    }
});
