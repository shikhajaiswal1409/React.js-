import React from "react";
import ProductCard from "./ProductCard";

const ProductList = React.memo(function ProductList({
  products,
  onNext,
  onPrev,
}) {
  console.log("ProductList rendered");

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </>
  );
});

export default ProductList;
