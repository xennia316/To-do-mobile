import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({ text }) => {
	return (
		<TouchableOpacity className=" flex items-center justify-center bg-primary w-full h-10  rounded-2xl my-2">
			<Text className=" text-base text-white">{text}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
