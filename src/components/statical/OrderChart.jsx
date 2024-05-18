import { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const OrderChart = () => {
  const data = useSelector((state) => state.statical.data);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data.length !== 0) {
      const months = Array.from({ length: 12 }, (_, i) => i + 1);
      const mergedData = [
        [
          "Month",
          "Cancelled Orders",
          "Confirmed Orders",
          "Delivered Orders",
          "Pending Orders",
          "Shipped Orders",
        ],
      ];
      months.forEach((month) => {
        const cancelled =
          data.orderCancelledByMonth.find((item) => item._id === month)
            ?.totalOrders || 0;
        const confirmed =
          data.orderConfirmedByMonth.find((item) => item._id === month)
            ?.totalOrders || 0;
        const delivered =
          data.orderDeliveredByMonth.find((item) => item._id === month)
            ?.totalOrders || 0;
        const pending =
          data.orderPendingByMonth.find((item) => item._id === month)
            ?.totalOrders || 0;
        const shipped =
          data.orderShippedByMonth.find((item) => item._id === month)
            ?.totalOrders || 0;

        mergedData.push([
          month,
          cancelled,
          confirmed,
          delivered,
          pending,
          shipped,
        ]);
      });
      setChartData(mergedData);
    }
  }, [data]);

  const options = {
    chart: {
      title: "Order Statistics by Month",
      subtitle: "Number of Orders",
    },
  };

  return (
    <div>
      {chartData ? (
        <Chart
          chartType="LineChart"
          width="100%"
          data={chartData}
          options={options}
          height={421}
          loader={<div>Loading Chart...</div>}
        />
      ) : (
        <div>Loading Chart...</div>
      )}
    </div>
  );
};

export default OrderChart;
