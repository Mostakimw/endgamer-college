import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import ImageGallery from "./ImageGallery/ImageGallery";
import Search from "./Search/Search";

const Homepage = () => {
  return (
    <Container>
      <>
        <Search />
        <Colleges />
        <ImageGallery />
      </>
    </Container>
  );
};

export default Homepage;
