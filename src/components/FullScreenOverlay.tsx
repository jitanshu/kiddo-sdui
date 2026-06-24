import React, { memo } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import LottieView, { AnimationObject } from 'lottie-react-native';

import { SDUIComponentProps } from '../engine/componentRegistry';
import { FullScreenOverlayBlock } from '../types/sdui';

type Props = SDUIComponentProps<FullScreenOverlayBlock>;

type LottieSource = AnimationObject | { uri: string };

type OverlayAsset =
  | {
      type: 'lottie';
      source: LottieSource;
    }
  | {
      type: 'image';
      source: ImageSourcePropType;
    };

const getLocalOverlayAsset = (key: string): OverlayAsset | null => {
  switch (key) {
    case 'school':
      return {
        type: 'lottie',
        source: require('../../assets/lottie/school.json') as AnimationObject,
      };

    case 'confetti':
      return {
        type: 'lottie',
        source: require('../../assets/lottie/confetti.json') as AnimationObject,
      };

    default:
      return null;
  }
};

const getRemoteOverlayAsset = (url: string): OverlayAsset | null => {
  const lowerUrl = url.toLowerCase();

  if (lowerUrl.endsWith('.json')) {
    return {
      type: 'lottie',
      source: { uri: url },
    };
  }

  if (
    lowerUrl.endsWith('.webp') ||
    lowerUrl.endsWith('.gif') ||
    lowerUrl.endsWith('.png') ||
    lowerUrl.endsWith('.jpg') ||
    lowerUrl.endsWith('.jpeg')
  ) {
    return {
      type: 'image',
      source: { uri: url },
    };
  }

  return null;
};

export const FullScreenOverlay = memo(({ block }: Props) => {
  const animationUrl = block.animation_url || '';

  if (!animationUrl) {
    return null;
  }

  const asset =
    getLocalOverlayAsset(animationUrl) || getRemoteOverlayAsset(animationUrl);

  if (!asset) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.container}>
      {asset.type === 'lottie' ? (
        <LottieView
          source={asset.source}
          autoPlay
          loop
          resizeMode="cover"
          style={styles.media}
        />
      ) : (
        <Image source={asset.source} resizeMode="cover" style={styles.media} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    alignItems:"center"
  },
  media: {
    width: '100%',
    height: '50%',
  },
});