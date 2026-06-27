export interface Product {
  id: string;
  name: string;
  pack: string;
  price: number;
  image: string;
  badge?: string | null;
  blurb: string;
  specs: string[];
}

export interface CartEntry {
  product: Product;
  qty: number;
}
