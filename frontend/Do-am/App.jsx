import React from "react";
import { View, Text } from "react-native";
import {
	Done,
	Home,
	InProgress,
	Login,
	SignUp,
	SplashScreen,
	ToDo,
} from "./screens";
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
						title: "",
					}}
					name="Login"
					component={Login}
				/>
				<Stack.Screen
					options={{
						title: "",
					}}
					name="SignUp"
					component={SignUp}
				/>

				<Stack.Screen name="Home" component={Home} options={{ title: "" }} />

				<Stack.Screen
					name="ToDo"
					component={ToDo}
					options={{ title: "ToDo" }}
				/>
				<Stack.Screen
					name="InProgress"
					component={InProgress}
					options={{ title: "In Progress" }}
				/>
				<Stack.Screen
					name="Done"
					component={Done}
					options={{ title: "Done" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
