import { WebView } from "react-native-webview";
import { View } from "native-base";
import React from "react";

export const ExampleWebViewScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        startInLoadingState
        source={{ uri: "https://github.com/facebook/react-native" }}
      />
    </View>
  );
};
