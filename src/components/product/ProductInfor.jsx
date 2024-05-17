import { Rate } from "antd/es";
import { NavLink } from "react-router-dom/dist";

const ProductInfor = ({ product }) => {
  return (
    <div>
      <p>Thông tin sản phẩm</p>
      <h3 className="text-xl">{product.product_name}</h3>
      <p>
        <Rate allowHalf defaultValue={product.product_ratingAverage} disabled />
      </p>
      <NavLink>{product.product_shop.nameShop}</NavLink>
      <p>
        {product.product_price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      {/* <p></p> */}
    </div>
  );
};

export default ProductInfor;
