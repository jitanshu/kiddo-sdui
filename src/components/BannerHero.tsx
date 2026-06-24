import React, { memo } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { handleAction } from '../actions/actionDispatcher';
import { SDUIComponentProps } from '../engine/componentRegistry';
import { BannerHeroBlock } from '../types/sdui';
import { useTheme } from '../theme/ThemeContext';

type Props = SDUIComponentProps<BannerHeroBlock>;

export const BannerHero = memo(({ block }: Props) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => handleAction(block.action)}
      style={[styles.container, { backgroundColor: theme.card }]}
    >
      <Image source={{ uri: block.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          {block.title}
        </Text>

        <Text style={[styles.subtitle, { color: theme.primary }]}>
          {block.subtitle}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
  },
});