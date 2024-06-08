import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/slice/AccessSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/trustybuy.png";
const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.access.isLogin);
  const isError = useSelector((state) => state.access.isError);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const form = {
      email: values.email,
      password: values.password,
      role: "Admin",
    };
    await dispatch(fetchLogin(form));
    if (isLogin || localStorage.getItem("token")) {
      toast.success("Đăng nhập thành công");
      navigate("/");
    }
    if (isError) {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  const onFinishFailed = () => {
    toast.error("Hãy nhập đầy đủ các trường");
  };
  return (
    <div className="md:w-1/3 w-5/6 md:bg-none bg-white opacity-95 md:opacity-85 h-2/3 border-inherit border-2 rounded-xl shadow-lg flex flex-col justify-center items-center ">
      <img className="w-1/4" src={logo} alt="" />
      <p className="text-2xl font-bold text-center">Đăng nhập</p>
      <Form
        name="basic"
        layout="vertical"
        style={{
          width: "80%",
          opacity: 100,
          color: "white",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<p className="">Tài khoản</p>}
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label={<p className="">Mật khẩu</p>}
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full rounded-full font-bold"
            type="primary"
            htmlType="submit"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
