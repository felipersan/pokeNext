import { AnyARecord } from "dns";
import Image from "next/image";
import ImageCard from "../../components/pages/pokemon/ImageCard";
import PrincipalInformation from "../../components/pages/pokemon/PrincipalInformation";
import RadarPokemonChart from "../../components/pages/pokemon/RadarChart";
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

  await API.get(`pokemon?limit=200&offset=0`).then((response: any) => {
    response.data.results.map((row: any, key:number) => {
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
        <ImageCard
        pokemon={pokemon}
        />
      </div>
      <div className="rightSidePokemonDetails">
        <PrincipalInformation
        pokemon={pokemon}
        />
        <div className="bottomSizeWithChart">
          <RadarPokemonChart
          pokemon={pokemon}
          />
        </div>
      </div>
    </Container>
  );
}
