import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { PrimaryButton, PrimaryInput } from "../../components";

const AddToDo = () => {
	const [index, setIndex] = useState(0);

	const onClick = (key) => {
		setIndex(key);
	};

	return (
		<View className="flex justify-end items-center h-[100%]">
			<View className="bg-[#f6edff] max-h-3/5 w-full p-4 rounded-t-xl bottom-0 flex items-center">
				<View className="w-11/12">
					<Text className="text-primary opacity-100 font-semibold">
						ADDING A TASK
					</Text>
					<Text className="text-xs font-semibold mt-4">Task Title</Text>
					<PrimaryInput />
					<Text className="text-xs font-semibold mt-4">Task Description</Text>

					<TextInput
						className="w-full h-44 p-2 border-t-2 border-r-2 border-l-2 border-b-2 border-primary my-2 rounded-sm"
						multiline={true}
						numberOfLines={5}
					/>
					<View className="flex-row gap-x-4 items-center my-8">
						<Text>Add to</Text>
						{["To Do", "In Progress", "Done"].map((item, key) => {
							return (
								<TouchableOpacity
									onPress={() => {
										onClick(key);
									}}
									key={key}
									className={
										index === key
											? " bg-white rounded-lg border-primary border-2 px-3 py-1"
											: "bg-transparent rounded-lg border-primary border-2 px-3 py-1"
									}
								>
									<Text
										className={
											index === key
												? " text-sm text-primary font-medium"
												: "text-sm"
										}
									>
										{item}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
					<View className="bottom-8 mt-4">
						<PrimaryButton text={"Add"} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default AddToDo;
