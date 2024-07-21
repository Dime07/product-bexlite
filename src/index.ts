import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import {
  getHomepageUI,
  searchProducts,
} from "./controllers/productControllers";
import { SearchQuerySchema } from "./types/entity";

const app = new Elysia()
  .use(html())
  .get("/", getHomepageUI)
  .get("/products/search", searchProducts, {
    query: SearchQuerySchema,
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
