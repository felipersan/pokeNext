import Image from "next/image";
import { Container } from "./styles";

import PokemonImage from "../../../../public/assets/images/Pokeball.svg";
import Link from "next/link";
import InputDefault from "../../UI/InputDefault";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";
import {
  LoadingIcon,
  SearchIcon,
} from "../../../../public/assets/images/icons";

export default function Header() {
  const [pokemonSearch, setPokemonSearch] = useState<string>("");
  const [loadSearch, setLoadSearch] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    debounced(pokemonSearch);
  }, [pokemonSearch]);

  const debounced = useDebouncedCallback((value) => {
    searchPokemons(value);
  }, 1000);

  async function searchPokemons(name: string) {
    if (name) {
      setLoadSearch(true);
      router.push(`/search/${name}`).then(() => {
        setLoadSearch(false);
      });
    }
  }

  return (
    <Container>
      <Link
        className="leftSideHeader"
        href={"/"}
        onClick={() => {
          setPokemonSearch("");
        }}
      >
        {PokemonImage && (
          <Image
            className="pokemonLogoImage"
            alt="logo pokemon"
            src={PokemonImage}
            height={100}
            width={100}
          />
        )}
        <h2 className="titleAplication">PokeNext</h2>
      </Link>
      <div className="containerInputDefault">
        <InputDefault
          icon={
            loadSearch ? <LoadingIcon size={20} /> : <SearchIcon size={20} />
          }
          search={() => {
            searchPokemons(pokemonSearch);
          }}
          value={pokemonSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPokemonSearch(e.target.value.toLowerCase());
          }}
          placeholder={"Ex: Bubassaur"}
        />
      </div>
    </Container>
  );
}
