import { Table } from "antd/es";
import { API } from "../../service/customAxios";
import { Button } from "@mui/material";

const TableCustomer = ({ customerData }) => {
  console.log(customerData);
  const columns = [
    {
      title: "STT",
      render: (record, text, index) => {
        return index + 1;
      },
    },
    {
      title: "Ảnh",
      render: (record) => {
        return (
          <img
            className="w-16 h-16"
            src={`${API}/${record?.information?.avatar}`}
          />
        );
      },
    },
    {
      title: "Tên khách",
      render: (record) => {
        return <p>{record.information?.fullName}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Giới tính",
      render: (record) => {
        return <p>{record.information?.gender}</p>;
      },
    },
    {
      title: "Địa chỉ",
      render: (record) => {
        return <p>{record?.information?.address[0]?.customAddress}</p>;
      },
    },
    {
      title: "Trạng thái",
      render: (record) => {
        return <div>{!record.disable ? <p>Hiển thị</p> : <p>Ẩn</p>}</div>;
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
  return (
    <div>
      <Table columns={columns} scroll={{ x: 500 }} dataSource={customerData} />
    </div>
  );
};

export default TableCustomer;
