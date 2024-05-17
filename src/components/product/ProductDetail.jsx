import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom/dist";
import ProductSlide from "./ProductSlide";
import { Col, Row, Spin } from "antd/es";
import ProductInfor from "./ProductInfor";
import { useEffect, useState } from "react";
import { getProductByID } from "../../service/ProductAPI";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      setProduct(await getProductByID(queryParams.get("id")));
      setIsLoading(false);
    } catch (error) {
      goBack();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const goBack = () => {
    navigate("/product");
  };
  if (isLoading) return <Spin fullscreen />;
  return (
    <div className="p-2">
      <IoMdArrowBack onClick={goBack} className="cursor-pointer text-3xl" />
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={12} lg={11} xl={10}>
          <ProductSlide product={product} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ProductInfor product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
