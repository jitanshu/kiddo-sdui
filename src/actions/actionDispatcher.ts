import { useCartStore } from '../store/cartStore';
import { SDUIAction } from '../types/sdui';

export const handleAction = (action?: SDUIAction) => {
  if (!action) return;

  switch (action.type) {
    case 'ADD_TO_CART':
      useCartStore.getState().addToCart();
      console.log('ADD_TO_CART:', action.payload);
      return;

    case 'DEEP_LINK':
      console.log('DEEP_LINK:', action.payload);
      return;

    case 'APPLY_MYSTERY_GIFT_COUPON':
      console.log('APPLY_MYSTERY_GIFT_COUPON:', action.payload);
      return;

    default:
      console.warn('Unsupported action:', action);
  }
};