import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'bmsb-220-30',
    name: 'Breast Milk Storage Bags 220ml',
    pack: '30 Pack',
    price: 14.95,
    image: '/assets/banner.png',
    badge: 'Best Seller',
    blurb: 'Pre-sterilised, self-standing storage bags with a smart temperature indicator and double-zip seal.',
    specs: ['220ml capacity', '30 bags', 'Gamma-ray pre-sterilised', 'BPA-free PET/LDPE'],
  },
  {
    id: 'bmsb-220-60',
    name: 'Breast Milk Storage Bags 220ml',
    pack: '60 Pack (Value)',
    price: 26.95,
    image: '/assets/banner.png',
    badge: 'Best Value',
    blurb: 'Double the supply for busy weeks. Same trusted seal, temperature indicator and self-standing base.',
    specs: ['220ml capacity', '60 bags', 'Gamma-ray pre-sterilised', 'BPA-free PET/LDPE'],
  },
  {
    id: 'bmsb-220-90',
    name: 'Breast Milk Storage Bags 220ml',
    pack: '90 Pack (Family)',
    price: 37.95,
    image: '/assets/banner.png',
    badge: null,
    blurb: 'Our largest pack for stocking up the freezer. Eco-friendly, recyclable and freezer-safe.',
    specs: ['220ml capacity', '90 bags', 'Gamma-ray pre-sterilised', 'BPA-free PET/LDPE'],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}
