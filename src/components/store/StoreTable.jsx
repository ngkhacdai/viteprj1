import { Table } from "antd/es";
import { API } from "../../service/customAxios";
import { Button } from "@mui/material";

const StoreTable = ({ storeData }) => {
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
          <img className="w-16 h-16" src={`${API}/${record.avatarShop}`} />
        );
      },
    },
    {
      title: "Tên cửa hàng",
      dataIndex: "nameShop",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumberShop",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
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
      <Table columns={columns} scroll={{ x: 500 }} dataSource={storeData} />
    </div>
  );
};

export default StoreTable;
