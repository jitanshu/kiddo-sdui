import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useCartStore } from '../store/cartStore';
import { useTheme } from '../theme/ThemeContext';

export const CartCounter = memo(() => {
  const count = useCartStore((state) => state.count);
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <Text style={styles.text}>Cart: {count}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});