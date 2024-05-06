import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalDelete,
  fetchDeleteCategory,
  fetchGetAllCategory,
} from "../../redux/slice/CategorySlice";

const ModalDelete = () => {
  const dispatch = useDispatch();
  const id_category = useSelector((state) => state.category.id_category);
  const isModalDeleteShow = useSelector(
    (state) => state.category.isModalDeleteShow
  );
  const handleCancel = () => {
    dispatch(closeModalDelete());
  };
  const handleOk = async () => {
    const form = { id_category };
    console.log(form);
    await dispatch(fetchDeleteCategory(form));
    await dispatch(fetchGetAllCategory());
    handleCancel();
  };
  return (
    <div>
      <Modal
        title="Xóa danh mục"
        open={isModalDeleteShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có muốn xóa category này không?</p>
      </Modal>
    </div>
  );
};

export default ModalDelete;
