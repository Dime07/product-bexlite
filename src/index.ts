import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { getProductHomepage } from "./controllers/productControllers";

const app = new Elysia().use(html()).get("/", getProductHomepage).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
