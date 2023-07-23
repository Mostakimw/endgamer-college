import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Reviews = () => {
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_LINK}/reviews`);
      return res.data;
    },
  });
  return (
    <div className="mt-20">
      <SectionTitle title="Review" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="swiper-slide"
            style={{ maxWidth: "300px" }}
          >
            <div key={review.id} className="bg-white p-4 rounded shadow-md">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-2">
                  <img
                    src={review.candidateProfilePic}
                    alt="user profile"
                    className="rounded-full w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">
                    {review.candidateName}
                  </span>
                  <span className="text-gray-600">{review.reviewDate}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl">{review.rating}</span>
              </div>
              <p className="text-gray-800 mt-3">{review.reviewText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-3xl mx-auto"></div>
    </div>
  );
};

export default Reviews;
