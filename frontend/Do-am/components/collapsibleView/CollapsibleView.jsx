import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons/faSquareCheck";
const CollapsibleView = ({ title, index }) => {
	const [collapsed, setCollapsed] = useState(true);
	const [animation] = useState(new Animated.Value(0));

	const toggleCollapse = () => {
		if (collapsed) {
			Animated.timing(animation, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(animation, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
		setCollapsed(!collapsed);
	};

	const heightInterpolate = animation.interpolate({
		inputRange: [0, 2],
		outputRange: [0, 2],
	});

	return (
		<>
			<View className=" bg-white h-fit p-3 rounded-t-xl">
				<View className="flex-row justify-between">
					<Text className="text-primary">{title}</Text>
					<TouchableOpacity onPress={toggleCollapse} className=" h-6">
						<FontAwesomeIcon
							onPress={toggleCollapse}
							icon={collapsed ? faAngleDown : faAngleUp}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View className="mb-3">
				<Animated.View style={{ transform: [{ scaleY: heightInterpolate }] }}>
					<View className="  bg-white rounded-b-xl">
						<View className="p-3">
							{index === 0 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSquarePlus} />
									<Text>Wash the car</Text>
								</View>
							)}
							{index === 1 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSpinner} />
									<Text>Wash the car</Text>
								</View>
							)}
							{index === 2 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSquareCheck} />
									<Text>Wash the car</Text>
								</View>
							)}
							{index === 0 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSquarePlus} />
									<Text>Wash the car</Text>
								</View>
							)}
							{index === 1 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSpinner} />
									<Text>Wash the car</Text>
								</View>
							)}
							{index === 2 && (
								<View className="flex-row gap-4 px-4 pb-4">
									<FontAwesomeIcon color="#9483bf" icon={faSquareCheck} />
									<Text>Wash the car</Text>
								</View>
							)}
						</View>
					</View>
				</Animated.View>
			</View>
		</>
	);
};

export default CollapsibleView;
