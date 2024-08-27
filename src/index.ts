import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import {
  addProduct,
  addProductToCart,
  deleteProductById,
  getProductCartCount,
  postUpdateProductById,
  searchProducts,
} from "./controllers/productControllers";
import {
  AddProductSchema,
  AddProductToCartSchema,
  SearchQuerySchema,
} from "./types/entity";
import {
  getAddProductsPage,
  getEditProductsPage,
  getHomePage,
  getProductsPage,
} from "./controllers/productUIControllers";

const app = new Elysia()
  .use(html())
  // page routes
  .get("/", getHomePage)
  .get("/products", getProductsPage)
  .get("/products/add", getAddProductsPage)
  .get("/products/edit/:id", getEditProductsPage, {
    params: t.Object({ id: t.String() }),
  })
  // api routes
  .group("/api/products", (app) =>
    app
      .get("/search", searchProducts, {
        query: SearchQuerySchema,
      })
      .post("/add", addProduct, {
        body: AddProductSchema,
      })
      .post("/cart/add", addProductToCart, {
        body: AddProductToCartSchema,
      })
      .get("/cart/count", getProductCartCount)
      .post("/edit/:id", postUpdateProductById, {
        params: t.Object({ id: t.String() }),
        body: AddProductSchema,
      })
      .delete("/delete/:id", deleteProductById, {
        params: t.Object({ id: t.String() }),
      })
  )

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
