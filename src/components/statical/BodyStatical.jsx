import { Image, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { API } from "../../service/customAxios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BodyStatical = () => {
  const data = useSelector((state) => state.statical.data);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "product_thumb",
      key: "product_thumb",
      render: (productThumb) => (
        <Image
          width={50}
          height={50}
          src={`${API}/uploads/${productThumb[0]}`}
          alt=""
        />
      ),
    },
    {
      title: "Tên",
      render: (record) => {
        return <p className="line-clamp-1">{record.product_name}</p>;
      },
      key: "product_name",
    },
    {
      title: "Giá",
      render: (record) =>
        record.product_price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        }),
    },
    {
      title: "Tồn kho",
      dataIndex: "product_quantity",
    },
    {
      title: "Đã bán",
      dataIndex: "product_sold",
      key: "product_sold",
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
      <h3 className="text-lg font-bold">Top 5 sản phẩm bán chạy</h3>
      <Table
        className="table-statical mt-2"
        dataSource={data.topProductSold}
        columns={columns}
        scroll={{ x: 400 }}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default BodyStatical;
