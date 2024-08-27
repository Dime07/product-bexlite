import { Context } from "elysia";
import { Homepage } from "../views/pages";
import { ProductsPage } from "../views/pages/products";
import { AddProductsPage } from "../views/pages/products/add";
import { EditProductsPage } from "../views/pages/products/edit";
import { getProductById, getProducts } from "./productControllers";
import { ProductType } from "../types/entity";

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

export const getEditProductsPage = async ({ params }: Context) => {
  const { id } = params;

  const product = (await getProductById(id)) as ProductType;

  return <EditProductsPage product={product} />;
};
