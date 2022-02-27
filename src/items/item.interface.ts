export interface BaseItem {
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
}

export interface Item extends BaseItem {
  id: number;
}