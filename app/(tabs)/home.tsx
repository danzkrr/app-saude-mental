import { View, Text, StyleSheet } from "react-native";

import Header from "@/components/Header";
import BodyIcons from "@/components/BodyIcons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header theme="primary" />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.bodyTitleContainer}>
          <Text style={styles.menuText}>Menu</Text>
          <Text style={styles.showAllText}>Mostrar Tudo</Text>
        </View>
        <BodyIcons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(249, 249, 250)",
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 3,
    marginTop: 20,
  },
  bodyTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 20,
  },
  showAllText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 15,
    marginBottom: 20,
  },
});

