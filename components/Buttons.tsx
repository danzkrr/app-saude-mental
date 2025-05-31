import { StyleSheet, View, Pressable, Text } from "react-native"

type Props = {
    label: string;
    theme?: "primary" | "secondary";
    onPress?: () => void
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme == "primary") {
        return (
            <View style={ styles.buttonContainer }>
                <Pressable
                    style={[styles.button, { backgroundColor: 'rgb(118, 181, 214)' }]} onPress={onPress}>
                    <Text style={[styles.buttonLabel, { color: 'rgb(249, 249, 250)' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    if (theme == "secondary") {
        return (
            <View style={[styles.buttonContainer, {width: 240, height: 50, borderWidth: 2, borderColor: 'rgb(0, 0, 0)', borderRadius: 30}]}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={[styles.buttonLabel, { color: 'rgb(0, 0, 0)', fontSize: 20 }]}>{label}</Text>
                </Pressable>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'rgb(0, 0, 0)',
        fontSize: 24,
        fontWeight: 'bold',
    }
});