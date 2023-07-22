import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import ImageGallery from "./ImageGallery/ImageGallery";
import ResearchPaperLinks from "./ResearchPaperLinks/ResearchPaperLinks";
import Reviews from "./Reviews/Reviews";
import Search from "./Search/Search";

const Homepage = () => {
  return (
    <Container>
      <Helmet>
        <title>Home - EndGamer College</title>
      </Helmet>
      <>
        <Search />
        <Colleges />
        <ImageGallery />
        <ResearchPaperLinks />
        <Reviews />
      </>
    </Container>
  );
};

export default Homepage;
