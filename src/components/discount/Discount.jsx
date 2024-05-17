import { useEffect, useState } from "react";
import { getDiscount } from "../../service/discountAPI";
import { Spin } from "antd/es";
import TableDiscount from "./TableDiscount";

const Discount = () => {
  const [discountData, setDiscountData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setDiscountData(await getDiscount());
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      <TableDiscount discountData={discountData} />
    </div>
  );
};

export default Discount;
