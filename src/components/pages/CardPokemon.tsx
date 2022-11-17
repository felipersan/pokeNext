import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { completePokemon, pokemonGeneric } from "../../interfaces/API/GET";
import { useGetCompletePokemon } from "../../services/pokeApi/GET/useGetCompletePokemon";
import { useGetPokemonSpecies } from "../../services/pokeApi/GET/useGetPokemonSpecies";

import * as S from "./styles";

interface pokemon {
  data: pokemonGeneric;
}

export default function CardPokemon({ data }: pokemon) {
  const [completePokemonforCard, setCompletePokemonforCard] =
    useState<completePokemon>({
      abilities: [],
      base_experience: 0,
      forms: [],
      game_indices: [],
      height: 0,
      held_items: [],
      id: 0,
      is_default: false,
      location_area_encounters: "",
      moves: [],
      name: "",
      order: 0,
      past_types: [],
      species: {
        name: "",
        url: "",
      },
      sprites: [],
      stats: [],
      types: [],
      weight: 0,
    });
  const [pokemonSpeciesForCard, setPokemonSpeciesForCard] = useState<any>();

  const { pokemonSpecies } = useGetPokemonSpecies(
    (completePokemonforCard?.id).toString()
  );
  const { completePokemon } = useGetCompletePokemon(data?.name);

  useEffect(() => {
    if (completePokemon) {
      addCompletePokemon(completePokemon.data);
    }
  }, [completePokemon]);

  useEffect(() => {
    if (pokemonSpecies) {
      setPokemonSpeciesForCard(pokemonSpecies.data);
    }
  }, [pokemonSpecies]);

  function pokemonColor(color: string) {
    switch (color) {
      case "black":
        return "#303030";
      case "blue":
        return "#76bcfc";
      case "green":
        return "#49d0b2";
      case "yellow":
        return "#fdda6c";
      case "red":
        return "#fd6b6c";
      case "brown":
        return "#a78876";
      case "grey":
        return "#9195b0";
      case "pink":
        return "#f1c8cc";
      case "purple":
        return "#ae8eb5";
      case "white":
        return "#1212";
      case "yellow":
        return "#e8c250";
      default:
        return "#385fa3";
    }
  }

  function addCompletePokemon(completePokemon: completePokemon) {
    setCompletePokemonforCard(completePokemon);
  }

  console.log(pokemonColor(pokemonSpeciesForCard?.color?.name));

  return (
    <>
      <S.Container
        borderColor={pokemonColor(pokemonSpeciesForCard?.color?.name)}
      >
        <Link
          href={`/pokemon/${completePokemonforCard?.name}`}
          className={"linkPokemonContainer"}
        >
          <Image
            alt={`foto do pokemon`}
            height={100}
            width={100}
            src={completePokemonforCard?.sprites?.front_default}
            className={"pokemonImageProfile"}
          />
          <div className="nameContainer">
            <p className="pokemonName">{completePokemonforCard?.name}</p>
          </div>
        </Link>
      </S.Container>
    </>
  );
}
