import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(colleges);
  return (
    <div>
      <SectionTitle title="Top Colleges" />
      {/* <CollegeCard colleges={colleges} /> */}
      <div>
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
