import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const MyCollege = () => {
  // const targatedCandidate =
  return (
    <Container>
      <div>
        <Helmet>
          <title>My College - EndGamer College</title>
        </Helmet>
        <SectionTitle title="Admission" />
      </div>
    </Container>
  );
};

export default MyCollege;
