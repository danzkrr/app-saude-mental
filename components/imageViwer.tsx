import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "react-native";

type Props = {
        imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} style={styles.image}/>
}

const styles = StyleSheet.create({
        image: {
                width: 280,
                height: 280,
                borderRadius: 18,
        }
});