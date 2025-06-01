import { View, Text, StyleSheet, Modal } from "react-native";
import { useState } from "react";

import Button from "@/components/Buttons";

interface MyModalProps {
  title: string;
  content: string;
}

export default function MyModal({ title, content }: MyModalProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button theme="tertiary" label="Ajuda" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>

          <View style={styles.buttonContainer}>
            <Button theme="secondary" label="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30
  }
});
