import { WebView } from "react-native-webview";
import { View } from "native-base";
import React from "react";
import { RouteProp, NavigationProp } from "@react-navigation/native";

interface Props {
  height?: string;
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export const WebViewScreen = ({ height }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://github.com/facebook/react-native" }} />
    </View>
  );
};
