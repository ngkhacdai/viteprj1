import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import { useEffect, useState } from "react";
import "./css/app/App.css";
import avatar from "./assets/avatar.jpg";
import { TbLogout } from "react-icons/tb";
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
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <div className="container" style={{ flex: 1 }}>
          <div className="header-container">
            <h2>{tiltle}</h2>
            <div className="infor-header">
              <img src={avatar} alt="" />
              <div>
                <p>Admin</p>
                <p>Nguyễn Khắc Đại</p>
              </div>
              <button onClick={logOutHandle}>
                <TbLogout />
              </button>
            </div>
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
