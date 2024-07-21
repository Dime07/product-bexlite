import { Static, t } from "elysia";

export type ProductType = {
  id: number;
  name: string;
  price: number;
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
