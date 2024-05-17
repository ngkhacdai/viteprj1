import { useEffect, useState } from "react";
import { Spin } from "antd/es";
import { getOrder } from "../../service/orderAPI";
import TableOrder from "./TableOrder";
const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setOrderData(await getOrder());
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
      <TableOrder orderData={orderData} />
    </div>
  );
};

export default Order;
