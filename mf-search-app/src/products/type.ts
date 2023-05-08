export type Product = {
  id: number;
  name: string;
  quantity: number;
  description: string;
  price: number;
  color: string;
  size: string;
  featured?: boolean;
  imgUrl?: string;
};
