import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HelloWorldScreen } from "./src/HelloWorld";
import { WebViewScreen } from "./src/Webview";

const Stack = createStackNavigator();

export const PocScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash Screen" component={HelloWorldScreen} />
      <Stack.Screen name="WebView Screen" component={WebViewScreen} />
    </Stack.Navigator>
  );
};
