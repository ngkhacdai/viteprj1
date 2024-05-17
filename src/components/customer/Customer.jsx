import { useEffect, useState } from "react";
import { getAllUser } from "../../service/userAPI";
import { Spin } from "antd/es";
import TableCustomer from "./TableCustomer";

const Customer = () => {
  const [customerData, setCustomerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setCustomerData(await getAllUser());
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
      <TableCustomer customerData={customerData} />
    </div>
  );
};

export default Customer;
