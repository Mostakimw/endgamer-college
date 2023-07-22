import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SingleCollege from "./SingleCollege";

const AllColleges = () => {
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
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <SingleCollege key={college._id} college={college}></SingleCollege>
        ))}
      </div>
    </Container>
  );
};

export default AllColleges;
