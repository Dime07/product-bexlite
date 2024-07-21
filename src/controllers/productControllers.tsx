import { Context } from "elysia";
import { client } from "../models/client";
import { ProductType, SearchQuerySchema } from "../types/entity";
import { Homepage } from "../views/pages";
import ProductCard from "../components/productCard";

export const getProducts = async () => {
  const products = client.query("SELECT * FROM product").all() as ProductType[];
  return products;
};

export const searchProducts = async ({ query }: Context) => {
  const { search } = query as SearchQuerySchema;

  const products = client
    .query("SELECT * FROM product WHERE name LIKE ?")
    .all(`%${search}%`) as ProductType[];

  if (products.length === 0) {
    return (
      <p class="font-semibold text-black text-lg text-center w-full">
        No Products Found 😢
      </p>
    );
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};

export const getHomepageUI = async () => {
  const products = await getProducts();

  return <Homepage products={products} />;
};
