import { Swiper, SwiperSlide } from "swiper/react";
import { API } from "../../service/customAxios";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const ProductSlide = ({ product }) => {
  return (
    <div>
      <Swiper slidesPerView={1} modules={[Navigation, A11y]} navigation>
        {product.product_thumb.length > 0 &&
          product.product_thumb.map((item, index) => {
            return (
              <SwiperSlide key={`slide-${index}`}>
                <img
                  className="min-h-[30rem] h-[30rem] w-full"
                  src={`${API}/uploads/${item}`}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductSlide;
