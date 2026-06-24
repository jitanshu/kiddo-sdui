import {
  BannerHeroBlock,
  DynamicCollectionBlock,
  FullScreenOverlayBlock,
  ProductGridBlock,
  ProductItem,
  SDUIBlock,
} from '../types/sdui';

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

const isProductItem = (value: unknown): value is ProductItem => {
  if (!isObject(value)) return false;

  return (
    isString(value.id) &&
    isString(value.title) &&
    isString(value.price) &&
    isString(value.image)
  );
};

export const isBannerHeroBlock = (
  block: SDUIBlock
): block is BannerHeroBlock => {
  return (
    block.type === 'BANNER_HERO' &&
    isString(block.id) &&
    isString(block.title) &&
    isString(block.subtitle) &&
    isString(block.image)
  );
};

export const isProductGridBlock = (
  block: SDUIBlock
): block is ProductGridBlock => {
  return (
    block.type === 'PRODUCT_GRID_2X2' &&
    isString(block.id) &&
    isString(block.title) &&
    Array.isArray(block.products) &&
    block.products.every(isProductItem)
  );
};

export const isDynamicCollectionBlock = (
  block: SDUIBlock
): block is DynamicCollectionBlock => {
  return (
    block.type === 'DYNAMIC_COLLECTION' &&
    isString(block.id) &&
    isString(block.title) &&
    Array.isArray(block.items) &&
    block.items.every(isProductItem)
  );
};

export const isFullScreenOverlayBlock = (
  block: SDUIBlock
): block is FullScreenOverlayBlock => {
  return (
    block.type === 'FULL_SCREEN_OVERLAY' &&
    isString(block.id) &&
    isString(block.animation_url)
  );
};

export const isRenderableBlock = (block: SDUIBlock): boolean => {
  switch (block.type) {
    case 'BANNER_HERO':
      return isBannerHeroBlock(block);

    case 'PRODUCT_GRID_2X2':
      return isProductGridBlock(block);

    case 'DYNAMIC_COLLECTION':
      return isDynamicCollectionBlock(block);

    case 'FULL_SCREEN_OVERLAY':
      return isFullScreenOverlayBlock(block);

    default:
      return false;
  }
};