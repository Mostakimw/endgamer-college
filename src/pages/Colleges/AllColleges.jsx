import Container from "../../components/Container";
import SingleCollege from "./SingleCollege";
import useColleges from "../../hooks/useColleges";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";

const AllColleges = () => {
  const [colleges] = useColleges();

  return (
    <Container>
      <Helmet>
        <title>All Colleges - EndGamer College</title>
      </Helmet>
      <SectionTitle title="Explore New Colleges" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {colleges.map((college) => (
          <SingleCollege key={college._id} college={college}></SingleCollege>
        ))}
      </div>
    </Container>
  );
};

export default AllColleges;
