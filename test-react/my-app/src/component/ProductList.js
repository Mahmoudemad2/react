import React from "react";
import ProductsData from "./ProductsData";
import Product from "./Product";
const ProductList = () => {
  const products = ProductsData.map((product) => {
    return (
    
      
        <Product
        key={product.id}
        product={product} /> 
      
    );
  });

  return <div>{products}</div>;
};

export default ProductList;
