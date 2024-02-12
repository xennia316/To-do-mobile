import React from "react";
import { View } from "react-native";
import { Task } from "../../components";

import { faSquareCheck } from "@fortawesome/free-regular-svg-icons/faSquareCheck";

import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

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
	return (
		<View className="w-screen flex items-center">
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
			</View>
		</View>
	);
};

export default InProgress;
