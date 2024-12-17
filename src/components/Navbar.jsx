const Navbar = () => {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">Ichiba 市場</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md border w-[1000px] border-gray-900 focus:outline-none focus:ring-2"
          />
          <button className="p-2 bg-zinc-500 text-white rounded-r-md hover:bg-slate-950">
            Search
          </button>
        </div>
        <div>
          <a href="/" className="text-gray-300 hover:text-white mx-2">
            Orders
          </a>
          <a href="/products" className="text-gray-300 hover:text-white mx-2">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
