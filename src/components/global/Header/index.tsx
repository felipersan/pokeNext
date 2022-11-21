import Image from "next/image";
import { Container } from "./styles";

import PokemonImage from "../../../../public/assets/images/Pokeball.svg";
import Link from "next/link";
import InputDefault from "../../UI/InputDefault";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";

export default function Header() {
  const [pokemonSearch, setPokemonSearch] = useState<string>("");
  const router = useRouter()

  useEffect(()=>{
    debounced(pokemonSearch)
  },[pokemonSearch])

  const debounced = useDebouncedCallback(
    (value) => {
      searchPokemons(value);
    },
    1000
  );

  async function searchPokemons(name: string) {
    if (name){
      router.push(`/search/${name}`)
    } else if (!name){
      router.push('/')
    }
  }

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
        search={()=>{searchPokemons(pokemonSearch)}}
        value={pokemonSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPokemonSearch(e.target.value);
        }}
        placeholder={"Ex: Bubassaur"}
      />
    </Container>
  );
}
