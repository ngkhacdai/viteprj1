import { Avatar, Card, Col, Row } from "antd";
import "../../css/statical/statical.css";
import { useSelector } from "react-redux";
import Meta from "antd/es/card/Meta";
import category from "../../assets/category.png";
import discount from "../../assets/discount.png";
import order from "../../assets/bill.png";
import product from "../../assets/products.png";
import shop from "../../assets/storecolor.png";
import user from "../../assets/people.png";
const HeaderStatical = () => {
  const data = useSelector((state) => state.statical.data);
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2">Tổng quan</h3>
      </div>
      <Row justify="start" gutter={[10, 0]}>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={category} />}
                title="Danh mục"
                description={data.countCategory}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={discount} />}
                title="Giảm giá"
                description={data.countDiscount}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={order} />}
                title="Đơn hàng"
                description={data.countOrders}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={product} />}
                title="Sản phẩm"
                description={data.countProducts}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={shop} />}
                title="Cửa hàng"
                description={data.countShops}
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={4}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Meta
                avatar={<Avatar src={user} />}
                title="Người dùng"
                description={data.countUsers}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderStatical;
