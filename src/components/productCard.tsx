import { ProductType } from "../types/entity";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      id={`product-${product.id}`}
      class="bg-white shadow-md rounded-md px-5 py-2"
    >
      <h3 class="text-lg font-semibold">{product.name}</h3>
      <p class="text-sm text-gray-500">Price: ${product.price}</p>
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
    </div>
  );
};

export default ProductCard;
