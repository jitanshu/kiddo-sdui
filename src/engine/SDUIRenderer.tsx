import React, { memo, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { SDUIBlock, SDUIPayload } from '../types/sdui';
import { componentRegistry } from './componentRegistry';
import { isRenderableBlock } from './blockGuards';

type Props = {
  payload: SDUIPayload;
};

const RenderBlock = memo(({ block }: { block: SDUIBlock }) => {
  const Component = componentRegistry[block.type];

  if (!Component) {
    return null;
  }

  return <Component block={block} />;
});

export const SDUIRenderer = ({ payload }: Props) => {
  const contentBlocks = useMemo(
  () =>
    payload.blocks.filter(
      (block) =>
        block.type !== 'FULL_SCREEN_OVERLAY' &&
        isRenderableBlock(block)
    ),
  [payload.blocks]
);

  const overlayBlocks = useMemo(
  () =>
    payload.blocks.filter(
      (block) =>
        block.type === 'FULL_SCREEN_OVERLAY' &&
        isRenderableBlock(block)
    ),
  [payload.blocks]
);

  const renderItem: ListRenderItem<SDUIBlock> = useCallback(({ item }) => {
    return <RenderBlock block={item} />;
  }, []);

  const keyExtractor = useCallback((item: SDUIBlock) => item.id, []);

  return (
    <View style={{ flex: 1, backgroundColor: payload.theme.background }}>
      <FlashList
        data={contentBlocks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />

      {overlayBlocks.map((block) => (
        <RenderBlock key={block.id} block={block} />
      ))}
    </View>
  );
};