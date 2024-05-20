import { Button } from "@mui/material";
import { Table } from "antd/es";

const TableDiscount = ({ discountData }) => {
  const columns = [
    {
      title: "STT",
      render: (record, text, index) => {
        return index + 1;
      },
    },
    {
      title: "Tên mã giảm giá",
      dataIndex: "discount_name",
    },
    {
      title: "Số lượng",
      dataIndex: "discount_max_uses",
    },
    {
      title: "Ngày bắt đầu",
      render: (record) => {
        let mydate = new Date(record.discount_start_date);
        function formatDate(date) {
          var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        }
        const date = formatDate(mydate.toDateString());
        return <p>{date}</p>;
      },
    },
    {
      title: "Ngày kết thúc",
      render: (record) => {
        let mydate = new Date(record.discount_end_date);
        function formatDate(date) {
          var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        }
        const date = formatDate(mydate.toDateString());
        return <p>{date}</p>;
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
      <Table columns={columns} scroll={{ x: 500 }} dataSource={discountData} />
    </div>
  );
};

export default TableDiscount;
