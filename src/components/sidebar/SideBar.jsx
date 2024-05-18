import "../../css/sidebar/sidebar.css";
import { useEffect, useState } from "react";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom/dist";
import {
  MdCategory,
  MdDiscount,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FaRegMoneyBillAlt, FaStore } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import avatar from "../../assets/avatar.jpg";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const [collap, setCollap] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [tiltle, setTitle] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Update the title based on the current pathname
    switch (location.pathname) {
      case "/statical":
        setTitle("Thống kê");
        break;
      case "/":
        setTitle("Thống kê");
        break;
      case "/category":
        setTitle("Danh mục");
        break;
      case "/product":
        setTitle("Sản phẩm");
        break;
      case "/store":
        setTitle("Cửa hàng");
        break;
      case "/customer":
        setTitle("Khách hàng");
        break;
      case "/discount":
        setTitle("Khuyến mãi");
        break;
      case "/order":
        setTitle("Đơn hàng");
        break;
      case "/productdetail":
        setTitle("Chi tiết sản phẩm");
        break;
      case "/storedetail":
        setTitle("Chi tiết cửa hàng");
        break;
      case "/customerdetail":
        setTitle("Chi tiết khách hàng");
        break;
      case "/orderdetail":
        setTitle("Chi tiết đơn hàng");
        break;
      // Add more cases for other routes if needed
      default:
        setTitle("");
        break;
    }
  }, [location]);
  const logOutHandle = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userID", "");
    navigate("/login");
  };
  const items = [
    {
      key: "1",
      label: <div onClick={logOutHandle}>Đăng xuất</div>,
    },
  ];
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collap}
        onCollapse={(value) => setCollap(value)}
        className="top-0 left-0 h-screen z-10"
        style={{ position: "sticky" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <NavLink to={"/"}>Home</NavLink>,
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: <NavLink to={"/category"}>Category</NavLink>,
            },
            {
              key: "3",
              icon: <MdOutlineProductionQuantityLimits />,
              label: <NavLink to={"/product"}>Product</NavLink>,
            },
            {
              key: "4",
              icon: <FaStore />,
              label: <NavLink to={"/store"}>Store</NavLink>,
            },
            {
              key: "5",
              icon: <IoPeopleCircleOutline />,
              label: <NavLink to={"/customer"}>Customer</NavLink>,
            },
            {
              key: "6",
              icon: <MdDiscount />,
              label: <NavLink to={"/discount"}>Discount</NavLink>,
            },
            {
              key: "7",
              icon: <FaRegMoneyBillAlt />,
              label: <NavLink to={"/order"}>Order</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header-container">
            <h3 className="text-xs font-bold sm:text-xl">{tiltle}</h3>

            <div className="infor-header">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <p>Admin</p>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            // minHeight: "100vh",
            width: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="p-2"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
