import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtons = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${containerStyles} bg-blue-500 rounded-xl justify-center items-center p-3 ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      <Text className={`${textStyles} text-white font-psemibold text-lg  `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
