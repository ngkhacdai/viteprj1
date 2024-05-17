import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom/dist";
import ProductSlide from "./ProductSlide";
import { Col, Row } from "antd/es";
import ProductInfor from "./ProductInfor";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  console.log(product);
  const goBack = () => {
    navigate("/product");
  };
  return (
    <div>
      <IoMdArrowBack onClick={goBack} className="cursor-pointer text-3xl" />
      <Row gutter={[10, 10]}>
        <Col>
          <ProductSlide product={product} />
        </Col>
        <Col>
          <ProductInfor product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
