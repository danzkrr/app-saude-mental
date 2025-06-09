import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const doctors = [
  {
    id: "1",
    name: "Dr. Wagner",
    specialty: "Psicólogo Clínico",
    image: "https://robohash.org/joao.png?size=100x100", // Alterado para robohash
  },
  {
    id: "2",
    name: "Dr. Daniel",
    specialty: "Psiquiatra",
    image: "https://robohash.org/maria.png?size=100x100",
  },
  {
    id: "3",
    name: "Dr. Jucelande",
    specialty: "Terapeuta Ocupacional",
    image: "https://robohash.org/pedro.png?size=100x100",
  },
  {
    id: "4",
    name: "Dra. Débora Garcia",
    specialty: "Psicanalista",
    image: "https://robohash.org/ana.png?size=100x100",
  },
  {
    id: "5",
    name: "Dr. Pedro Lucas",
    specialty: "Neurologista",
    image: "https://robohash.org/lucas.png?size=100x100",
  },
];

export default function Doctors() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nossos Doutores</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardTouchable} activeOpacity={0.7}>
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.specialty}>{item.specialty}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 250)',
  },
  header: {
    height: 120,
    backgroundColor: "rgb(118, 181, 214)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 16,
    textAlign: "center",
    color: "rgb(249, 249, 250)",
  },
  cardTouchable: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 6,
    borderLeftColor: "rgb(118, 181, 214)",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
  },
  info: {
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  specialty: {
    fontSize: 14,
    color: "#4B5563",
  },
});
