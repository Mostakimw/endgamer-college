import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import ImageGallery from "./ImageGallery/ImageGallery";
import ResearchPaperLinks from "./ResearchPaperLinks/ResearchPaperLinks";
import Reviews from "./Reviews/Reviews";
import Search from "./Search/Search";

const Homepage = () => {
  return (
    <Container>
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
