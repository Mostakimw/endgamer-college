import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt, FaBriefcase, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserProfile = () => {
  const { user } = useAuth();
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_LINK}/users?email=${user?.email}`
      );
      return res.data;
    },
  });

  console.log(users);
  return (
    <>
      <Helmet>
        <title>Profile - EndGamer College</title>
      </Helmet>
      <div className="w-full lg:w-7/12 px-4 mx-auto mt-28">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                {/* <div className="relative">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px z-10"
                  />
                </div> */}
                <div className="relative w-32 h-32 flex justify-center">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    className="shadow-xl rounded-full w-full h-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px object-cover"
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                  />
                </div>
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold leading-normal text-gray-700 mb-2">
                {users?.name}
              </h3>
              <h3 className="text-xl font-semibold leading-normal text-gray-700 mb-4">
                {users?.email}
              </h3>
            </div>

            {/* will be shown after edit  */}
            {users?.description ? (
              <div className="">
                <div className="flex flex-col items-center mt-4">
                  <div className="text-sm mt-0 mb-2 text-gray-400 ">
                    <FaMapMarkerAlt className="mr-2 inline-block text-lg text-gray-400" />
                    Los Angeles, California
                  </div>
                  <div className="text-sm mt-0 mb-2 text-gray-400 ">
                    <FaBriefcase className="mr-2 inline-block text-lg text-gray-400" />
                    Los Angeles, California
                  </div>
                  <div className="text-sm mt-0 mb-2 text-gray-400">
                    <FaUniversity className="mr-2 inline-block text-lg text-gray-400" />
                    Los Angeles, California
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-red-500 mt-6 px-2">
                Edit Your Profile to See Professional Changes. Click the Button
                Below
              </p>
            )}

            <div className="text-center pt-6 pb-10">
              <Link
                to="/edit-profile"
                href="javascript:void(0);"
                className="font-normal text-pink-500"
              >
                Edit Your Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
