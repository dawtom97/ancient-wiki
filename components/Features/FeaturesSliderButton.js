import React from "react";
import { View } from "react-native";
import { COLOR } from "../../constants/colors";
import Icon from "../ui/Icon";

const FeaturesSliderButton = ({ icon }) => {
  return (
    <View
      style={{
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        backgroundColor: COLOR.primary,
        marginLeft: 10,
      }}
    >
      <Icon name={icon} size={22} color="#fff" />
    </View>
  );
};

export default FeaturesSliderButton;
