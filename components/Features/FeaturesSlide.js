import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { COLOR } from "../../constants/colors";

const FeaturesSlide = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, height < 400 && styles.landscapeContainer]}>
      <View
        style={[
          styles.imageBox,
          { height: height * 0.45 },
          height < 400 && styles.landscapeImageBox,
        ]}
      >
        <Image source={require("../../assets/img3.jpg")} style={styles.image} />
      </View>
      <View
        style={[styles.contentBox, height < 400 && styles.landscapeContentBox]}
      >
        <Text style={styles.contentTitle}>Salve Advena</Text>
        <Text style={styles.contentDesc}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When i went to school, they asked mewhat I wanted to
          be when I grew up
        </Text>
      </View>
    </View>
  );
};

export default FeaturesSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  landscapeContainer: {
    flexDirection: "row-reverse",
    marginTop: 30,
  },

  imageBox: {
    marginBottom: 30,
  },
  landscapeImageBox: {
    width: "50%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopEndRadius: 80,
    borderBottomLeftRadius: 80,
  },
  contentBox: {},
  landscapeContentBox: {
    width: "50%",
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 15,
    color: COLOR.primary,
  },
  contentDesc: {
    fontSize: 16,
    fontWeight: "300",
    color: "#878f99",
  },
});
