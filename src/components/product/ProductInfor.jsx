import { Col, Radio, Rate, Row } from "antd/es";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/dist";

const ProductInfor = ({ product }) => {
  const [attribute, setAttribute] = useState("");
  const [options, setOptions] = useState("");
  const onSelectAttributed = (e) => {
    setAttribute(e.target.value);
  };

  const onSelectOption = (e) => {
    setOptions(e.target.value);
  };

  useEffect(() => {
    setOptions("");
  }, [attribute]);

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
      <p className="text-red-500 text-xl pb-2">
        {product?.product_price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      <Row gutter={[10, 10]} justify={"start"} className="font-bold">
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          Tên shop:
        </Col>
        <Col xs={24} sm={18} md={18} lg={18} xl={18}>
          <NavLink
            to={`/storedetail?${product.shop_name}&id=${product.shop_id}`}
          >
            {product?.shop_name}
          </NavLink>
        </Col>
      </Row>

      <Row gutter={[10, 10]}>
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          Sản phẩm tồn kho:
        </Col>
        <Col xs={24} sm={18} md={18} lg={18} xl={18}>
          {product.product_quantity}
        </Col>
      </Row>
      <div>
        <Row gutter={[10, 10]} className="mt-2 flex items-center">
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Màu sắc:{" "}
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Radio.Group onChange={onSelectAttributed}>
              {product.product_attributes.map((item, index) => (
                <Radio.Button key={`attribute-${index}`} value={item}>
                  {item.color}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
        </Row>
        <Row gutter={[10, 10]} className="mt-2 flex items-center">
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Kích cỡ:
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Radio.Group value={options} onChange={onSelectOption}>
              {attribute &&
                attribute.options.map((item, index) => (
                  <Radio.Button key={`options-${index}`} value={item}>
                    {item.size}
                  </Radio.Button>
                ))}
            </Radio.Group>
          </Col>
        </Row>
        <Row gutter={[10, 10]} className="mt-2 flex items-center">
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Số lượng hàng còn lại:
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            {options && options.options_quantity}
          </Col>
        </Row>
        <Row gutter={[10, 10]} className="mt-2">
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Mô tả sản phẩm:
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            xl={18}
            className="whitespace-pre-wrap	"
            span={18}
          >
            {product.product_description}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductInfor;
