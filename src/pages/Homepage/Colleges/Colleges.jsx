import SectionTitle from "../../../components/SectionTitle";
// import Search from "../Search/Search";
import CollegeCard from "./CollegeCard";

const Colleges = ({ colleges }) => {
  return (
    <div className="my-20">
      <SectionTitle title="Top Colleges" />
      <div className="mt-10">
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
