import { ProductType } from "../types/entity";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      id={`product-${product.id}`}
      class="bg-white shadow-md rounded-md px-5 py-2"
    >
      <h3 class="text-lg font-semibold">{product.name}</h3>
      <p class="text-sm text-gray-500">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
