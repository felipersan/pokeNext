import { AnyARecord } from "dns";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { QueryCache } from "react-query";
import styles from "../../styles/Home.module.css";

import {
  getPokemon,
  pokemonGeneric,
  searchPokemon,
} from "../../interfaces/API/GET";
import { useGetPokemon } from "../../services/pokeApi/GET/useGetPokemon";

import * as S from "../../styles/pages/search/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import CardPokemon from "../../components/pages/CardPokemon";
import { useRouter } from "next/router";
import Error from "next/error";

export async function getStaticProps(context: any) {
  const { params } = context;

  const apiPokemon: any = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=400&offset=0`
  ).then((response: any) => {
    return response.json();
  });

  function handleSearchPokemon(
    pokemonArray: Array<pokemonGeneric>,
    pokemonName: string
  ) {
    let newArrayPokemon = pokemonArray.filter((row: pokemonGeneric) => {
      if (row.name.includes(pokemonName as unknown as string)) return row;
    });
    return newArrayPokemon;
  }

  let pokemon = handleSearchPokemon(apiPokemon?.results, params?.name);

  if (pokemon.length > 0) {
    return {
      props: {
        pokemon,
      },
    };
  }else{
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  let paths: any = [];
  return {
    paths,
    fallback: true,
  };
}

const Search: NextPage = ({ pokemon }: any) => {
  const router = useRouter();
  const { name } = router.query;

  if (pokemon) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Pesquisa - {name}</title>
          <meta name="description" content={`Página de pesquisa de pokemons com o termo ${name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <S.Container className="DisplayGridPokemon">
          {pokemon?.map((row: any, key: number) => (
            <CardPokemon key={key} data={row as pokemonGeneric}></CardPokemon>
          ))}
        </S.Container>
      </div>
    );
  } else {
    return (
      <>
        <Error statusCode={404} />
        <footer className="mx-64" />
      </>
    );
  }
};

export default Search;
