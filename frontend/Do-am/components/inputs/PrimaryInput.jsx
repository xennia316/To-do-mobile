import React from "react";
import { TextInput, View } from "react-native";

const PrimaryInput = ({ placeholder }) => {
	return (
		<TextInput
			placeholder={placeholder}
			multiline={false}
			className="w-full h-10 p-2 border-t-2 border-r-2 border-l-2 border-b-2 border-primary my-2 rounded-sm"
		/>
	);
};

export default PrimaryInput;
