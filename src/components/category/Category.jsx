// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetAllCategory,
  showModal,
} from "../../redux/slice/CategorySlice";
import TableCategory from "./TableCategory";
import ModalCategory from "./ModalCategory";
import ModalDelete from "./ModalDelete";
import { Button, Spin } from "antd";

const Category = () => {
  const [spinning, setSpinning] = useState(false);

  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.category.isLoading);
  const isError = useSelector((state) => state.category.isError);
  useEffect(() => {
    dispatch(fetchGetAllCategory());
  }, []);

  if (isLoading) {
    return <Spin fullscreen />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      <div>
        <Button
          onClick={() => dispatch(showModal({ titleModal: "Thêm danh mục" }))}
          type="primary"
        >
          Thêm danh mục
        </Button>
        <ModalCategory />
        <ModalDelete />
      </div>
      <div className="table-category">
        <TableCategory />
      </div>
    </div>
  );
};

export default Category;
