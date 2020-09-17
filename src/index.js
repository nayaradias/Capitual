import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Bitcoin from "./pages/Bitcoin";
const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: "#1e1e27",
  },
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  headerTitleAlign: "center",
};
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={screenOptions} />
        <Stack.Screen
          name="Bitcoin"
          component={Bitcoin}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
