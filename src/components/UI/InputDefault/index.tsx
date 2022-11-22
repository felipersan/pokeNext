import { InputHTMLAttributes, ReactNode } from "react";
import { SearchIcon } from "../../../../public/assets/images/icons";
import { Container, Input } from "./styles";

interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {
  search: () => void;
  icon: ReactNode;
}

export default function InputDefault({ search, icon, ...props }: buttonProps) {
  return (
      <form onSubmit={search}>
    <Container>
        <Input {...props} />
        <button className="searchIconForInput" onClick={()=>{SubmitEvent}}>
          {icon}
        </button>
    </Container>
      </form>
  );
}
