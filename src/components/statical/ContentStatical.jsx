import BodyStatical from "./BodyStatical";
import BarChartStatical from "./BarcharStatical";
import OrderChart from "./OrderChart";
import { Col, Row } from "antd";

const ContentStatical = () => {
  return (
    <div>
      <Row gutter={[10, 12]} justify="space-between">
        <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={12}>
          <BodyStatical />
        </Col>
        <Col className="gutter-row" xs={20} sm={22} md={22} lg={22} xl={12}>
          <BarChartStatical />
        </Col>
        <Col className="gutter-row" xs={20} sm={22} md={22} lg={22} xl={12}>
          <OrderChart />
        </Col>
      </Row>
    </div>
  );
};

export default ContentStatical;
