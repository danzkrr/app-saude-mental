import { StyleSheet, View, Pressable, Text, Alert } from "react-native";

type Props = {
    label: string;
    theme?: "primary" | "secondary" | "tertiary";
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme == "primary") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[
                        styles.button,
                        { backgroundColor: "rgb(118, 181, 214)" },
                    ]}
                    onPress={onPress}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            { color: "rgb(249, 249, 250)" },
                        ]}
                    >
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
    if (theme == "secondary") {
        return (
            <View style={styles.buttonContainerSecondary}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text
                        style={[
                            styles.buttonLabel,
                            { color: "rgb(0, 0, 0)", fontSize: 20 },
                        ]}
                    >
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
    if (theme == "tertiary") {
        return (
            <View style={styles.buttonContainerTertiary}>
                <Pressable
                    style={[
                        styles.button,
                        {
                            alignItems: "baseline",
                            justifyContent: "space-around",
                        },
                    ]}
                    onPress={onPress}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            {
                                color: "rgb(0, 0, 0)",
                                fontSize: 20,
                                textDecorationLine: "underline",
                            },
                        ]}
                    >
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    buttonContainerSecondary: {
        width: 240,
        height: 50,
        borderWidth: 2,
        borderRadius: 30,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    buttonContainerTertiary: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderRadius: 30,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonLabel: {
        color: "rgb(0, 0, 0)",
        fontSize: 24,
        fontWeight: "bold",
    },
});
