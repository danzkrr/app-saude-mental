import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

import Header from "@/components/Header";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header theme="secondary" />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações Gerais</Text>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Ionicons name="settings-sharp" size={20} color="#333" />
              <Text style={styles.itemText}>Modo</Text>
            </View>
            <Switch value={false} />
          </View>

          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
              <Feather name="key" size={20} color="#333" />
              <Text style={styles.itemText}>Mudar Senha</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
              <MaterialIcons name="language" size={20} color="#333" />
              <Text style={styles.itemText}>Língua</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informação</Text>

          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
              <Ionicons name="phone-portrait-outline" size={20} color="#333" />
              <Text style={styles.itemText}>Sobre o App</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
              <Feather name="file-text" size={20} color="#333" />
              <Text style={styles.itemText}>Termos & Condições</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
              <Feather name="shield" size={20} color="#333" />
              <Text style={styles.itemText}>Políticas de privacidade</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FA",
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 3,
    marginTop: 80,
    paddingHorizontal: 20
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#888",
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

