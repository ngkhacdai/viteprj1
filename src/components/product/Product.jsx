import { getProduct } from "../../service/ProductAPI";
import { Spin } from "antd";
import { useEffect, useState } from "react";

import TableProduct from "./TableProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setProduct(await getProduct());
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      <p></p>
      <TableProduct product={product} />
    </div>
  );
};

export default Product;
