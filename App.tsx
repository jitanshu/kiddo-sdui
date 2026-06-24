import { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { CartCounter } from './src/components/CartCounter';
import {
  backToSchoolPayload,
  summerPlayhousePayload,
  mysteryGiftPayload,
} from './src/data/homePayload';
import { SDUIRenderer } from './src/engine/SDUIRenderer';
import { ThemeProvider } from './src/theme/ThemeContext';

const campaigns = [
  backToSchoolPayload,
  summerPlayhousePayload,
  mysteryGiftPayload,
];

export default function App() {
  const [index, setIndex] = useState(0);
  const payload = campaigns[index];

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={payload.theme}>
        <SafeAreaView style={[styles.container, { backgroundColor: payload.theme.background }]}>
          <StatusBar barStyle="dark-content" />

          <View style={styles.switcher}>
            <Pressable onPress={() => setIndex((index + 1) % campaigns.length)}>
              <Text style={[styles.switchText, { color: payload.theme.primary }]}>
                Switch Campaign: {payload.campaignId}
              </Text>
            </Pressable>
          </View>

          <CartCounter />
          <SDUIRenderer payload={payload} />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switcher: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  switchText: {
    fontSize: 15,
    fontWeight: '800',
  },
});