// import React from 'react';

import { Image, Table, Button, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../service/customAxios";
import {
  showModalDelete,
  showModalupdates,
} from "../../redux/slice/CategorySlice";

const TableCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.data);
  const colunms = [
    {
      title: "STT",
      render: (text, record, index) => {
        return index + 1;
      },
      key: "stt",
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Ảnh",
      dataIndex: "category_thumb",
      key: "category_thumb",
      render: (categoryThumb) => {
        return (
          <Image
            width={50}
            height={50}
            src={`${API}/${categoryThumb}`}
            alt=""
          />
        );
      },
    },
    {
      title: "Tên danh mục",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Flex>
            <Button
              type="default"
              onClick={() => {
                showUpadteModal(
                  record._id,
                  record.category_name,
                  record.category_thumb
                );
              }}
            >
              Update
            </Button>
            <Button onClick={() => showDeleteModal(record._id)} danger>
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];
  const showDeleteModal = (_id) => {
    dispatch(showModalDelete(_id));
  };
  const showUpadteModal = (_id, category_name, thumb) => {
    dispatch(
      showModalupdates({
        _id,
        category_name,
        thumb: `${thumb}`,
        titleModal: "Sửa danh mục",
      })
    );
  };
  return (
    <div>
      <Table columns={colunms} dataSource={data} />
    </div>
  );
};

export default TableCategory;
