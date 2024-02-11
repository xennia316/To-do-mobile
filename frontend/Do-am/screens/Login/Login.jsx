import React from "react";
import { Image, Text, View } from "react-native";
import { PrimaryButton, PrimaryInput } from "../../components";

const imageUrl = require("../../assets/images/Doam3.png");

const Login = () => {
	return (
		<View className=" flex items-center justify-around w-screen h-screen py-14">
			<View className="w-11/12 flex flex-col gap-4">
				<Text className="text-lg font-semibold">Hello there !</Text>
				<Text className="font-light">Log in !</Text>
			</View>
			<View className="w-11/12 ">
				<Image
					source={imageUrl}
					className="w-full border-b-2 border-gray-200"
				/>
			</View>
			<View className="w-11/12">
				<PrimaryInput placeholder={"Enter your name"} />
				<PrimaryInput placeholder={"Enter password"} />
			</View>
			<View className="w-11/12 flex items-center justify-end ">
				<PrimaryButton text={"Login"} />
			</View>
		</View>
	);
};

export default Login;
