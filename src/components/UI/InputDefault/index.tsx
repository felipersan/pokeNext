import { InputHTMLAttributes } from "react";
import {SearchIcon} from "../../../../public/assets/images/icons";
import { Container, Input } from "./styles";

interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {
  search: ()=>void
}

export default function InputDefault({ search, ...props }: buttonProps) {
  return (
    <Container>
      <Input {...props} />
      <button
      className="searchIconForInput"
      onClick={search}
      >
        <SearchIcon
        size={20}
        />
      </button>
    </Container>
  );
}
