import { Table } from "antd/es";
import { API } from "../../service/customAxios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StoreTable = ({ storeData }) => {
  const navigate = useNavigate();

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
      render: (record) => {
        return <p>0{record.phoneNumberShop}</p>;
      },
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
          <Button
            onClick={() => {
              viewDetailHandle(record);
            }}
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
    navigate(`/storedetail?${record.nameShop}&id=${record._id}`);
  };
  return (
    <div>
      <Table columns={columns} scroll={{ x: 500 }} dataSource={storeData} />
    </div>
  );
};

export default StoreTable;
