import { API } from "../../service/customAxios";
import { Button } from "@mui/material";
import { Table, Tag } from "antd/es";
import { useNavigate } from "react-router-dom";

const TableProduct = ({ product }) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "STT",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Ảnh",
      render: (record) => (
        <img
          src={`${API}/uploads/${record.product_thumb[0]}`}
          className="w-16 h-16"
          alt=""
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      render: (record) => {
        return <p className="line-clamp-1">{record.product_name}</p>;
      },
    },
    {
      title: "Giá sản phẩm",
      render: (record) =>
        record.product_price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        }),
    },
    {
      title: "Số lượng",
      dataIndex: "product_quantity",
    },
    {
      title: "Đánh giá",
      dataIndex: "product_ratingAverage",
    },
    {
      title: "Trạng thái",
      render: (record) => (
        <div>
          {record.isPublished ? (
            <Tag
              color="#87d068
"
            >
              Hiển thị
            </Tag>
          ) : (
            <Tag color="#f50">Ẩn</Tag>
          )}
        </div>
      ),
    },
    {
      title: "Hành động",
      render: (record) => (
        <Button
          onClick={() => viewDetail(record)}
          variant="contained"
          color="success"
          size="small"
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  const viewDetail = (product) => {
    navigate(`/productdetail?${product.product_slug}&id=${product._id}`);
  };

  return (
    <div>
      <Table columns={columns} scroll={{ x: 500 }} dataSource={product} />
    </div>
  );
};

export default TableProduct;
