import { Button } from "@mui/material";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const OrderCustomer = ({ order }) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "STT",
      render: (record, text, index) => {
        return index + 1;
      },
    },
    {
      title: "SĐT khách hàng",
      render: (record) => {
        return (
          <div>
            {record?.order_userId[0]?.phoneNumber ? (
              <p>0{record?.order_userId[0]?.phoneNumber}</p>
            ) : (
              <p>Chưa cập nhật</p>
            )}
          </div>
        );
      },
    },
    {
      title: "Tên cửa hàng",
      render: (record) => {
        return <p>{record.order_products[0]?.shopId.nameShop}</p>;
      },
    },
    {
      title: "Sản phẩm",
      render: (record) => {
        return <p>{record?.item_products[0]?.productId.product_name}</p>;
      },
    },
    {
      title: "Tổng tiền",
      render: (record) => {
        return (
          <p>
            {record.order_checkout?.totalCheckout.toLocaleString("en-US", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        );
      },
    },
    {
      title: "Trạng thái",
      render: (record) => {
        return <div>{checkStatus(record.order_status)}</div>;
      },
    },
    {
      title: "Hành động",
      render: (record) => {
        return (
          <Button
            onClick={() => viewDetailHandle(record)}
            variant="contained"
            color="success"
            size="small"
          >
            Xem chi tiết
          </Button>
        );
      },
    },
  ];
  const viewDetailHandle = (record) => {
    navigate(`/orderdetail?id=${record._id}`);
  };
  const checkStatus = (status) => {
    switch (status) {
      case "pending":
        return "Chờ xác nhận";
      case "confirmed":
        return "Xác nhận";
      case "shipped":
        return "Đăng giao";
      case "cancelled":
        return "Đã hủy";
      case "delivered":
        return "Đã giao";
    }
  };
  return (
    <div>
      <Table columns={columns} scroll={{ x: 500 }} dataSource={order} />
    </div>
  );
};

export default OrderCustomer;
