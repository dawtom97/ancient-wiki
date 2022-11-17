import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Icon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
