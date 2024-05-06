// import React from "react";
import HeaderStatical from "./HeaderStatical";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatical } from "../../redux/slice/StaticalSlice";
import { useEffect, useState } from "react";
import BodyStatical from "./BodyStatical";
import OrderChart from "./OrderChart";
import BarChartStatical from "./BarcharStatical";
import { Button, Spin } from "antd";
const Statical = () => {
  const [spinning, setSpinning] = useState(false);

  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.statical.isLoading);
  const isError = useSelector((state) => state.statical.isError);
  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchStatical());
    };
    getData();
  }, []);
  if (isLoading) {
    return (
      <div className="loading-container">
        <div>
          <Button onClick={showLoader}>Show fullscreen for 3s</Button>
          <Spin spinning={spinning} fullscreen />
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      <div className="headerstatical">
        <HeaderStatical />
      </div>
      <div className="contentstatical">
        <BodyStatical />
        <BarChartStatical />
      </div>
      <OrderChart />
    </>
  );
};

export default Statical;
