import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import ImageGallery from "./ImageGallery/ImageGallery";
import ResearchPaperLinks from "./ResearchPaperLinks/ResearchPaperLinks";
import Search from "./Search/Search";

const Homepage = () => {
  return (
    <Container>
      <>
        <Search />
        <Colleges />
        <ImageGallery />
        <ResearchPaperLinks />
      </>
    </Container>
  );
};

export default Homepage;
