import { Link } from "react-router-dom";

const SingleCollege = ({ college }) => {
  const {
    collegeImage,
    collegeName,
    admissionDateStart,
    admissionDateEnd,
    events,
    sportsDescription,
    researchWorks,
  } = college;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="College image"
        />
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
          <p>
            Rating: <span className="text-[#757575] text-sm">5</span>
          </p>
        </div>
        <div className="card-actions justify-center">
          <Link>
            <button className="bg-purple-500 text-white mt-6 px-4 py-2 rounded hover:bg-purple-600 duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
