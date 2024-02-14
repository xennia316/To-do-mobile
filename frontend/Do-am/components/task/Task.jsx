import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";

const Task = ({ iconName, task, subText, time }) => {
	return (
		<View className="flex-row h-16 bg-white  justify-between items-center my-2 border-2 border-slate-200 rounded-xl px-1 py-2">
			<FontAwesomeIcon color="#9483bf" size={20} icon={iconName} />
			<View className="w-[70%] overflow-hidden overflow-ellipsis">
				<Text className="font-semibold text-sm">{task}</Text>
				<Text className="text-gray-400 font-light text-xs">{subText}</Text>
			</View>
			<Text className="text-gray-600 text-xs text-start h-full">{time}</Text>
		</View>
	);
};

export default Task;
