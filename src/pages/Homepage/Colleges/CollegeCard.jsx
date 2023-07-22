import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    collegeImage,
    collegeName,
    admissionDateStart,
    admissionDateEnd,
    events,
    sportsDescription,
    researchWorks,
  } = college;
  console.log(events);
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <div className="container px-5 py-24 mx-auto" style={{ cursor: "auto" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="collegePic"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={collegeImage}
            style={{ cursor: "auto" }}
          />
          <div
            className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
            style={{ cursor: "auto" }}
          >
            <h1
              className="text-gray-900 text-3xl title-font font-medium mb-1"
              style={{ cursor: "auto" }}
            >
              {collegeName}
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Admission Date Start: {admissionDateStart}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Admission Date End: {admissionDateEnd}
            </p>
            {/* <p className="leading-relaxed">
              Dui urna vehicula tincidunt pretium consequat luctus mi, platea
              fermentum conubia tempus ac orci. Pellentesque dictum malesuada
              cubilia faucibus dignissim mi nascetur senectus, augue ad libero
              efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus
              natoque.
            </p> */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
              {events.map((event) => (
                <ul key={event.id} className="list-disc pl-6">
                  <li>
                    {event.name} - {event.date}
                  </li>
                </ul>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Research History</h3>
              {researchWorks.map((researchWork) => (
                <ul key={researchWork.id} className="list-disc pl-6">
                  <li>
                    {researchWork.title} -{" "}
                    <Link className="text-indigo-500">Details</Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Sports</h3>
              <p className="text-gray-500">{sportsDescription}</p>
            </div>
            <button className="bg-purple-500 text-white mt-6 px-4 py-2 rounded hover:bg-purple-600 duration-300">
              Details About This College
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
