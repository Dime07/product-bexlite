import ProductCard from "../../../components/productCard";
import { ProductType } from "../../../types/entity";
import { Layout } from "../../layout";

export const ProductsPage = ({ products }: { products: ProductType[] }) => {
  return (
    <Layout>
      <main class="px-10 pt-10 max-w-[1440px] mx-auto">
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <h1 class="text-2xl font-medium text-start">
              Welcome to your Product Catalogue
            </h1>
            <h2 class="text-sm text-start">
              This is a simple product catalogue app built with htmx and
              TailwindCSS.
            </h2>
          </div>
          <a
            href="/products/add"
            class="px-3 py-2 rounded bg-violet-800 text-white font-semibold"
          >
            Add new products
          </a>
        </div>
        {/* search form */}
        <div class="flex justify-start items-center mt-5 ">
          <form
            hx-get="/api/products/search"
            hx-target="#product-list"
            hx-swap="innerHTML"
          >
            <input
              name="search"
              placeholder="Search"
              class="border border-grey-200 rounded-md px-2 py-1 mr-4 focus:border-violet-700 outline-none w-[300px] mb-6 transition-all ease-in-out duration-200"
            />
            <button
              type="submit"
              class="px-3 py-1 rounded bg-violet-800 text-white font-semibold"
            >
              Search
            </button>
          </form>
        </div>

        <div
          id="product-list"
          class="grid grid-cols-4 gap-6 max-w-[1440px] mx-auto"
        >
          {products.map((product) => (
            <ProductCard product={product} adminMode />
          ))}
        </div>
      </main>
    </Layout>
  );
};
