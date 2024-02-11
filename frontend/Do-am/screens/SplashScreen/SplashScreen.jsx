import React from "react";
import { Image, Text, View } from "react-native";
import { PrimaryButton } from "../../components";

import { useNavigation } from "@react-navigation/native";
const imageUrl = require("../../assets/images/Doam1.png");
const SplashScreen = () => {
	const navigation = useNavigation();

	const handleLogin = () => {
		navigation.navigate("Login");
	};

	const handleRegister = () => {
		navigation.navigate("SignUp");
	};
	return (
		<View className=" flex items-center justify-around h-[90vh] w-screen">
			<View className="w-11/12 flex flex-col gap-4">
				<Text className="text-lg font-semibold">welcome</Text>
				<Text className="font-light">Here you can organize</Text>
				<Text className="font-light">your life</Text>
			</View>
			<View className="w-11/12">
				<Image source={imageUrl} />
			</View>
			<View className="w-11/12 flex items-center ">
				<PrimaryButton text={"Register"} onPress={handleRegister} />
				<PrimaryButton text={"Login"} onPress={handleLogin} />
			</View>
		</View>
	);
};

export default SplashScreen;
