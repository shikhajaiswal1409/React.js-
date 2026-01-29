import { useMemo, useState } from "react";

function ProductDashboard({ products }) {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>

      <input
        placeholder="Search products"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ProductDashboard;
