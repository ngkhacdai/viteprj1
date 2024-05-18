import BodyStatical from "./BodyStatical";
import BarChartStatical from "./BarcharStatical";
import OrderChart from "./OrderChart";
import { Col, Row } from "antd";

const ContentStatical = () => {
  return (
    <div className="mt-2">
      <Row gutter={[0, 0]} justify="space-between">
        <Col className="gutter-row" xs={24} sm={22} md={22} lg={22} xl={12}>
          <BarChartStatical />
        </Col>
        <Col className="gutter-row" xs={24} sm={22} md={22} lg={22} xl={12}>
          <OrderChart />
        </Col>
        <Col className="gutter-row" span={24}>
          <BodyStatical />
        </Col>
      </Row>
    </div>
  );
};

export default ContentStatical;
