import { Image, Table } from "antd";
import { API } from "../../service/customAxios";

const TopProduct = ({ detail }) => {
  const topProductSold = detail.topProductSold;
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
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Giá",
      dataIndex: "product_price",
      key: "product_price",
    },
    {
      title: "Đã bán",
      dataIndex: "product_sold",
      key: "product_sold",
    },
  ];
  return (
    <div>
      <Table
        className="table-statical"
        dataSource={topProductSold}
        columns={columns}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default TopProduct;
