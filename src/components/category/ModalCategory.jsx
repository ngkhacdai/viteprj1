import { PlusOutlined } from "@ant-design/icons";
import { Image, Input, Modal, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  fetchCreateCategory,
  fetchGetAllCategory,
  changeInputName,
} from "../../redux/slice/CategorySlice";
import { useEffect, useState } from "react";
import { API } from "../../service/customAxios";
import { updateCategory } from "../../service/CategoryAPI";
const ModalCategory = () => {
  const dispatch = useDispatch();
  const titleModal = useSelector((state) => state.category.titleModal);
  const isShowModal = useSelector((state) => state.category.isModalShow);
  const categoryName = useSelector((state) => state.category.categoryName);
  const id_category = useSelector((state) => state.category.id_category);
  const url = useSelector((state) => state.category.file);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    if (titleModal === "Sửa danh mục") {
      setFileList([
        {
          name: "image.png",
          status: "done",
          url: `${API}/${url}`,
        },
      ]);
    }
  }, [titleModal, url]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onCloseModal = async () => {
    dispatch(changeInputName(""));
    setFileList([]);

    dispatch(closeModal());
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const onSubmitHandle = async () => {
    const formData = new FormData();

    formData.append("category_name", categoryName);

    if (titleModal != "Sửa danh mục") {
      await fetch(fileList[0].thumbUrl)
        .then((res) => res.blob())
        .then((blob) => {
          formData.append(
            "thumb",
            new File([blob], "Filename.png", { type: "image/png" })
          );
        });
      await dispatch(fetchCreateCategory(formData));
    } else {
      if (fileList[0].url !== `${API}/${url}`) {
        await fetch(fileList[0].thumbUrl)
          .then((res) => res.blob())
          .then((blob) => {
            formData.append(
              "thumb",
              new File([blob], "Filename.png", { type: "image/png" })
            );
          });
        formData.append("id_category", id_category);
        await updateCategory(formData);
      } else {
        console.log(fileList[0]);
        await fetch("http://localhost:5173/src/assets/avatar.jpg", {
          mode: "no-cors",
        })
          .then((res) => {
            console.log("blog", res);
            return res.blob();
          })
          .then((blob) => {
            console.log("blog2", blob);
            console.log(
              new File([blob], "Filename.png", { type: "image/png" })
            );
            formData.append(
              "thumb",
              new File([blob], "Filename.png", { type: "image/png" })
            );
          })
          .catch((err) => {
            console.log(err);
          });
        // formData.append("id_category", id_category);
        // await updateCategory(formData);
      }
    }

    await dispatch(fetchGetAllCategory());
    onCloseModal();
  };

  return (
    <div>
      <Modal
        title={titleModal}
        open={isShowModal}
        onOk={onSubmitHandle}
        onCancel={() => onCloseModal()}
      >
        <Upload
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
        <div>
          <p>Tên danh mục</p>
          <Input
            placeholder="Tên danh mục"
            value={categoryName}
            onChange={(e) => dispatch(changeInputName(e.target.value))}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalCategory;
