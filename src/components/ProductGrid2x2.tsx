import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SDUIComponentProps } from '../engine/componentRegistry';
import { ProductGridBlock } from '../types/sdui';
import { useTheme } from '../theme/ThemeContext';
import { ProductCard } from './ProductCard';

type Props = SDUIComponentProps<ProductGridBlock>;

export const ProductGrid2x2 = memo(({ block }: Props) => {
    const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.text }]}>
        {block.title}
      </Text>

      <View style={styles.grid}>
        {block.products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            width="48%"
          />
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});