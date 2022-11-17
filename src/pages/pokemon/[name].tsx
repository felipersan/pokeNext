import { AxiosResponse } from "axios";
import { AnyARecord } from "dns";
import Image from "next/image";
import { searchPokemon } from "../../interfaces/API/GET";
import API from "../../services/pokeAPI";

import { Container } from "../../styles/pages/pokemon/name/styles";

export async function getStaticProps(context: any) {
  const { params } = context;
  const pokemon: searchPokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  ).then((response: any) => {
    return response.json();
  });
  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  let paths: any = [];

  await API.get(`pokemon?limit=100000&offset=0`).then((response: any) => {
    response.data.results.map((row: any) => {
      let newObject = {
        params: {
          name: row?.name,
        },
      };
      paths.push(newObject);
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export default function pokemonName({ pokemon }: any) {
  console.log(pokemon.sprites.other);
  return (
    <Container>
      <div className="letSidePokemonDetails">
        <div className="cardImagePokemon">
          <div className="pokemonTypes">
            {pokemon?.types.map((row: any) => {
              return <span
              className="cardTypePokemon"
              >{row.type.name.toUpperCase()}</span>;
            })}
          </div>
          <Image
            alt={`imagem do pokemon ${pokemon?.name}`}
            src={pokemon.sprites.other.dream_world.front_default}
            width={400}
            height={400}
          />
          <h2 className="PokemonName">{pokemon?.name.toUpperCase()}</h2>
        </div>
      </div>
    </Container>
  );
}
