import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

/*React behavior
This is static data
This code runs ONCE when the file is loaded
PRODUCTS is created one time
Every render of App reuses the same data
✔ Fast
✔ Memory efficient
✔ Predictable 
Array.from = “Create an array for me.”
Array.from is a built-in JavaScript function (static method) used to create arrays from iterable or array-like objects
Array.from({ length: 1000 }, (_, i) => ({ ... }))
Means:
“Create an array with 1000 items, and for each item, generate a product object.”
🧠 Compare with a normal function
This:
Array.from({ length: 3 }, (v, i) => i);*/

const PRODUCTS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  category: i % 2 === 0 ? "Electronics" : "Clothing",
  price: i * 10,
}));

function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  /* ✅ useMemo: expensive calculation */
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* ✅ useMemo: pagination logic */
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  /* ✅ useCallback: stable handlers */
  const handleNextPage = useCallback(() => {
    setPage(p => p + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    setPage(p => Math.max(1, p - 1));
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <select
        value={category}
        onChange={e => {
          setCategory(e.target.value);
          setPage(1);
        }}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
      </select>

      <ProductList
        products={paginatedProducts}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
}

export default Dashboard;
