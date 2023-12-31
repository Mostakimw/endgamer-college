import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ApplyCollege = () => {
  const { user } = useAuth();
  const collegeData = useLoaderData();
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const candidateName = form.candidateName.value;
    const candidateProfilePic = form.profilePic.value;
    // const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const address = form.address.value;
    const candidateData = {
      collegeData,
      candidateName,
      candidateProfilePic,
      email: user?.email,
      phone,
      subject,
      address,
    };

    console.log(candidateData);
    const res = await axios.post(
      `${import.meta.env.VITE_API_LINK}/candidates`,
      candidateData,
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
        text: "You has been applied successfully!",
      });
    }
  };
  return (
    <Container>
      <div>
        <Helmet>
          <title>Apply - EndGamer College</title>
        </Helmet>
        <SectionTitle title={`Applying ${collegeData?.collegeName}`} />
        <form
          onSubmit={handleSubmitForm}
          className="grid grid-cols-2 gap-4 my-10 p-16 bg-gray-700 text-white rounded-md shadow-lg w-full"
        >
          <div className="m-0 p-0">
            <label>Candidate Name: </label>
            <input
              type="text"
              name="candidateName"
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>
          <div>
            <label>Subject: </label>
            <select
              id="subject"
              name="subject"
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            >
              <option value="">Select a subject</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
              <option value="programming">Programming</option>
            </select>
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>

          <div>
            <label>Profile Picture URL: </label>
            <input
              type="text"
              name="profilePic"
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>
          <div>
            <label>Address: </label>
            <input
              type="text"
              name="address"
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>

          <div className="w-1/3 mx-auto mt-8 pb-6 col-span-2">
            <button className="bg-purple-500 hover:bg-purple-600 duration-300 py-4 w-full">
              Apply
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ApplyCollege;
