import { Table } from "antd/es";
import { Button } from "@mui/material";
const TableOrder = ({ orderData }) => {
  console.log(orderData);
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
        return <p>{record.order_checkout?.totalCheckout}</p>;
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
          <Button variant="contained" color="success" size="small">
            Xem chi tiết
          </Button>
        );
      },
    },
  ];
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
      <Table columns={columns} scroll={{ x: 500 }} dataSource={orderData} />
    </div>
  );
};

export default TableOrder;
