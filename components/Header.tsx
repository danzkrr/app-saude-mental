import { View, Text, StyleSheet, Image } from "react-native";

import SearchBar from "@/components/SearchBar";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.profile}>
                <Image source={require("@/assets/images/Samurai Girl.jpg")} style={styles.image}/>
                <View style={styles.profileInfo}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "rgb(249, 249, 250)" }}>Bem vindo!</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "rgb(249, 249, 250)" }}>[Seu nome]</Text>
                </View>
            </View>
            
            <View style={styles.searchBar}>
                <SearchBar onSearch={() => {}} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgb(118, 181, 214)",
        height: 200,
        width: "100%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        top: 20,
        left: 10
    },
    profileInfo: {
        marginLeft: 20
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

