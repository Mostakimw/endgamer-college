import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";

const ApplyCollege = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const candidateName = form.candidateName.value;
    const candidateProfilePic = form.profilePic.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const address = form.address.value;
    console.log(
      candidateName,
      candidateProfilePic,
      email,
      phone,
      subject,
      address
    );
  };
  return (
    <Container>
      <div>
        <Helmet>
          <title>Admission - WarriorCamp</title>
        </Helmet>
        <SectionTitle title="First Step TO Grow Future" />
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
              // defaultValue={user?.displayName}
              className="w-2/3 py-2 add-class-input px-2 text-[#757575]"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              // defaultValue={user?.email}
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
            <button className="btn btn-primary w-full">Apply</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ApplyCollege;
