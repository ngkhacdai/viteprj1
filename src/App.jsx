import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import { useEffect, useState } from "react";
import "./css/app/App.css";
import avatar from "./assets/avatar.jpg";
import { Button, Dropdown, Row } from "antd";
const App = () => {
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
    <>
      <div className="sticky top-0 left-0">
        <SideBar />
      </div>
      {/* <div className="header-container">
            <h3>{tiltle}</h3>

            <div className="infor-header">
              <img src={avatar} className="img-header" alt="" />
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <Button style={{ fontSize: "15px", color: "black" }}>
                  Nguyễn Khắc Đại
                </Button>
              </Dropdown>
            </div>
          </div> */}
    </>
  );
};

export default App;
