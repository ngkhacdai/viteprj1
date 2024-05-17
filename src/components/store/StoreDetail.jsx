import { useEffect, useState } from "react";
import { getShopDetail, statisticalShop } from "../../service/ShopAPI";
import { Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import Detail from "./Detail";
import Revenue from "./Revenue";
import Order from "./Order";
import TopProduct from "./TopProduct";
const { Header, Content } = Layout;

const StoreDetail = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedKey, setSelectedKey] = useState("1");
  const [detail, setDetail] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const goBack = () => {
    navigate("/store");
  };
  const getData = async () => {
    try {
      setStore(await getShopDetail(queryParams.get("id")));
      setDetail(await statisticalShop(queryParams.get("id")));
      setIsLoading(false);
    } catch (error) {
      goBack();
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const items = [
    {
      key: "1",
      label: "Chi tiết cửa hàng",
    },
    {
      key: "2",
      label: "Doanh thu",
    },
    {
      key: "3",
      label: "Đơn hàng",
    },
    {
      key: "4",
      label: "Danh sách sản phẩm bán chạy",
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <Detail store={store} />;
      case "2":
        return <Revenue detail={detail} />;
      case "3":
        return <Order detail={detail} />;
      case "4":
        return <TopProduct detail={detail} />;
      default:
        return <Detail store={store} />;
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div>
      <IoMdArrowBack onClick={goBack} className="cursor-pointer text-3xl" />
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={handleMenuClick}
            style={{
              flex: 1,
              minWidth: 0,
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

export default StoreDetail;
