import "../../css/sidebar/sidebar.css";
import { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom/dist";
import {
  MdCategory,
  MdDiscount,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const [collap, setCollap] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collap}>
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
          <Button
            type="text"
            icon={collap ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollap(!collap)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: "100vh",
            width: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
