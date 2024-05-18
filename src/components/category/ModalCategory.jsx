import { PlusOutlined } from "@ant-design/icons";
import { Form, Image, Input, Modal, Upload, notification } from "antd";
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
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (content) => {
    api["error"]({
      message: "Notification Title",
      description: content,
    });
  };
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
    if (!categoryName || fileList.length === 0)
      return openNotificationWithIcon("Hãy điền đầy đủ thông tin");
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
        console.log("fileList", fileList[0]);
        await fetch(fileList[0].url)
          .then((res) => {
            return res.blob();
          })
          .then((blob) => {
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

    dispatch(fetchGetAllCategory());
    onCloseModal();
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title={titleModal}
        open={isShowModal}
        onOk={onSubmitHandle}
        onCancel={() => onCloseModal()}
      >
        <Form layout="vertical">
          <Form.Item name="avatar">
            <Upload
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              accept="image/png, image/jpeg, image/jpg"
              beforeUpload={() => false}
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
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Hãy điền đầy đủ thông tin",
              },
            ]}
            label="Tên danh mục"
          >
            <Input
              placeholder="Tên danh mục"
              value={categoryName}
              onChange={(e) => dispatch(changeInputName(e.target.value))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalCategory;
