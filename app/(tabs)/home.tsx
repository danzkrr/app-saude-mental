import { Text, View, StyleSheet } from "react-native";

import Button from "@/components/Buttons";
import ImageViewer from "@/components/imageViwer";

const PlaceholderImage = require("../../assets/images/Samurai Girl.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma imagem"/>
        <Button label="Use essa imagem"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  }
});