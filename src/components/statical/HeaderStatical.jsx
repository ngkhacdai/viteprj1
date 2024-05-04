import { Avatar, Card } from "antd";
import "../../css/statical/statical.css";
import { useSelector } from "react-redux";
import Meta from "antd/es/card/Meta";
import category from "../../assets/category.png";
import discount from "../../assets/discount.png";
import order from "../../assets/bill.png";
import product from "../../assets/products.png";
import shop from "../../assets/storecolor.png";
import user from "../../assets/people.png";
const HeaderStatical = () => {
  const data = useSelector((state) => state.statical.data);

  return (
    <div>
      <div>
        <h3 className="title">Tổng quan</h3>
      </div>
      <div className="card-statical">
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar alt="" src={category} />}
            title="Category"
            description={data.countCategory}
          />
        </Card>
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar src={discount} />}
            title="Discount"
            description={data.countDiscount}
          />
        </Card>
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar src={order} />}
            title="Order"
            description={data.countOrders}
          />
        </Card>
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar src={product} />}
            title="Product"
            description={data.countProducts}
          />
        </Card>
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar src={shop} />}
            title="Shop"
            description={data.countShops}
          />
        </Card>
        <Card
          style={{
            width: 200,
          }}
        >
          <Meta
            avatar={<Avatar src={user} />}
            title="User"
            description={data.countUsers}
          />
        </Card>
      </div>
    </div>
  );
};

export default HeaderStatical;
