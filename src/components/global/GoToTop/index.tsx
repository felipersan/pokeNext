import { ChevronTopIcon } from "../../../../public/assets/images/icons";
import { Container } from "./styles";


export default function GoToTop() {

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Container
    onClick={scrollTop}
    >
      <ChevronTopIcon
      color="#fff"
      />
    </Container>
  );
}
