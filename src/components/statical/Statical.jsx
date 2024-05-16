// import React from "react";
import HeaderStatical from "./HeaderStatical";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatical } from "../../redux/slice/StaticalSlice";
import { useEffect, useState } from "react";
import ContentStatical from "./ContentStatical";
import { Spin } from "antd";
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
    return <Spin fullscreen />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      <div className="w-full">
        <HeaderStatical />
      </div>
      <ContentStatical />
    </>
  );
};

export default Statical;
