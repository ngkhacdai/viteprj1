import React from "react";

const ProductDesc = ({ product }) => {
  return (
    <div className="pt-2">
      <p className="pb-2">Mô tả sản phẩm: </p>
      <div className="whitespace-pre-wrap">{product.product_description}</div>
    </div>
  );
};

export default ProductDesc;
