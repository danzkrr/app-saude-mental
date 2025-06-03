import { View, Text, StyleSheet } from "react-native";

export default function Appointment() {
  return (
    <View style={styles.container}>
      <Text>Consultas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(249, 249, 250)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});