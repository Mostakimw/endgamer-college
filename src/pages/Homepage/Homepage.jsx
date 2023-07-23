import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import ImageGallery from "./ImageGallery/ImageGallery";
import ResearchPaperLinks from "./ResearchPaperLinks/ResearchPaperLinks";
import Reviews from "./Reviews/Reviews";
import useColleges from "../../hooks/useColleges";
import Search from "./Search/Search";

const Homepage = () => {
  const [colleges] = useColleges();
  return (
    <Container>
      <Helmet>
        <title>Home - EndGamer College</title>
      </Helmet>
      <>
        <Search />
        <Colleges colleges={colleges} />
        <ImageGallery />
        <ResearchPaperLinks />
        <Reviews />
      </>
    </Container>
  );
};

export default Homepage;
