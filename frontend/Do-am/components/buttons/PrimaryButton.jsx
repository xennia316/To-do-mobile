import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({ text }) => {
	return (
		<TouchableOpacity className=" flex items-center justify-center bg-primary w-11/12 h-10 rounded-xl">
			<Text className=" text-base text-white">{text}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
