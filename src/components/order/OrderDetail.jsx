import { useEffect, useState } from "react";
import { getOrderDetail } from "../../service/orderAPI";
import { Card, Col, Row, Spin, Table } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../../service/customAxios";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";

const OrderDetail = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(order);
  const getData = async () => {
    try {
      setOrder(await getOrderDetail(queryParams.get("id")));
      setIsLoading(false);
    } catch (error) {
      goBack();
    }
  };
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getData();
  }, []);
  const formatDate = (date) => {
    const format = new Date(date);

    const day = String(format.getUTCDate()).padStart(2, "0");
    const month = String(format.getUTCMonth() + 1).padStart(2, "0");
    const year = format.getUTCFullYear();
    const hours = String(format.getUTCHours()).padStart(2, "0");
    const minutes = String(format.getUTCMinutes()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
  };
  const columns = [
    {
      title: "STT",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Ảnh",
      render: (record) => {
        return (
          <img
            src={`${API}/uploads/${record?.product_thumb[0]}`}
            className="w-10 h-10"
          />
        );
      },
    },
    {
      title: "Tên sản phẩm",
      render: (record) => {
        return <p>{record.product_name}</p>;
      },
    },
    {
      title: "Giá",
      render: (record) => {
        return (
          <p>
            {record.product_price.toLocaleString("en-US", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        );
      },
    },
    {
      title: "Hành động",
      render: (record) => {
        return (
          <Button
            onClick={() => viewDetailHandle(record)}
            variant="contained"
            color="success"
            size="small"
          >
            Xem chi tiết
          </Button>
        );
      },
    },
  ];
  const viewDetailHandle = (product) => {
    navigate(`/productdetail?${product.product_slug}&id=${product._id}`);
  };
  const checkStatus = (status) => {
    switch (status) {
      case "pending":
        return "Chờ xác nhận";
      case "confirmed":
        return "Xác nhận";
      case "shipped":
        return "Đăng giao";
      case "cancelled":
        return "Đã hủy";
      case "delivered":
        return "Đã giao";
    }
  };
  if (isLoading) return <Spin fullscreen />;
  return (
    <div>
      <Row gutter={[10, 10]} justify="space-between">
        <Col className="w-full ">
          <Card
            title="TỔNG QUAN"
            bordered={false}
            className="border-2 border-inherit"
          >
            <Row gutter={[0, 10]} justify="space-between">
              <Col>
                <p className="break-words">Đơn hàng: {queryParams.get("id")}</p>
                <p>Thời gian đặt hàng: {formatDate(order.updatedAt)}</p>
              </Col>
              <Col>
                <p
                  style={{
                    borderColor: "inherit",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  className={
                    order.order_status === "pending"
                      ? "bg-yellow-500"
                      : order.order_status === "comfirmed"
                      ? "bg-green-500"
                      : order.order_status === "delivered"
                      ? "bg-green-500"
                      : order.order_status === "canceled"
                      ? "bg-red-500"
                      : order.order_status === "shipped" && "bg-green-500"
                  }
                >
                  {checkStatus(order.order_status)}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[10, 10]} className="mt-2" justify="space-between">
        <Col className="md:w-1/2 w-full">
          <Card
            title="CỬA HÀNG"
            bordered={false}
            className="border-2 border-inherit h-52"
          >
            <p>{order.shopdetailInOrder[0].nameShop}</p>
            <p>Địa chỉ: {order.shopdetailInOrder[0]?.address}</p>
            <p>Số điện thoại: 0{order.shopdetailInOrder[0]?.phoneNumberShop}</p>
            <p>Địa chỉ: {order.shopInOrder[0].email}</p>
          </Card>
        </Col>
        <Col className="md:w-1/2 w-full">
          <Card
            title="KHÁCH HÀNG"
            className="border-2 border-inherit h-52"
            bordered={false}
          >
            <p>{order.order_userId[0].fullName}</p>
            <p>Số điện thoại: 0{order.order_userId[0].phoneNumber}</p>
            <p>Địa chỉ nhận hàng: {order.order_shipping?.Address}</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={[10, 10]} className="mt-2">
        <Col className="w-full md:w-1/2">
          <Table
            dataSource={order.productInfo[0]}
            columns={columns}
            scroll={{ x: 400 }}
          />
        </Col>
        <Col className="w-full md:w-1/2">
          <Card
            title="THANH TOÁN"
            bordered={false}
            className="border-2 border-inherit"
          >
            <Row className="my-2" justify="space-between">
              <Col>Phương thức thanh toán: </Col>
              <Col>{order.order_payment}</Col>
            </Row>
            <Row className="my-2" justify="space-between">
              <Col>Giá tiền: </Col>
              <Col>
                {order.order_checkout.totalCheckout.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </Col>
            </Row>
            <Row className="my-2" justify="space-between">
              <Col>Giảm giá : </Col>
              <Col>
                {order.order_checkout.totalDiscount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </Col>
            </Row>
            <Row className="my-2" justify="space-between">
              <Col>Phí vận chuyển : </Col>
              <Col>
                {order.order_checkout.feeShip.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </Col>
            </Row>
            <hr />
            <Row className="my-2" justify="space-between">
              <Col className="text-xl">Tổng: </Col>
              <Col className="text-xl">
                {(
                  order.order_checkout.totalPrice +
                  order.order_checkout.feeShip -
                  order.order_checkout.totalDiscount
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;
