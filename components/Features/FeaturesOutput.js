import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Swiper from "react-native-swiper";
import FeaturesSliderButton from "./FeaturesSliderButton";
import { COLOR } from "../../constants/colors";
import FeaturesSlide from "./FeaturesSlide";

const FeaturesOutput = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Swiper
      showsButtons={true}
      buttonWrapperStyle={styles.buttons}
      paginationStyle={{
        marginLeft: width * 0.8,
        marginBottom: height * 0.01,
      }}
      activeDotColor={COLOR.primary}
      dotColor={COLOR.gray}
      nextButton={<FeaturesSliderButton icon="arrow-forward" />}
      prevButton={<FeaturesSliderButton icon="arrow-back" />}
    >
      <FeaturesSlide />
      <FeaturesSlide />
      <FeaturesSlide />
      <FeaturesSlide />
    </Swiper>
  );
};

export default FeaturesOutput;

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "flex-start",

    backgroundColor: "transparent",
    alignItems: "flex-end",
  },
});
