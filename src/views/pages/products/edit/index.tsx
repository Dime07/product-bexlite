import { ProductType } from "../../../../types/entity";
import { Layout } from "../../../layout";

export const EditProductsPage = ({ product }: { product: ProductType }) => {
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
        </div>
        <form
          method="POST"
          action={`/api/products/edit/${product.id}`}
          class="space-y-3 mt-2"
        >
          <div class="flex flex-col gap-1">
            <label class="font-semibold text-black">Name</label>
            <input
              type="text"
              name="name"
              class="border border-grey-200 rounded-md px-2 py-1 mr-4 focus:border-violet-700 outline-none w-[300px] transition-all ease-in-out duration-200"
              value={product.name}
              required
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-semibold text-black">Price</label>
            <input
              type="number"
              name="price"
              class="border border-grey-200 rounded-md px-2 py-1 mr-4 focus:border-violet-700 outline-none w-[300px] transition-all ease-in-out duration-200"
              value={String(product.price)}
              required
            />
          </div>
          <button
            type="submit"
            class="px-3 py-1 rounded bg-violet-800 text-white font-semibold"
          >
            Update
          </button>
        </form>
      </main>
    </Layout>
  );
};
