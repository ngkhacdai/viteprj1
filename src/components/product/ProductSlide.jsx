import { Swiper, SwiperSlide } from "swiper/react";
import { API } from "../../service/customAxios";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const ProductSlide = ({ product }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, A11y]}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[28rem]"
      >
        {product.product_thumb.map((item, index) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <img src={`${API}/uploads/${item}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlide;
