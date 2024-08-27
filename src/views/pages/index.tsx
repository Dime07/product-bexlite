import ProductCard from "../../components/productCard";
import { ProductType } from "../../types/entity";
import { Layout } from "../layout";

export const Homepage = ({ products }: { products: ProductType[] }) => {
  return (
    <Layout>
      <main class="px-10 pt-10">
        <div class="space-y-2">
          <h1 class="text-2xl font-medium text-center">
            Welcome to Product Catalogue
          </h1>
          <h2 class="text-sm text-center">
            This is a simple product catalogue app built with htmx and
            TailwindCSS.
          </h2>
        </div>

        {/* search form */}
        <div class="flex justify-center items-center mt-5 ">
          <input
            name="search"
            placeholder="Search"
            class="border border-grey-200 rounded-md px-2 py-1 mr-4 focus:border-violet-700 outline-none w-[300px] mb-5 transition-all ease-in-out duration-200"
            hx-get="/api/products/search"
            hx-target="#product-list"
            hx-swap="innerHTML"
            hx-trigger="input changed delay:500ms, search"
          />
        </div>

        <div
          id="product-list"
          class="grid grid-cols-4 gap-6 max-w-[1440px] mx-auto"
        >
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </main>
    </Layout>
  );
};
