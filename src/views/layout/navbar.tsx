import Cart from "../../components/cart";

const Navbar = () => {
  return (
    <nav class="w-full bg-grey-100 py-2 px-10 shadow-sm">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold">Product Catalogue</div>
        <ul class="flex items-center gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">My Products</a>
          </li>
          <li>
            <Cart total={0} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
