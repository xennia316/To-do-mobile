import React from "react";
import { View, Text } from "react-native";
import { Login, SignUp, SplashScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: "#9483bf",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen
					options={{
						title: "",
					}}
					name="SplashScreen"
					component={SplashScreen}
				/>
				<Stack.Screen
					options={{
						title: "Log in",
					}}
					name="Login"
					component={Login}
				/>
				<Stack.Screen
					options={{
						title: "Register",
					}}
					name="SignUp"
					component={SignUp}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
