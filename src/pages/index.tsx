import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useGetPokemon } from '../services/pokeApi/GET/useGetPokemon'

import * as S from '../styles/pages/styles'
import { getPokemon, pokemonGeneric } from '../interfaces/API/GET'
import CardPokemon from '../components/pages/CardPokemon'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home: NextPage = () => {
  const [offsetPokemon, setOffsetPokemon] = useState<number>(0)
  const [oldCallToApi, setOldCallToApi] = useState<any>(null)
  const [pokemons, setPokemons] = useState<any[]>([])

  const { pokemonsWithPagination } = useGetPokemon(offsetPokemon)

  useEffect(() => {
    if (pokemonsWithPagination) {
      addPokemonsToArray(pokemonsWithPagination)
      setTimeout(() => {
        setOldCallToApi(pokemonsWithPagination.data)
      }, 200)
    }
  }, [pokemonsWithPagination])

  function addPokemonsToArray(pokemonsList: getPokemon) {
    if (pokemons && pokemonsList && oldCallToApi !== pokemonsList.data) {
      setPokemons(oldArray => [...oldArray, ...pokemonsList.data.results])
    } else if (
      !!pokemons &&
      pokemonsList &&
      oldCallToApi !== pokemonsList.data
    ) {
      setPokemons(pokemonsList.data.results)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <S.Container className="DisplayGridPokemon">
        <InfiniteScroll
        dataLength={offsetPokemon} //This is important field to render the next data
        next={()=>{setOffsetPokemon(offsetPokemon + 20)}}
        hasMore={true}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {pokemons.map((row: any, key: number) => (
            <CardPokemon key={key} data={row as pokemonGeneric}></CardPokemon>
        ))}
      </InfiniteScroll>
      </S.Container>
      
    </div>
  )
}

export default Home
