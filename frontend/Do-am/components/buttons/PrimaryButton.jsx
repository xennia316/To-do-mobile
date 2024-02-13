import React from "react";
import { Text, TouchableOpacity } from "react-native";

const PrimaryButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity
			className=" flex items-center justify-center bg-primary w-full h-10  rounded-lg my-2"
			onPress={onPress}
		>
			<Text className=" text-base text-white">{text}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
