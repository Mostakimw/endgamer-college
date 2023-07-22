import Container from "../../components/Container";
import Colleges from "./Colleges/Colleges";
import Search from "./Search/Search";

const Homepage = () => {
  return (
    <Container>
      <>
        <Search />
        <Colleges />
      </>
    </Container>
  );
};

export default Homepage;
