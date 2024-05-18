import {
  FaAudioDescription,
  FaMapMarkerAlt,
  FaPhone,
  FaStore,
} from "react-icons/fa";
import { API } from "../../service/customAxios";
import { SiGmail } from "react-icons/si";
import { Col, Row } from "antd";
import { RiUserFollowFill } from "react-icons/ri";

const Detail = ({ store }) => {
  return (
    <Row>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} className="">
        <img
          className="rounded-full border-inherit border-2 block mx-auto max-h-[30rem]"
          src={`${API}/${store.storeDetail.avatarShop}`}
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} className="mt-2">
        <p>
          <p className="text-xl">Thông tin cửa hàng: </p>
          <Row className="flex items-center">
            <Col>
              <FaStore />
            </Col>
            <Col>
              <p className="p-2">Cửa hàng: </p>
            </Col>
            <Col>{store.storeDetail.nameShop}</Col>
          </Row>
        </p>
        <Row className="flex items-center">
          <Col>
            <SiGmail />
          </Col>
          <Col className="p-2">Email cửa hàng: </Col>
          <Col>{store.shop?.email}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <FaMapMarkerAlt />
          </Col>
          <Col className="p-2">Địa chỉ: </Col>
          <Col>{store.storeDetail.address}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <FaPhone />
          </Col>
          <Col className="p-2">Số điện thoại: </Col>
          <Col>0{store.storeDetail?.phoneNumberShop}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <RiUserFollowFill />
          </Col>
          <Col className="p-2">Số người theo dõi: </Col>
          <Col>{store.storeDetail.follower.length}</Col>
        </Row>
        <Row className="flex items-center">
          <Col>
            <FaAudioDescription />
          </Col>
          <Col className="p-2">Chi tiết: </Col>
          <Col>{store.storeDetail.des}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Detail;
