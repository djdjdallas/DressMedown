const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Onboarding from "./screens/Onboarding";
import HomePage from "./screens/HomePage";
import Onboarding1 from "./screens/Onboarding1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
