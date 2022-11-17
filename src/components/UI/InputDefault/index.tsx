import { InputHTMLAttributes } from "react";
import { Container, Input } from "./styles";

interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputDefault({ ...props }: buttonProps) {
  return (
    <Container>
      <Input {...props} />
    </Container>
  );
}
