import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {
    label: string;
    theme?: "primary" | "secondary" | "tertiary";
    onPress?: () => void;
};

<<<<<<< HEAD
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
                                color: "rgb(3, 4, 12)",
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
=======
export default function Button({ label, theme = "primary", onPress }: Props) {
    const getButtonStyle = () => {
        switch (theme) {
            case "primary":
                return [styles.button, styles.primaryButton];
            case "secondary":
                return [styles.button, styles.secondaryButton];
            case "tertiary":
                return [styles.tertiaryButton];
            default:
                return styles.button;
        }
    };

    const getLabelStyle = () => {
        switch (theme) {
            case "primary":
                return [styles.buttonLabel, { color: "rgb(249, 249, 250)" }];
            case "secondary":
                return [styles.buttonLabel, styles.secondaryLabel];
            case "tertiary":
                return [styles.buttonLabel, styles.tertiaryLabel];
            default:
                return styles.buttonLabel;
        }
    };

    return (
        <View style={theme === "tertiary" ? styles.tertiaryContainer : styles.buttonWrapper}>
            <TouchableOpacity
                style={getButtonStyle()}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Text style={getLabelStyle()}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
>>>>>>> 32432addcedcdf61c4247b84f7825da4150d6858
}

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderRadius: 30,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    primaryButton: {
        backgroundColor: "rgb(118, 181, 214)",
    },
    secondaryButton: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#ccc",
        height: 50,
        width: 240,
    },
    tertiaryContainer: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    tertiaryButton: {
        backgroundColor: "transparent",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    buttonLabel: {
        fontSize: 24,
        fontWeight: "bold",
    },
    secondaryLabel: {
        fontSize: 20,
        color: "#000",
    },
    tertiaryLabel: {
        fontSize: 20,
        color: "#000",
        textDecorationLine: "underline",
    },
});
