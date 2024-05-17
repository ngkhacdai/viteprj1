import { Button, Radio, Rate } from "antd/es";
import { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import ProductDesc from "./ProductDesc";

const ProductInfor = ({ product }) => {
  console.log(product);
  const [attribute, setAttribute] = useState("");
  const [options, setOptions] = useState("");
  const onSelectAttributed = (e) => {
    setAttribute(e.target.value);
  };
  const onSelectOption = (e) => {
    setOptions(e.target.value);
  };
  return (
    <div className="p-2">
      <p className="text-xl font-bold mb-2">Thông tin sản phẩm</p>
      <h3 className="text-2xl pb-2">{product?.product_name}</h3>
      <p>
        <Rate
          allowHalf
          defaultValue={product?.product_ratingAverage}
          disabled
          className="pb-2"
        />
      </p>
      <div className="flex">
        <p className="mr-2 pb-2">Tên shop:</p>
        <NavLink>{product?.shop_name}</NavLink>
      </div>
      <p className="text-red-500 text-xl pb-2">
        {product?.product_price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      <p>Sản phẩm tồn kho: {product.product_quantity}</p>
      <div>
        <p>Thuộc tính: </p>
        <div className="mt-2 flex items-center">
          <p className="mr-2">Màu sắc: </p>

          <Radio.Group
            defaultValue={attribute.color}
            onChange={onSelectAttributed}
          >
            {product.product_attributes.map((item, index) => {
              return (
                <Radio.Button key={`attribute-${index}`} value={item}>
                  {item.color}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </div>
        <div className="mt-2 flex items-center">
          <p className="mr-2">Kích cỡ: </p>
          <Radio.Group
            className="my-2"
            defaultValue={options.size}
            onChange={onSelectOption}
          >
            {attribute &&
              attribute.options.map((item, index) => {
                return (
                  <Radio.Button key={`options-${index}`} value={item}>
                    {item.size}
                  </Radio.Button>
                );
              })}
          </Radio.Group>
        </div>
        <div>Số lượng hàng còn lại: {options.options_quantity}</div>
        <ProductDesc product={product} />
      </div>
    </div>
  );
};

export default ProductInfor;
