import React from "react";
import { View } from "react-native";
import { Task } from "../../components";

import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus";

const ToDo = () => {
	const feed = [
		{
			iconName: faSquarePlus,
			task: "wash car",
			subText: "I need to wash the car and clean it",
			time: "10:00AM",
		},
		{
			iconName: faSquarePlus,
			task: "go shopping",
			subText: "I need to buy some groceries",
			time: "11:30AM",
		},
		{
			iconName: faSquarePlus,
			task: "visit parents",
			subText: "Go back home for christmas",
			time: "11:00AM",
		},
		{
			iconName: faSquarePlus,
			task: "do laundry",
			subText: "I need to wash tmy clothes and clean it",
			time: "12:00AM",
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

export default ToDo;
