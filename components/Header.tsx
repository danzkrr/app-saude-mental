import { View, Text, StyleSheet, Image } from "react-native";

import SearchBar from "@/components/SearchBar";

import { useUser } from "./UserContext";

type Props = {
    theme?: "primary" | "secondary"
};

export default function Header({ theme }: Props) {
    const { userName } = useUser();
    console.log("Nome no header:", userName);

    /* Tema Primário */
    if (theme == "primary") {
        return (
            <View style={styles.headerPrimary}>
                <View style={styles.profilePrimary}>
                    <Image source={require("@/assets/images/Samurai Girl.jpg")} style={styles.image} />
                    <View style={styles.profileInfoPrimary}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "rgb(249, 249, 250)" }}>Bem vindo</Text>

                        {userName ? (
                            <Text style={{ fontWeight: "bold", fontSize: 16, color: "rgb(249, 249, 250)" }}>{userName}</Text>
                        ) : (
                            <Text style={{ fontWeight: "bold", fontSize: 16, color: "rgb(249, 249, 250)" }}>Seu nome</Text>
                        )}

                    </View>
                </View>

                <View style={styles.searchBar}>
                    <SearchBar onSearch={() => { }} />
                </View>
            </View>
        );
    }

    /* Tema Secundário */
    if (theme == "secondary") {
        return (
            <View style={styles.headerSecondary}>
                <View style={styles.profileSecondary}>
                    <Image source={require("@/assets/images/Samurai Girl.jpg")} style={styles.image} />
                    <View style={styles.profileInfoSecondary}>
                        {userName ? (
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "rgb(249, 249, 250)" }}>{userName}</Text>
                        ) : (
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "rgb(249, 249, 250)" }}>Seu nome</Text>
                        )}

                        <Text style={{ fontWeight: "bold", fontSize: 16, color: "rgb(249, 249, 250)" }}>seuemail@email.com</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerPrimary: {
        backgroundColor: "rgb(118, 181, 214)",
        height: 200,
        width: "100%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
    },
    headerSecondary: {
        backgroundColor: "rgb(118, 181, 214)",
        height: 200,
        width: "100%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    profilePrimary: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        top: 20,
        left: 10
    },
    profileSecondary: {
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        top: 20,
    },
    profileInfoPrimary: {
        marginLeft: 20
    },
    profileInfoSecondary: {
        alignItems: "center",
        justifyContent: "center"
    },
    searchBar: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30
    }
});

