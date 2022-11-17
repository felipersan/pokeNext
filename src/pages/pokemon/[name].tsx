import { AxiosResponse } from "axios";
import { AnyARecord } from "dns";
import API from "../../services/pokeAPI";
import { useGetSearchPokemon } from "../../services/pokeApi/GET/useGetSearchjPokemon";

export async function getStaticProps(context: any) {
  const { params } = context;
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  ).then((response: any) => {
    console.log("resposta do pokemon", response);
    return response.json();
  });
  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  let paths:any = [];

  await API.get(`pokemon?limit=100000&offset=0`).then((response: any) => {
    response.data.results.map((row: any) => {
      let newObject = {
        params: {
          name: row?.name,
        },
      };
      paths.push(newObject)
    });
  });
  return {
    paths,

    fallback: false,
  };
}

export default function pokemonName({ pokemon }: any) {
  console.log(pokemon);
  return <p>Pokemon Name</p>;
}
