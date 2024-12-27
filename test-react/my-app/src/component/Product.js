import React from "react";

const Product = (props) => {
  return (
    <div className="product-list">
<div className="row">
<div className="card">
<img src={props.product.image} alt="" />
<h6>{props.product.title}</h6>
</div>
</div>

    </div>
  );
};

export default Product;
