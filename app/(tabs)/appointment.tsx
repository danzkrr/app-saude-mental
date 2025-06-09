import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const PRIMARY_BLUE = "rgb(118, 181, 214)";
const BACKGROUND_COLOR = "rgb(249, 249, 250)";

export default function Appointment() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agendar Consulta</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.card}>
          <Text style={styles.label}>Escolha a duração:</Text>
          <View style={styles.durationOptions}>
            {["15 min", "30 min", "1 hora"].map((label, i) => (
              <TouchableOpacity key={i} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Selecione o horário:</Text>
          <View style={styles.timeOptions}>
            {["15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45"].map((time, i) => (
              <TouchableOpacity key={i} style={styles.buttonSmall} activeOpacity={0.7}>
                <Text style={styles.buttonText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    height: 120,
    backgroundColor: PRIMARY_BLUE,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: BACKGROUND_COLOR,
    marginTop: 32,
  },
  body: {
    padding: 20,
  },
  card: {
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
    borderLeftColor: PRIMARY_BLUE,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: PRIMARY_BLUE,
  },
  durationOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  timeOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonSmall: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 10,
    width: "30%",
    alignItems: "center",
    marginRight: 8,
    marginTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
