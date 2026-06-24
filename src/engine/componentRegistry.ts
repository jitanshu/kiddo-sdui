import { ComponentType } from 'react';
import { SDUIBlock } from '../types/sdui';
import { BannerHero } from '../components/BannerHero';
import { ProductGrid2x2 } from '../components/ProductGrid2x2';
import { DynamicCollection } from '../components/DynamicCollection';
import { FullScreenOverlay } from '../components/FullScreenOverlay';

export type SDUIComponentProps<T extends SDUIBlock = SDUIBlock> = {
  block: T;
};

export type Registry = Partial<
  Record<SDUIBlock['type'], ComponentType<SDUIComponentProps<any>>>
>;

export const componentRegistry: Registry = {
    BANNER_HERO: BannerHero,
    PRODUCT_GRID_2X2: ProductGrid2x2,
    DYNAMIC_COLLECTION: DynamicCollection,
    FULL_SCREEN_OVERLAY: FullScreenOverlay,
};