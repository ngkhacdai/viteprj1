import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/slice/AccessSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const onFinishFailed = (errorInfo) => {
    toast.error("Hãy nhập đầy đủ các trường");
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Emal"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
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
    </>
  );
};

export default LoginForm;
