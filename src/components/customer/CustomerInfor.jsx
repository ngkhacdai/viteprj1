import { Col, Row } from "antd";
import { API } from "../../service/customAxios";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const CustomerInfor = ({ user }) => {
  return (
    <Row>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} className="">
        <img
          className="rounded-full border-inherit border-2 block mx-auto max-h-[30rem]"
          src={`${API}/${user.information?.avatar}`}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} className="mt-2">
        <p>
          <p className="text-xl">Thông tin khách hàng: </p>
          <Row className="flex items-center">
            <Col>
              <MdDriveFileRenameOutline />
            </Col>
            <Col>
              <p className="p-2">Tên khách hàng: </p>
            </Col>
            <Col>{user.information?.fullName}</Col>
          </Row>
        </p>
        <Row className="flex items-center">
          <Col>
            <SiGmail />
          </Col>
          <Col className="p-2">Email cửa hàng: </Col>
          <Col>{user.email}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <FaPhone />
          </Col>
          <Col className="p-2">Số điện thoại: </Col>
          <Col>0{user.information?.phoneNumber}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <FaMapMarkerAlt />
          </Col>
          <Col className="p-2">Địa chỉ: </Col>
          <Col>{user.information?.address[0]?.customAddress}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CustomerInfor;
