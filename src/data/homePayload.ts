import { SDUIPayload } from '../types/sdui';

const generateProducts = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `p-${index}`,
    title: `Product ${index}`,
    price: `₹${index * 10}`,
    image: `https://picsum.photos/300/300?${index}`,
    action: {
      type: 'ADD_TO_CART',
      payload: { id: `p-${index}` },
    },
  }));

const generateCollections = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `collection-${index}`,
    type: 'DYNAMIC_COLLECTION' as const,
    title: `Collection ${index + 1}`,
    items: generateProducts(10),
  }));

export const backToSchoolPayload: SDUIPayload = {
  campaignId: 'back_to_school',
  theme: {
    primary: '#2563EB',
    background: '#FFF7C2',
    text: '#1F2937',
    card: '#FFFFFF',
  },
  blocks: [
    {
        id: 'hero-1',
        type: 'BANNER_HERO',
        title: 'Back to School Mega Sale',
        subtitle: 'Lunchboxes, bags, bottles & more delivered in minutes',
        image: 'https://picsum.photos/900/400',
        action: { type: 'DEEP_LINK', payload: { url: '/campaign/back-to-school' } },
    },
    {
        id: 'overlay-summer',
        type: 'FULL_SCREEN_OVERLAY',
        animation_url: 'school',
    },
    {
        id: 'grid-1',
        type: 'PRODUCT_GRID_2X2',
        title: 'Top Picks for Your Kiddo',
        products: [
            { id: 'p1', title: 'School Bag', price: '₹799', image: 'https://picsum.photos/300/300?1', action: { type: 'ADD_TO_CART', payload: { id: 'p1' } } },
            { id: 'p2', title: 'Lunch Box', price: '₹299', image: 'https://picsum.photos/300/300?2', action: { type: 'ADD_TO_CART', payload: { id: 'p2' } } },
            { id: 'p3', title: 'Water Bottle', price: '₹199', image: 'https://picsum.photos/300/300?3', action: { type: 'ADD_TO_CART', payload: { id: 'p3' } } },
            { id: 'p4', title: 'Pencil Kit', price: '₹149', image: 'https://picsum.photos/300/300?4', action: { type: 'ADD_TO_CART', payload: { id: 'p4' } } },
        ],
    },
    ...generateCollections(5),
    { id: 'unknown-1', type: 'NEW_COMPONENT_V2' } as any,
  ],
};

export const summerPlayhousePayload: SDUIPayload = {
  campaignId: 'summer_playhouse',
  theme: {
    primary: '#0284C7',
    background: '#E0F7FF',
    text: '#0F172A',
    card: '#FFFFFF',
  },
  blocks: [
    {
        id: 'hero-summer',
        type: 'BANNER_HERO',
        title: 'Summer Playhouse Festival',
        subtitle: 'Toys, water games & petting zoo tickets',
        image: 'https://picsum.photos/900/400?summer',
        action: { type: 'DEEP_LINK', payload: { url: '/campaign/summer-playhouse' } },
    },
    {
        id: 'collection-summer',
        type: 'DYNAMIC_COLLECTION',
        title: 'Petting Zoo Tickets',
        items: [
            { id: 's1', title: 'Zoo Entry Pass', price: '₹499', image: 'https://picsum.photos/300/300?s1', action: { type: 'ADD_TO_CART', payload: { id: 's1' } } },
            { id: 's2', title: 'Beach Ball', price: '₹199', image: 'https://picsum.photos/300/300?s2', action: { type: 'ADD_TO_CART', payload: { id: 's2' } } },
        ],
    },
  ],
};

export const mysteryGiftPayload: SDUIPayload = {
  campaignId: 'mystery_gift_carnival',
  theme: {
    primary: '#DC2626',
    background: '#FFF1F2',
    text: '#111827',
    card: '#FFFFFF',
  },
  blocks: [
    {
        id: 'hero-mystery',
        type: 'BANNER_HERO',
        title: 'Mystery Gift Carnival',
        subtitle: 'Tap products and unlock surprise gifts',
        image: 'https://picsum.photos/900/400?gift',
        action: {
            type: 'APPLY_MYSTERY_GIFT_COUPON',
            payload: { code: 'KIDDO-MYSTERY' },
        },
    },
    {
        id: 'overlay-mystery',
        type: 'FULL_SCREEN_OVERLAY',
        animation_url: 'confetti',
    },
    {
        id: 'collection-mystery',
        type: 'DYNAMIC_COLLECTION',
        title: 'Mystery Picks',
        items: [
            { id: 'm1', title: 'Surprise Toy Box', price: '₹599', image: 'https://picsum.photos/300/300?m1', action: { type: 'ADD_TO_CART', payload: { id: 'm1' } } },
            { id: 'm2', title: 'Carnival Snacks', price: '₹99', image: 'https://picsum.photos/300/300?m2', action: { type: 'ADD_TO_CART', payload: { id: 'm2' } } },
        ],
    },
  ],
};

export const homePayload = backToSchoolPayload;