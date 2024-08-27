import { ProductType } from "../types/entity";

const ProductCard = ({
  product,
  adminMode = false,
}: {
  product: ProductType;
  adminMode?: boolean;
}) => {
  return (
    <div
      id={`product-${product.id}`}
      class="bg-white shadow-md rounded-md px-5 py-2"
    >
      <h3 class="text-lg font-semibold">{product.name}</h3>
      <p class="text-sm text-gray-500">Price: ${product.price}</p>

      {adminMode && (
        <div class="flex justify-start gap-2 items-center mt-2">
          <a
            href={`/products/edit/${product.id}`}
            class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          >
            Edit
          </a>

          <a
            hx-delete={`/api/products/delete/${product.id}`}
            hx-target={`#product-list`}
            class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </a>
        </div>
      )}

      {!adminMode && (
        <button
          hx-post="/api/products/cart/add"
          hx-target="this"
          hx-swap="innerHTML"
          hx-trigger="click"
          hx-vals={`{"product_id": ${product.id}}`}
          class="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
