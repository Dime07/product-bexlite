const Cart = ({ total }: { total: number }) => {
  return (
    <div>
      <div
        hx-get="/api/products/cart/count"
        hx-target="#product-cart"
        hx-trigger="load"
      />

      <div
        class="relative"
        id="product-cart"
        hx-swap="innerHtml"
        hx-swap-oob="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-5 h-5 text-black font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        {total > 0 && (
          <span class="absolute top-0 right-0 -mt-1 -mr-2 px-1 text-xs font-bold bg-red-500 text-white rounded-full">
            {total}
          </span>
        )}
      </div>
    </div>
  );
};

export default Cart;
