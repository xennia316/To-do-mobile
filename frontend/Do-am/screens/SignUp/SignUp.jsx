import React from "react";
import { Image, Text, View } from "react-native";
import { PrimaryInput, PrimaryButton } from "../../components";

const imageUrl = require("../../assets/images/Doam2.png");

const SignUp = () => {
	return (
		<View className=" flex items-center w-screen justify-around h-[85vh] ">
			<View className="w-11/12 flex flex-col gap-4">
				<Text className="text-lg font-semibold">Hello there !</Text>
				<Text className="font-light">Log in !</Text>
			</View>
			<View className="w-11/12 ">
				<Image source={imageUrl} className="w-full" />
			</View>
			<View className="w-11/12 ">
				<PrimaryInput placeholder={"Enter your name"} />
				<PrimaryInput placeholder={"4 letters or not"} />
				<PrimaryInput placeholder={"8 characters or more"} />
			</View>
			<View className="w-11/12 flex items-center justify-end ">
				<PrimaryButton text={"Register"} />
			</View>
		</View>
	);
};

export default SignUp;
