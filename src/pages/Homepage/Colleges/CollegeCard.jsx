import { Link } from "react-router-dom";

const CollegeCard = () => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <div className="container px-5 py-24 mx-auto" style={{ cursor: "auto" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="collegePic"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
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
              Delta Computer Science College
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Admission Date: 25th August, 2023
            </p>
            {/* <p className="leading-relaxed">
              Dui urna vehicula tincidunt pretium consequat luctus mi, platea
              fermentum conubia tempus ac orci. Pellentesque dictum malesuada
              cubilia faucibus dignissim mi nascetur senectus, augue ad libero
              efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus
              natoque.
            </p> */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <ul className="list-disc pl-6">
                <li>Seminar on Digital Marketing - 30th August, 2023</li>
                <li>Cultural Fest - 5th September, 2023</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Research History</h3>
              <ul className="list-disc pl-6">
                <li>
                  Published Paper on AI -{" "}
                  <Link className="text-indigo-500">Details</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Sports</h3>
              <p className="text-gray-500">
                The college has a well-equipped sports center with facilities
                for various sports such as basketball, football, tennis, and
                more.
              </p>
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
