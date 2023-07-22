import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
    {
      id: 1,
      collegeId: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great college with excellent facilities and supportive staff.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      collegeId: 1,
      userName: "Jane Smith",
      rating: 5,
      reviewText:
        "I had an amazing experience at this college. Highly recommended!",
      date: "August 2, 2023",
    },
  ];

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
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                  {review.userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">
                    {review.userName}
                  </span>
                  <span className="text-gray-600">{review.date}</span>
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
