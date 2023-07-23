import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import moment from "moment/moment";
import Swal from "sweetalert2";

const MyCollege = () => {
  const { user } = useAuth();

  const { data: candidate = [] } = useQuery({
    queryKey: ["candidates", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_LINK}/candidates?email=${user?.email}`
      );
      return res.data;
    },
  });
  const { collegeData, candidateName, candidateProfilePic, subject } =
    candidate;

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    const currentDate = moment();
    const reviewDate = currentDate.format("MMMM D, YYYY");
    const reviewData = {
      candidateName,
      candidateProfilePic,
      rating,
      reviewDate,
      reviewText,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_API_LINK}/reviews`,
      reviewData,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Great...",
        text: "Thanks for your review! Your review has been submitted.",
      });
    }
  };

  return (
    <Container>
      <div>
        <Helmet>
          <title>My College - EndGamer College</title>
        </Helmet>
        <SectionTitle title="My College" />
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h1 className="text-2xl text-gray-800 font-semibold">
                {collegeData?.collegeName}
              </h1>
              <p className="text-gray-800 font-semibold">
                College Id:{" "}
                <span className="text-gray-700 font-normal">
                  {collegeData?.collegeId}
                </span>
              </p>
              <p className="text-gray-800 font-semibold">
                You are Student Of:{" "}
                <span className="text-gray-700 font-normal capitalize ">
                  {subject}
                </span>
              </p>
              <p className="text-gray-800 font-semibold">
                Location:{" "}
                <span className="text-gray-700 font-normal">
                  Dhaka, Bangladesh
                </span>
              </p>

              <p className="text-gray-800 font-semibold">
                Number of Research:{" "}
                <span className="text-gray-700 font-normal">
                  {collegeData?.numberOfResearch}
                </span>
              </p>
              <p className="text-gray-800 font-semibold">
                Sports Facilities:{" "}
                <span className="text-gray-700 font-normal">
                  {collegeData?.sportsDescription}
                </span>
              </p>
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">
                  Upcoming Events in your College
                </h3>
                {collegeData?.events.map((event) => (
                  <ul key={event.id} className="list-disc pl-6">
                    <li>
                      {event.name} - {event.date}
                    </li>
                  </ul>
                ))}
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">
                  Research History
                </h3>
                {collegeData?.researchWorks.map((researchWork) => (
                  <ul key={researchWork.id} className="list-disc pl-6">
                    <li>
                      {researchWork.title} -{" "}
                      <Link className="text-indigo-500">Details</Link>{" "}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="max-sm:order-first">
              <div className="mx-auto flex flex-wrap">
                <img
                  alt="collegePic"
                  className=" w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={collegeData?.collegeImage}
                  style={{ cursor: "auto" }}
                />{" "}
              </div>
            </div>
          </div>

          {/* Review section  */}
          <div className="bg-gray-100 py-8 mt-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-4">
                Leave a Review About Your College
              </h2>
              <form onSubmit={handleReviewSubmit} className="mb-4">
                <div className="flex flex-col mb-4">
                  <StarRatings
                    rating={rating}
                    starHoverColor="purple"
                    starRatedColor="purple"
                    changeRating={(newRating) => setRating(newRating)}
                    numberOfStars={5}
                    name="rating"
                  />
                  <textarea
                    name="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="border rounded-lg px-4 py-2 mt-4 max-w-2xl"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 mt-6 hover:bg-purple-600 text-white px-4 py-2 rounded-lg duration-200"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyCollege;
