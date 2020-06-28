export type typeFoodItem = {
  title: string;
  sale: saleItem[];
  image: string;
  description: string;
  affiliation: object[];
  children?: never;
}

type saleItem = {
  cost: number;
  params?: {
    size: number;
    metrics: string;
  }
}
