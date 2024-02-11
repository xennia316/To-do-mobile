import React from "react";
import { Image, Text, View } from "react-native";
import { PrimaryButton, PrimaryInput } from "../../components";
import { useNavigation } from "@react-navigation/native";
const imageUrl = require("../../assets/images/Doam3.png");

const Login = () => {
	const navigation = useNavigation();

	onHandlePress = () => {
		navigation.navigate("SignUp");
	};
	return (
		<View className=" flex items-center w-screen justify-around h-[85vh]">
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
				<PrimaryButton
					text={"Login"}
					navigation={navigation}
					onPress={onHandlePress}
				/>
			</View>
		</View>
	);
};

export default Login;
