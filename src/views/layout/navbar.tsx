const Navbar = () => {
  return (
    <nav class="w-full bg-grey-100 py-2 px-10 shadow-sm">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold">Product Catalogue</div>
        <div class="flex items-center">
          <div class="mr-4">Home</div>
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
