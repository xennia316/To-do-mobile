import React from "react";
import { View, Text } from "react-native";
import { Login, SignUp, SplashScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		// <View className="">
		// 	{/* <SplashScreen /> */}
		// 	{/* <Login /> */}
		// 	<SignUp />
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
