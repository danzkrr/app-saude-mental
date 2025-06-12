import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BodyIcons() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="heart-pulse" size={40} color="white" />
                        <Text style={styles.text}>Saúde Física</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="brain" size={40} color="white" />
                        <Text style={styles.text}>Saúde Mental</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="meditation" size={40} color="white" />
                        <Text style={styles.text}>Meditar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="cloud" size={40} color="white" />
                        <Text style={styles.text}>Ansiedade</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="puzzle" size={40} color="white" />
                        <Text style={styles.text}>Depressão</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxIcon}>
                        <MaterialCommunityIcons name="star-face" size={40} color="white" />
                        <Text style={styles.text}>Alegria</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: 20,
    },
    boxIcon: {
        width: 110,
        height: 110,
        backgroundColor: "rgb(118, 181, 214)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        color: "rgb(249, 249, 250)",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});

