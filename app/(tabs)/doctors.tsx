import { View, Text, StyleSheet } from "react-native";

export default function Doctors() {
  return (
    <View style={styles.container}>
      <Text>Doutores</Text>
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