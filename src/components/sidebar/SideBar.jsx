import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from "../../assets/trustybuy.png";
import "../../css/sidebar/sidebar.css";
import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { PiList } from "react-icons/pi";
import { useState } from "react";

const SideBar = () => {
  const [collap, setCollap] = useState(true);
  const showSideBar = () => {
    setCollap(!collap);
  };
  return (
    <Sidebar collapsed={collap}>
      <div className="btn-header">
        <button onClick={showSideBar} className="btn-nav">
          <PiList />
        </button>
      </div>
      <div className="sidebar-header">
        <img className="logo-sidebar" src={logo} alt="" />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem
          icon={<MdDashboardCustomize />}
          component={<NavLink to={"/"} />}
        >
          Thống kê
        </MenuItem>
        <MenuItem
          icon={<MdCategory />}
          component={<NavLink to={"/category"} />}
        >
          Danh mục
        </MenuItem>
        <MenuItem
          icon={<MdOutlineProductionQuantityLimits />}
          component={<NavLink to={"/product"} />}
        >
          Sản phẩm
        </MenuItem>
        <MenuItem icon={<CiShop />} component={<NavLink to={"/store"} />}>
          Cửa hàng
        </MenuItem>
        <MenuItem
          icon={<AiTwotoneCustomerService />}
          component={<NavLink to={"/customer"} />}
        >
          Khách hàng
        </MenuItem>
        <MenuItem
          icon={<MdOutlineDiscount />}
          component={<NavLink to={"/discount"} />}
        >
          Giảm giá
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
