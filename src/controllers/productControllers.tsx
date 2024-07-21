import { Context } from "elysia";
import { client } from "../models/client";
import { ProductType } from "../types/entity";
import { Homepage } from "../views/pages";

export const getProducts = async ({ search }: { search?: string }) => {
  if (search) {
    const products = client
      .query("SELECT * FROM product WHERE name LIKE ?")
      .all(`%${search}%`) as ProductType[];

    return products;
  }

  const products = client.query("SELECT * FROM product").all() as ProductType[];
  return products;
};

export const getHomepageUI = async ({ query }: Context) => {
  const { search } = query;

  const products = await getProducts({ search });

  return <Homepage products={products} />;
};
