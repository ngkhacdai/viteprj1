import "../../css/sidebar/sidebar.css";
import { useEffect, useState } from "react";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
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
import { FaStore } from "react-icons/fa";
import logo from "../../assets/trustybuy.png";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pathName, setPathName] = useState("");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [tiltle, setTitle] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setPathName(location.pathname);
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
        collapsed={collapsed}
        trigger={null}
        onCollapse={(value) => setCollapsed(value)}
        className="top-0 left-0 h-screen z-10 sm:block hidden"
        style={{ position: "sticky", backgroundColor: "white" }}
      >
        <div className="demo-logo-vertical">
          <img src={logo} alt="" />,
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathName]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: <NavLink to={"/"}>Trang chủ</NavLink>,
            },
            {
              key: "/category",
              icon: <MdCategory />,
              label: <NavLink to={"/category"}>Danh mục</NavLink>,
            },
            {
              key: "/product",
              icon: <MdOutlineProductionQuantityLimits />,
              label: <NavLink to={"/product"}>Sản phẩm</NavLink>,
            },
            {
              key: "/store",
              icon: <FaStore />,
              label: <NavLink to={"/store"}>Cửa hàng</NavLink>,
            },
            // {
            //   key: "/customer",
            //   icon: <IoPeopleCircleOutline />,
            //   label: <NavLink to={"/customer"}>Customer</NavLink>,
            // },
            {
              key: "/discount",
              icon: <MdDiscount />,
              label: <NavLink to={"/discount"}>Giảm giá</NavLink>,
            },
            // {
            //   key: "/order",
            //   icon: <FaRegMoneyBillAlt />,
            //   label: <NavLink to={"/order"}>Order</NavLink>,
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="sticky top-0 bg-white z-10"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header-container p-0">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h3 className="text-xs font-bold sm:text-xl">{tiltle}</h3>

            <div className="infor-header">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <p className="cursor-pointer">Admin</p>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Menu
          className={`sticky top-16 overflow-hidden bg-white w-full z-10 sm:hidden block transition duration-1000  ${
            !collapsed ? "max-h-0" : "max-h-full"
          }`}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: <NavLink to={"/"}>Trang chủ</NavLink>,
            },
            {
              key: "/category",
              icon: <MdCategory />,
              label: <NavLink to={"/category"}>Danh mục</NavLink>,
            },
            {
              key: "/product",
              icon: <MdOutlineProductionQuantityLimits />,
              label: <NavLink to={"/product"}>Sản phẩm</NavLink>,
            },
            {
              key: "/store",
              icon: <FaStore />,
              label: <NavLink to={"/store"}>Cửa hàng</NavLink>,
            },
            {
              key: "/discount",
              icon: <MdDiscount />,
              label: <NavLink to={"/discount"}>Giảm giá</NavLink>,
            },
          ]}
          mode="inline"
        />

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
