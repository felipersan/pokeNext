import Image from "next/image";
import { Container } from "./styles";

import PokemonImage from "../../../../public/assets/images/Pokeball.svg";
import Link from "next/link";
import InputDefault from "../../UI/InputDefault";
import React, { useState } from "react";

export default function Header() {
const [pokemonSearch, setPokemonSearch] = useState<string>('')
  return (
    <Container>
      <Link className="leftSideHeader" href={"/"}>
        <Image
          className="pokemonLogoImage"
          alt="logo pokemon"
          src={PokemonImage}
          height={100}
          width={100}
        />
        <h2 className="titleAplication">PokeNext</h2>
      </Link>
      <InputDefault
      value={pokemonSearch}
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPokemonSearch(e.target.value)}}
      placeholder={'Ex: Bubassaur'}
      />
    </Container>
  );
}
