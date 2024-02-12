import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CollapsibleView } from "../../components";

const Home = () => {
	const [index, setIndex] = useState(0);
	const [collapsed, setCollapsed] = useState(true);

	const onClick = (key) => {
		setIndex(key);
	};

	const handleCollapse = () => {
		setCollapsed(!collapsed);
	};
	return (
		<View className="h-[85vh] w-screen overflow-hidden flex items-center">
			<View className="w-10/12 h-1/3">
				<View className="flex gap-3 ">
					<Text className="text-primary font-semibold text-lg">
						Hello name,
					</Text>
					<Text className="font-semibold">What is your plan for today?</Text>
				</View>
				<View className="flex-row justify-between py-8 ">
					{["Personal To Do", "Team To Do"].map((item, key) => {
						return (
							<TouchableOpacity
								className={
									key === index
										? `bg-primary h-32 w-[48%] flex items-center justify-center rounded-xl px-8 text-center `
										: `w-[48%] flex items-center justify-center border-primary border-2 rounded-xl px-8 text-center `
								}
								onPress={() => onClick(key)}
								key={key}
							>
								<Text
									className={
										key === index
											? `text-white font-bold text-base`
											: `text-base font-bold `
									}
								>
									{item}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} className="h-96 w-10/12">
				{["To Do", "In Progress", "Done"].map((item, index) => {
					return (
						<CollapsibleView
							key={index}
							index={index}
							title={item.toLocaleUpperCase()}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default Home;
