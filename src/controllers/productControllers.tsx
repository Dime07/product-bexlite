import { Context } from "elysia";
import { client } from "../models/client";
import {
  AddProductToCartType,
  AddProductType,
  ProductType,
  SearchQuerySchema,
} from "../types/entity";
import ProductCard from "../components/productCard";
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

export const getProductById = async (id: string) => {
  const product = client
    .query("SELECT * FROM product WHERE id = ?")
    .get(id) as ProductType;

  return product;
};

export const postUpdateProductById = async ({
  body,
  params,
  redirect,
}: Context) => {
  const { name, price } = body as AddProductType;
  const { id } = params;

  console.log(name, price, id);

  client
    .query("UPDATE product SET name = ?, price = ? WHERE id = ?")
    .run(name, price, id);

  return redirect("/products");
};

export const deleteProductById = async ({ params }: Context) => {
  const { id } = params;
  client.query("DELETE FROM product WHERE id = ?").run(id);

  const products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} adminMode />
      ))}
    </>
  );
};

export const getProductCartCount = async () => {
  const productsTotal = client
    .query("SELECT SUM(total) AS grand_total FROM cart")
    .get() as { grand_total: number };

  const total = productsTotal.grand_total ?? 0;

  return <Cart total={total} />;
};

export const addProductToCart = async ({ body }: Context) => {
  const { product_id } = body as AddProductToCartType;

  client
    .query(
      "INSERT INTO cart (product_id, total) VALUES (?, ?) ON CONFLICT(product_id) DO UPDATE SET total = total + 1"
    )
    .run(product_id, 1);

  const productsTotal = client
    .query("SELECT SUM(total) AS grand_total FROM cart")
    .get() as { grand_total: number };

  const total = productsTotal.grand_total ?? 0;

  return (
    <>
      added to cart
      <Cart total={total} />
    </>
  );
};
