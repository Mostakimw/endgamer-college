import SectionTitle from "../../../components/SectionTitle";
import CollegeCard from "./CollegeCard";
import useColleges from "../../../hooks/useColleges";

const Colleges = () => {
  const [colleges] = useColleges();
  console.log(colleges);

  return (
    <div className="my-20">
      <SectionTitle title="Top Colleges" />
      <div className="mt-10">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
