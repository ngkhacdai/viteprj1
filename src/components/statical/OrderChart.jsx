import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

// Register the necessary components
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const OrderChart = () => {
  const data = useSelector((state) => state.statical.data);
  const [chartData, setChartData] = useState(null);

  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   // text: "Chart.js Line Chart",
      // },
    },
  };

  useEffect(() => {
    if (data && data.orderConfirmedByMonth && data.orderCancelledByMonth) {
      setChartData({
        labels,
        datasets: [
          {
            label: "Đơn hàng xác nhận",
            data: data.orderConfirmedByMonth.map((item) => item.totalOrders),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          {
            label: "Đơn hàng đã hủy",
            data: data.orderCancelledByMonth.map((item) => item.totalOrders),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Đơn hàng đã giao",
            data: data.orderDeliveredByMonth.map((item) => item.totalOrders),
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
          {
            label: "Đơn hàng đang chờ xác nhận",
            data: data.orderPendingByMonth.map((item) => item.totalOrders),
            borderColor: "rgb(255, 206, 86)",
            backgroundColor: "rgba(255, 206, 86, 0.5)",
          },
          {
            label: "Đơn hàng đang giao",
            data: data.orderShippedByMonth.map((item) => item.totalOrders),
            borderColor: "rgb(153, 102, 255)",
            backgroundColor: "rgba(153, 102, 255, 0.5)",
          },
        ],
      });
    }
  }, [data]);

  if (!data) return <p>...Loading</p>;
  if (!chartData) return null;

  return (
    <div>
      <p className="text-lg font-bold">Thống kê đơn hàng</p>
      <Line className="mt-11" options={options} data={chartData} />
    </div>
  );
};

export default OrderChart;
