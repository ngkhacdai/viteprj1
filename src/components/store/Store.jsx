import { useEffect, useState } from "react";
import { getShop } from "../../service/ShopAPI";
import StoreTable from "./StoreTable";
import { Spin } from "antd/es";

const Store = () => {
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setStoreData(await getShop());
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
      <StoreTable storeData={storeData} />
    </div>
  );
};

export default Store;
