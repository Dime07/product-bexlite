import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { getHomepageUI } from "./controllers/productControllers";

const app = new Elysia()
  .use(html())
  .get("/", getHomepageUI, {
    query: t.Object({
      search: t.Optional(t.String()),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
