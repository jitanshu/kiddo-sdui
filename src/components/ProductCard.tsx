import React, { memo } from 'react';
import { DimensionValue, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { handleAction } from '../actions/actionDispatcher';
import { ProductItem } from '../types/sdui';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  product: ProductItem;
  width?: DimensionValue;
};

export const ProductCard = memo(({ product, width = '48%' }: Props) => {
    const theme = useTheme();

  return (
    <Pressable
      onPress={() => handleAction(product.action)}
      style={[styles.card, { width, backgroundColor: theme.card }]}
    >
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={2} style={[styles.title, { color: theme.text }]}>
          {product.title}
        </Text>

        <Text style={[styles.price, { color: theme.primary }]}>
          {product.price}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  price: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '800',
  },
});