import React from 'react';
import { Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import 'react-native-gesture-handler';

import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Navigation />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}