import { Static, t } from "elysia";

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

export type CartType = {
  id: number;
  product_id: number;
  total: number;
};

export const SearchQuerySchema = t.Object({
  search: t.String(),
});

export type SearchQuerySchema = Static<typeof SearchQuerySchema>;

export const AddProductSchema = t.Object({
  name: t.String(),
  price: t.String(),
});

export type AddProductType = Static<typeof AddProductSchema>;

export const AddProductToCartSchema = t.Object({
  product_id: t.String(),
});

export type AddProductToCartType = Static<typeof AddProductToCartSchema>;
