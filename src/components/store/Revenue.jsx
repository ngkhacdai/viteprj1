import { Chart } from "react-google-charts";

const Revenue = ({ detail }) => {
  const revenue = detail.revenue;
  const data = [["Month", "Total Revenue"]];

  revenue.forEach((entry) => {
    data.push([entry.month, entry.totalRevenue]);
  });
  return (
    <div>
      <Chart chartType="Line" width="100%" height="400px" data={data} />
    </div>
  );
};

export default Revenue;
