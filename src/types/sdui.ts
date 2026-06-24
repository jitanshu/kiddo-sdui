export type ComponentType =
  | 'BANNER_HERO'
  | 'PRODUCT_GRID_2X2'
  | 'DYNAMIC_COLLECTION'
  | 'FULL_SCREEN_OVERLAY';

export type ActionType =
  | 'ADD_TO_CART'
  | 'DEEP_LINK'
  | 'APPLY_MYSTERY_GIFT_COUPON';

export type SDUIAction = {
  type: ActionType;
  payload?: Record<string, unknown>;
};

export type ThemeConfig = {
  primary: string;
  background: string;
  text: string;
  card: string;
};

export type ProductItem = {
  id: string;
  title: string;
  price: string;
  image: string;
  action?: SDUIAction;
};

export type BaseBlock = {
  id: string;
  type: string;
};

export type BannerHeroBlock = BaseBlock & {
  type: 'BANNER_HERO';
  title: string;
  subtitle: string;
  image: string;
  action?: SDUIAction;
};

export type ProductGridBlock = BaseBlock & {
  type: 'PRODUCT_GRID_2X2';
  title: string;
  products: ProductItem[];
};

export type DynamicCollectionBlock = BaseBlock & {
  type: 'DYNAMIC_COLLECTION';
  title: string;
  items: ProductItem[];
};

export type FullScreenOverlayBlock = BaseBlock & {
  type: 'FULL_SCREEN_OVERLAY';
  animation_url: string;
};

export type SDUIBlock =
  | BannerHeroBlock
  | ProductGridBlock
  | DynamicCollectionBlock
  | FullScreenOverlayBlock;

export type SDUIPayload = {
  campaignId: string;
  theme: ThemeConfig;
  blocks: SDUIBlock[];
};