import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useColleges from "../../hooks/useColleges";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges] = useColleges();
  return (
    <Container>
      <div className="w-full">
        <Helmet>
          <title>Admission - EndGamer College</title>
        </Helmet>
        <SectionTitle title="Admission" />

        <div className="overflow-x-auto mt-12 w-full">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>College Name</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college, index) => (
                <tr key={college._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-64">
                          <img
                            src={college?.collegeImage}
                            alt="College image"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-xl text-gray-800 ">
                    <Link
                      to={`/admission/${college?.collegeId}`}
                      className="hover:underline"
                    >
                      {college?.collegeName}
                    </Link>
                  </td>
                  {/* <td>{college?.address}</td> */}
                  <td className="font-semibold text-xl text-gray-800">
                    Rangpur, Bangladesh - 5400
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Admission;
