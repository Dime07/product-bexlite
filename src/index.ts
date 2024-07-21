import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import {
  addProduct,
  getAddProductsPage,
  getHomePage,
  getProductsPage,
  searchProducts,
} from "./controllers/productControllers";
import { AddProductSchema, SearchQuerySchema } from "./types/entity";

const app = new Elysia()
  .use(html())
  // page routes
  .get("/", getHomePage)
  .get("/products", getProductsPage)
  .get("/products/add", getAddProductsPage)
  // api routes
  .group("/api/products", (app) =>
    app
      .get("/search", searchProducts, {
        query: SearchQuerySchema,
      })
      .post("/add", addProduct, {
        body: AddProductSchema,
      })
  )

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
