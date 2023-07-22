import Container from "../../components/Container";
import SingleCollege from "./SingleCollege";
import useColleges from "../../hooks/useColleges";

const AllColleges = () => {
  const [colleges] = useColleges();
  console.log(colleges);

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
