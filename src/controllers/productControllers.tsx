import { Context } from "elysia";
import { client } from "../models/client";
import {
  AddProductType,
  ProductType,
  SearchQuerySchema,
} from "../types/entity";
import { Homepage } from "../views/pages";
import ProductCard from "../components/productCard";
import { ProductsPage } from "../views/pages/products";
import { AddProductsPage } from "../views/pages/products/add";
import Cart from "../components/cart";

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

export const addProduct = async ({ body, redirect }: Context) => {
  const { name, price } = body as AddProductType;

  client
    .query("INSERT INTO product (name, price) VALUES (?, ?)")
    .run(name, price);

  return redirect("/products");
};

export const getProductCartCount = async () => {
  const productsTotal = client
    .query("SELECT SUM(total) AS grand_total FROM cart")
    .get() as { grand_total: number };

  const total = productsTotal.grand_total ?? 0;

  return <Cart total={total} />;
};

export const getHomePage = async () => {
  const products = await getProducts();

  return <Homepage products={products} />;
};

export const getProductsPage = async () => {
  const products = await getProducts();

  return <ProductsPage products={products} />;
};

export const getAddProductsPage = async () => {
  return <AddProductsPage />;
};
