import React from "react"

const ProductCard = React.memo(function ProductCard({ product }) {
  return (
    <div>
      <strong>{product.name}</strong> – {product.category}
    </div>
  );
});

export default ProductCard;
