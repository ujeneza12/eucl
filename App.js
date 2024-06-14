import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TokenMeterScreen from "./screens/TokenMeterScreen";
import ValidateTokenScreen from "./screens/ValidateTokenScreen";
import CheckTokenScreen from "./screens/CheckTokenScreen";



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home"  component={HomeScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Token"  component={TokenMeterScreen}   options={{ headerShown: false }}/> 
        <Stack.Screen name="Validate"  component={ValidateTokenScreen}   options={{ headerShown: false }}/> 
        <Stack.Screen name="Check"  component={CheckTokenScreen}   options={{ headerShown: false }}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
