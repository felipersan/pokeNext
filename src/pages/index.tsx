import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useGetPokemon } from '../services/pokeApi/GET/useGetPokemon'

import * as S from '../styles/pages/styles'
import { getPokemon, pokemonGeneric } from '../interfaces/API/GET'
import CardPokemon from '../components/pages/CardPokemon'
import InfiniteScroll from 'react-infinite-scroll-component'
import { QueryCache, useInfiniteQuery } from 'react-query'

const Home: NextPage = ({ pokemonsArray }: any) => {
  const [offsetPokemon, setOffsetPokemon] = useState<number>(0)
  const [pokemons, setPokemons] = useState<any[]>([])

  const { pokemonsWithPagination } = useGetPokemon(offsetPokemon, 50)

  useEffect(() => {
    if (pokemonsWithPagination) {
      implementPokemonArray(pokemonsWithPagination?.data?.results)
    }
  }, [pokemonsWithPagination])

  function implementPokemonArray(array: Array<pokemonGeneric>) {
    clearCache()
    let lastArray = pokemons
    array.map((row: any) => {
      lastArray.push(row)
    })
    var novaArr = lastArray.filter(function (este: any, i: any) {
      return lastArray.indexOf(este) === i
    })
    setPokemons(novaArr)
  }

  async function clearCache() {
    const queryCache = new QueryCache({
      onError: error => {
        console.log(error)
      },
      onSuccess: data => {
        console.log(data)
      }
    })

    const query = queryCache.clear()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Página em next consumindo a api do pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container className="DisplayGridPokemon">
        <InfiniteScroll
          dataLength={offsetPokemon} //This is important field to render the next data
          next={() => {
            setOffsetPokemon(offsetPokemon + 50)
          }}
          hasMore={true}
          loader={<h4>Carregando...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {pokemons?.map((row: any, key: number) => (
            <CardPokemon key={key} data={row as pokemonGeneric}></CardPokemon>
          ))}
        </InfiniteScroll>
      </S.Container>
    </div>
  )
}

export default Home
