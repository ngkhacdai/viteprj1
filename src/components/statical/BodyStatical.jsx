import { Image, Table } from "antd";
import { useSelector } from "react-redux";
import { API } from "../../service/customAxios";

const BodyStatical = () => {
  const data = useSelector((state) => state.statical.data);
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
      <h3>Top bán chạy</h3>
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
