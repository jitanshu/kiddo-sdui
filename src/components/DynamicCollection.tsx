import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { SDUIComponentProps } from '../engine/componentRegistry';
import { DynamicCollectionBlock, ProductItem } from '../types/sdui';
import { useTheme } from '../theme/ThemeContext';
import { ProductCard } from './ProductCard';

type Props = SDUIComponentProps<DynamicCollectionBlock>;

export const DynamicCollection = memo(({ block }: Props) => {
    const theme = useTheme();

  const renderItem: ListRenderItem<ProductItem> = useCallback(({ item }) => {
    return <ProductCard product={item} width={150} />;
  }, []);

  const keyExtractor = useCallback((item: ProductItem) => item.id, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.text }]}>
        {block.title}
      </Text>

      <FlashList
        horizontal
        data={block.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
});