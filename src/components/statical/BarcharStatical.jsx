import { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const BarcharStatical = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const data = useSelector((state) => state.statical.data);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data && data.mergedData) {
      const dataArray = [];
      if (selectedYear) {
        const yearData = data.mergedData[selectedYear];
        const yearArray = [
          selectedYear,
          yearData.categoryCount || 0,
          yearData.discountCount || 0,
          yearData.orderCount || 0,
          yearData.productCount || 0,
          yearData.shopCount || 0,
          yearData.userCount || 0,
        ];
        dataArray.push(yearArray);
      } else {
        for (const key in data.mergedData) {
          if (Object.hasOwnProperty.call(data.mergedData, key)) {
            const yearData = data.mergedData[key];
            const yearArray = [
              key,
              yearData.categoryCount || 0,
              yearData.discountCount || 0,
              yearData.orderCount || 0,
              yearData.productCount || 0,
              yearData.shopCount || 0,
              yearData.userCount || 0,
            ];
            dataArray.push(yearArray);
          }
        }
      }
      const dataWithHeader = [
        [
          "Year",
          "Category Count",
          "Discount Count",
          "Order Count",
          "Product Count",
          "Shop Count",
          "User Count",
        ],
        ...dataArray,
      ];
      setChartData(dataWithHeader);
    } else {
      console.error("Invalid data structure or missing mergedData property.");
    }
  }, [data, selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      {chartData ? (
        <>
          <div className="barcharStatical">
            <div className="select-year">
              <select
                id="year-select"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">Select Year</option>
                {Object.keys(data.mergedData).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Chart
                chartType="ColumnChart"
                height="500px"
                data={chartData}
                loader={<div>Loading Chart...</div>}
              />
            </div>
          </div>
        </>
      ) : (
        <div>Loading Chart...</div>
      )}
    </>
  );
};

export default BarcharStatical;
