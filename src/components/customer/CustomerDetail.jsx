import { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import { Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../service/userAPI";
import OrderCustomer from "./OrderCustomer";
import CustomerInfor from "./CustomerInfor";
const { Header, Content } = Layout;

const CustomerDetail = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedKey, setSelectedKey] = useState("1");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(userData);
  const getData = async () => {
    try {
      setUserData(await getUser(queryParams.get("id")));
      setIsLoading(false);
    } catch (error) {
      goBack();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };
  const goBack = () => {
    navigate(-1);
  };
  const items = [
    {
      key: "1",
      label: "Chi tiết khách hàng",
    },
    {
      key: "2",
      label: "Đơn hàng đã đặt",
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <CustomerInfor user={userData.user} />;
      case "2":
        return <OrderCustomer order={userData.order} />;
      default:
        return <div></div>;
    }
  };
  if (isLoading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div className="demo-logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={handleMenuClick}
            style={{
              color: "black",
              flex: 1,
              minWidth: 0,
              backgroundColor: "white",
            }}
          />
        </Header>
        <Content
          style={{
            padding: "10px",
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 10,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default CustomerDetail;
