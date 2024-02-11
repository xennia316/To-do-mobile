import React from "react";
import { Image, Text, View } from "react-native";
import { PrimaryButton } from "../../components";

const imageUrl = require("../../assets/images/Doam1.png");
const SignUp = () => {
	return (
		<View className=" flex items-center justify-center w-screen h-screen py-14">
			<View className="w-11/12 h-1/4 flex flex-col gap-4">
				<Text className="text-lg font-semibold">welcome</Text>
				<Text className="font-light">Here you can organize</Text>
				<Text className="font-light">your life</Text>
			</View>
			<View className="w-11/12 h-1/2">
				<Image source={imageUrl} />
			</View>
			<View className="w-11/12 h-1/4 flex items-center justify-end ">
				<PrimaryButton text={"Register"} />
				<PrimaryButton text={"Login"} />
			</View>
		</View>
	);
};

export default SignUp;
