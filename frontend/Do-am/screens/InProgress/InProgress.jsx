import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Task } from "../../components";

import { useNavigation } from "@react-navigation/native";

import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons/faSquarePlus";

const InProgress = () => {
	const feed = [
		{
			iconName: faSpinner,
			task: "washing the car",
			subText: "I need to wash the car and clean it",
			time: "10:00AM",
		},
		{
			iconName: faSpinner,
			task: "go shopping",
			subText: "I need to buy some groceries",
			time: "11:30AM",
		},
	];

	const navigation = useNavigation();
	return (
		<View className="w-screen flex items-center h-[95%]">
			<View className="w-11/12 h-full">
				{feed.map((item, index) => {
					return (
						<Task
							iconName={item.iconName}
							task={item.task}
							subText={item.subText}
							time={item.time}
							key={index}
						/>
					);
				})}
				<TouchableOpacity
					onPress={() => navigation.navigate("AddToDo")}
					className="absolute bottom-0 right-0 h-16 w-16  flex justify-center items-center"
				>
					<FontAwesomeIcon size={48} color="#9483bf" icon={faSquarePlus} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default InProgress;
