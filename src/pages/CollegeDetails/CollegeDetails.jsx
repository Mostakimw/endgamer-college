import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

//TODO: have to edit event
const CollegeDetails = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);
  const {
    collegeName,
    admissionDateStart,
    admissionDateEnd,
    collegeImage,
    collegeRating,
    numberOfResearch,
    events,
    researchWorks,
    sportsDescription,
    sportsCategories,
    location,
  } = collegeData;
  return (
    <Container>
      <Helmet>
        <title>{collegeName} - EndGamer College</title>
      </Helmet>
      <SectionTitle title={collegeName} />

      <div className="mt-16">
        <div className="flex justify-center w-9/12 mx-auto">
          <img
            src={collegeImage}
            alt="college image"
            className="w-full rounded-lg"
          />
        </div>

        {/* college details  */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-16">
          <div className="space-y-3">
            <p>
              <span className="font-semibold">Admission Process: </span>
              <span className="text-[#757575] text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia quidem doloremque explicabo libero at repellendus
                tempore impedit vero quam. Recusandae minima obcaecati eius
                quidem unde tenetur impedit doloremque praesentium provident.
              </span>
            </p>
            <p>
              <span className="font-semibold">Location: </span>{" "}
              <span className="text-[#757575] text-sm">{location}</span>
            </p>
            <p>
              <span className="font-semibold">Admission Date: </span>
              <span className="text-[#757575] text-sm">
                {admissionDateStart} - {admissionDateEnd}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Rating: </span>
              <Rating
                placeholderRating={collegeRating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={
                  <FaStar className="text-purple-500"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
              />
            </p>
            <p>
              <span className="font-semibold">Research Completed: </span>
              <span className="text-[#757575] text-sm">{numberOfResearch}</span>
            </p>
            <div>
              <h3 className="font-semibold mb-2">Research History</h3>
              {researchWorks.map((researchWork) => (
                <ul key={researchWork.id} className="list-disc pl-6">
                  <li className="text-[#757575] text-sm">
                    {researchWork.title} -{" "}
                    <Link className="text-indigo-500">Details</Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3 className="mb-2 font-semibold">
                Upcoming Events in your College
              </h3>
              {events.map((event) => (
                <ul key={event.id} className="list-disc pl-6">
                  <li className="space-y-2 mb-2">
                    <p className=" text-sm">
                      {event.name} - {event.date}
                    </p>
                    <p className="text-[#757575] text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque nulla, ratione quidem ipsam rem pariatur tenetur eos
                      modi impedit molestiae!
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* sports section  */}

        <div className="py-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Sports</h2>
          <p className="text-[#757575] mb-4">{sportsDescription}</p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sportsCategories.map((sport) => (
              <div
                key={sport.id}
                className="bg-white p-4 rounded shadow-md flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {sport.name}
                </h3>
                <p className="text-gray-600 mb-2">{sport.facilities}</p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  Team(s):
                </h4>
                <ul className="list-disc list-inside mb-2">
                  {sport.teams.map((team) => (
                    <li key={team} className="text-gray-600">
                      {team}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Upcoming Event:
                </p>
                <p className="text-gray-600">{sport.upcomingEvent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollegeDetails;
