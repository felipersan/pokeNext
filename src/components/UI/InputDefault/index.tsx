import { InputHTMLAttributes } from "react";
import SearchIcon from "../../../../public/assets/images/icons";
import { Container, Input } from "./styles";

interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputDefault({ ...props }: buttonProps) {
  return (
    <Container>
      <Input {...props} />
      <button
      className="searchIconForInput"
      >
        <SearchIcon
        size={20}
        />
      </button>
    </Container>
  );
}
