import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
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
        animationType="fade"
        transparent={true} // <- Deixa o modal transparente
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modal}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <View style={styles.buttonContainer}>
                  <Button theme="secondary" label="Fechar" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escurecido
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 400, // Defina o tamanho desejado
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  content: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'justify'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30
  }
})
