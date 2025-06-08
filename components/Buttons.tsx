import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {
    label: string;
    theme?: "primary" | "secondary" | "tertiary";
    onPress?: () => void;
};

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
