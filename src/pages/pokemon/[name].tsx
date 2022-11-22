import { AnyARecord } from "dns";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import EvolutionChain from "../../components/pages/pokemon/EvolutionChain";
import ImageCard from "../../components/pages/pokemon/ImageCard";
import PrincipalInformation from "../../components/pages/pokemon/PrincipalInformation";
import RadarPokemonChart from "../../components/pages/pokemon/RadarChart";
import { searchPokemon } from "../../interfaces/API/GET";
import API from "../../services/pokeAPI";
import styles from "../../styles/Home.module.css";

import { Container } from "../../styles/pages/pokemon/name/styles";

export async function getStaticProps(context: any) {
  const { params } = context;
  let pokemon: any;
  let species: any;
  if (params.name.includes("-") === false) {
    pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    ).then((response: any) => {
      return response.json();
    });
    species = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
    ).then((response: any) => {
      return response.json();
    });
  }

  return {
    props: {
      pokemon,
      species,
    },
  };
}

export async function getStaticPaths() {
  let paths: any = [];

  await API.get(`pokemon?limit=400&offset=0`).then((response: any) => {
    response.data.results.map((row: any, key: number) => {
      if (row.name.includes('-') == false) {
        let newObject = {
          params: {
            name: row?.name,
          },
        };
        paths.push(newObject);
      }
    });
  });
  return {
    paths,
    fallback: false,
  };
}

const Pokemon: NextPage = ({ pokemon, species }: any) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon - {name}</title>
        <meta name="description" content={`Página do pokemon - ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="letSidePokemonDetails">
          <ImageCard pokemon={pokemon} />
        </div>
        <div className="rightSidePokemonDetails">
          <PrincipalInformation pokemon={pokemon} />
          <div className="bottomSizeWithChart">
            <div className="radarChartPokemon">
              <RadarPokemonChart pokemon={pokemon} />
            </div>
            <div className="evolutionChain">
              <EvolutionChain pokemon={pokemon} species={species} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pokemon;
