import { InputHTMLAttributes, ReactNode } from "react";
import { SearchIcon } from "../../../../public/assets/images/icons";
import { Container, Input } from "./styles";

interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {
  search: () => void;
  icon: ReactNode;
}

export default function InputDefault({ search, icon, ...props }: buttonProps) {

  function pesquisar(e:any){
    e.preventDefault()
    search()

  }
  return (
    <form onSubmit={pesquisar}>
      <Container>
        <Input {...props} />
        <button
          className="searchIconForInput"
          onClick={() => {
            SubmitEvent;
          }}
        >
          {icon}
        </button>
      </Container>
    </form>
  );
}
