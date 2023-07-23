import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleCollege = ({ college }) => {
  const {
    _id,
    admissionDateStart,
    admissionDateEnd,
    collegeRating,
    collegeImage,
  } = college;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={collegeImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">College Name</h2>
        <p className=" mt-2">
          Admission Start:{" "}
          <span className="text-[#757575] text-sm">
            {admissionDateStart} - {admissionDateEnd}
          </span>
        </p>
        <div className="mt-2">
          <p>
            Research: <span className="text-[#757575] text-sm">50</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Rating: </span>
            <Rating
              placeholderRating={collegeRating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/colleges/${_id}`}>
            <button className="bg-purple-500 text-white mt-6 px-8 py-2 font-semibold rounded hover:bg-purple-600 duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
